export interface Subtopic {
  id: string;
  title: string;
  materials?: string[];
}

export interface Topic {
  id: string;
  title: string;
  materials?: string[];
  subtopics?: Subtopic[];
}

export interface Category {
  id: string;
  name: string;
  topics: Topic[];
}

import * as cheerio from 'cheerio';

export async function scrapeGyrator() {
  try {
    const res = await fetch('https://gyrator.de/material/');

    if (!res.ok) {
      return { error: 'Failed to fetch page', status: res.status };
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    const categories: Category[] = [];
    let lastUpdated = '';

    let currentCategory: Category | null = null;
    let currentTopic: Topic | null = null;

    $('body')
      .contents()
      .each((_, elem) => {
        const el = $(elem);

        // =========================
        // LAST UPDATED / Stand
        // =========================
        if (elem.type === 'text') {
          const text = elem.data?.trim();
          if (text) {
            const match = text.match(/Stand:\s*(\d{2}\.\d{2}\.\d{4})/);
            if (match) {
              lastUpdated = match[1];
            }
          }
        }

        // =========================
        // CATEGORY
        // <h3><a name="B">B Betriebssysteme</a></h3>
        // =========================
        if (elem.type === 'tag' && el.is('h3')) {
          const text = el.text().trim();
          const match = text.match(/^([A-Z])\s+(.*)$/);

          if (match) {
            currentCategory = {
              id: match[1],
              name: match[2],
              topics: [],
            };
            categories.push(currentCategory);
            currentTopic = null;
          }
          return;
        }

        // =========================
        // TOPIC
        // <b>B.1 Anwendung</b>
        // =========================
        if (elem.type === 'tag' && el.is('b') && currentCategory) {
          const text = el.text().trim();
          const match = text.match(/^([A-Z]\.\d+)\s+(.*)$/);

          if (match) {
            currentTopic = {
              id: match[1],
              title: match[2],
              subtopics: [],
            };
            currentCategory.topics.push(currentTopic);
          }
          return;
        }

        // =========================
        // SUBTOPIC + MATERIALS
        // Text node followed by <a> until <br>
        // =========================
        if (elem.type === 'text' && currentTopic) {
          const text = elem.data?.replace(/\u00a0/g, ' ').trim();
          if (!text) return;

          // B.1.1 Einführung
          const match = text.match(/^([A-Z]\.\d+\.\d+)\s+(.*)$/);
          if (!match) return;

          const materials: string[] = [];

          let next = el.next();
          while (next.length && !next.is('br')) {
            if (next.is('a')) {
              materials.push(next.text().trim());
            }
            next = next.next();
          }

          const subtopic: Subtopic = {
            id: match[1],
            title: match[2],
            materials: materials.length ? materials : undefined,
          };

          currentTopic.subtopics!.push(subtopic);
        }
      });

    return { categories, lastUpdated };
  } catch (error) {
    console.error('Scraping error:', error);
    return { error: 'An error occurred while scraping', status: 500 };
  }
}
