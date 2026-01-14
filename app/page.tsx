'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { learningData } from '@/lib/data';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  CheckSquare,
  ChevronRight,
  ChevronsDownUp,
  ChevronsUpDown,
  Code,
  FileText,
  Filter,
  FlaskConical,
  LucideIcon,
  Presentation,
  Search,
  X,
} from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

// Levenshtein distance algorithm for fuzzy string matching
function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix: number[][] = [];

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost, // substitution
      );
    }
  }

  return matrix[len1][len2];
}

// Fuzzy match function that returns a score between 0 and 1
function fuzzyMatch(query: string, target: string): number {
  const queryLower = query.toLowerCase();
  const targetLower = target.toLowerCase();

  // Exact match
  if (targetLower.includes(queryLower)) {
    return 1;
  }

  // Calculate similarity based on Levenshtein distance
  const distance = levenshteinDistance(queryLower, targetLower);
  const maxLength = Math.max(queryLower.length, targetLower.length);
  const similarity = 1 - distance / maxLength;

  // Return similarity score (threshold of 0.4 means 60% similar)
  return similarity;
}

export default function LearningMaterialsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(),
  );
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(
    new Set(),
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || null;

    setSearchQuery(search);
    setSelectedCategory(category);
    setIsInitialized(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array - only run once on mount

  const materialTypeIcons: Record<string, LucideIcon> = {
    Lerntext: BookOpen,
    Arbeitsblatt: FileText,
    Folie: Presentation,
    Versuch: FlaskConical,
    Software: Code,
    Übungen: CheckSquare,
  };

  const materialTypeColors: Record<string, string> = {
    Lerntext:
      'bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30',
    Arbeitsblatt:
      'bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30',
    Folie:
      'bg-violet-500/20 text-violet-300 border-violet-500/30 hover:bg-violet-500/30',
    Versuch:
      'bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30',
    Software:
      'bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30',
    Übungen:
      'bg-rose-500/20 text-rose-300 border-rose-500/30 hover:bg-rose-500/30',
  };

  const generatePdfUrl = (topicId: string, materialType: string): string => {
    const cleanId = topicId.replace(/\./g, '');

    const typeCode: Record<string, string> = {
      Lerntext: 'L',
      Arbeitsblatt: 'A',
      Folie: 'F',
      Versuch: 'X',
      Software: 'S',
      Übungen: 'U',
    };

    const code = typeCode[materialType] || '';

    if (materialType === 'Software' || materialType === 'Übungen') {
      return `https://www.gyrator.de/material/${cleanId}${code}/`;
    }

    return `https://www.gyrator.de/material/${cleanId}${code}.pdf`;
  };

  const filteredData = useMemo(() => {
    // First, filter by category if selected
    let data = learningData;
    if (selectedCategory) {
      data = learningData.filter(
        (category) => category.id === selectedCategory,
      );
    }

    // If no search query, return the category-filtered data
    if (!searchQuery) {
      return data;
    }

    // Apply fuzzy search on the category-filtered data
    const sectionsToExpand = new Set<string>();
    const threshold = 0.4;

    const results = data
      .map((category) => {
        // Check if category matches
        const categoryScore = Math.max(
          fuzzyMatch(searchQuery, category.name),
          fuzzyMatch(searchQuery, category.id),
        );

        // If category matches well, return all topics
        if (categoryScore >= threshold) {
          return category;
        }

        // Otherwise, filter topics
        const filteredTopics = category.topics.filter((topic) => {
          const topicScore = Math.max(
            fuzzyMatch(searchQuery, topic.title),
            fuzzyMatch(searchQuery, topic.id),
          );

          if (topicScore >= threshold) {
            return true;
          }

          // Check subtopics
          if (topic.subtopics) {
            const hasMatchingSubtopic = topic.subtopics.some((subtopic) => {
              const subtopicScore = Math.max(
                fuzzyMatch(searchQuery, subtopic.title),
                fuzzyMatch(searchQuery, subtopic.id),
              );

              if (subtopicScore >= threshold) {
                sectionsToExpand.add(topic.id);
                return true;
              }
              return false;
            });

            if (hasMatchingSubtopic) {
              return true;
            }
          }

          return false;
        });

        if (filteredTopics.length === 0) return null;

        return { ...category, topics: filteredTopics };
      })
      .filter(Boolean) as typeof learningData;

    // Update expanded sections based on search results
    if (sectionsToExpand.size > 0) {
      setExpandedSections(sectionsToExpand);
    }

    return results;
  }, [searchQuery, selectedCategory]);

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const toggleCategory = (categoryId: string) => {
    const newCollapsed = new Set(collapsedCategories);
    if (newCollapsed.has(categoryId)) {
      newCollapsed.delete(categoryId);
    } else {
      newCollapsed.add(categoryId);
    }
    setCollapsedCategories(newCollapsed);
  };

  const toggleAllCategories = () => {
    if (collapsedCategories.size === 0) {
      const allCategoryIds = new Set(filteredData.map((cat) => cat.id));
      setCollapsedCategories(allCategoryIds);
      setExpandedSections(new Set());
    } else {
      setCollapsedCategories(new Set());
    }
  };

  useEffect(() => {
    if (!isInitialized) return;

    const params = new URLSearchParams();

    if (searchQuery) {
      params.set('search', searchQuery);
    }

    if (selectedCategory) {
      params.set('category', selectedCategory);
    }

    const newUrl = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;
    router.replace(newUrl, { scroll: false });
  }, [searchQuery, selectedCategory, pathname, router, isInitialized]);

  return (
    <div className='bg-background min-h-screen'>
      <header className='border-border bg-card/50 border-b backdrop-blur-sm'>
        <div className='container mx-auto px-4 py-8'>
          <div className='mb-4 flex items-center justify-between lg:mb-0'>
            <div>
              <h1 className='mb-2 text-4xl font-bold tracking-tight text-balance'>
                Lernmaterialien
              </h1>
              <p className='text-muted-foreground text-lg leading-relaxed'>
                IT-Systeme und Elektrotechnik Kursmaterialien
              </p>
            </div>
            <Button
              variant='outline'
              size='icon'
              className='bg-transparent lg:hidden'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Filter className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </header>

      <div className='container mx-auto px-4 py-8'>
        <div className='grid gap-8 lg:grid-cols-[280px_1fr]'>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='fixed inset-0 z-40 bg-black/50 lg:hidden'
                onClick={() => setIsMobileMenuOpen(false)}
              />
            )}
          </AnimatePresence>

          <motion.aside
            initial={false}
            animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`bg-background border-border fixed top-0 left-0 z-50 h-screen w-70 space-y-6 overflow-y-auto border-r p-4 lg:sticky lg:top-4 lg:z-auto lg:h-fit lg:w-auto lg:transform-none! lg:overflow-visible lg:border-r-0 lg:bg-transparent lg:p-0`}
          >
            <div className='mb-4 flex items-center justify-between lg:hidden'>
              <h2 className='font-semibold'>Filter</h2>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className='h-5 w-5' />
              </Button>
            </div>

            <div className='relative'>
              <Search className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
              <Input
                placeholder='Suchen...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='bg-card border-border pr-9 pl-9'
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className='text-muted-foreground hover:text-foreground absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transition-colors'
                  aria-label='Suche leeren'
                >
                  <X className='h-4 w-4' />
                </button>
              )}
            </div>

            <div className='space-y-2'>
              <h3 className='text-muted-foreground mb-3 text-sm font-semibold tracking-wider uppercase'>
                Kategorien
              </h3>
              <Button
                variant={selectedCategory === null ? 'secondary' : 'ghost'}
                className='w-full justify-start font-medium'
                onClick={() => {
                  setSelectedCategory(null);
                  setIsMobileMenuOpen(false);
                }}
              >
                Alle Kategorien
              </Button>
              {learningData.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? 'secondary' : 'ghost'
                  }
                  className='w-full justify-start font-medium'
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className='mr-2 font-mono text-xs opacity-60'>
                    {category.id}
                  </span>
                  {category.name}
                </Button>
              ))}
            </div>

            <div className='border-border space-y-2 border-t pt-4'>
              <h3 className='text-muted-foreground mb-3 text-sm font-semibold tracking-wider uppercase'>
                Materialtypen
              </h3>
              <div className='space-y-2'>
                {Object.entries(materialTypeIcons).map(([type, Icon]) => (
                  <div key={type} className='flex items-center gap-2 text-sm'>
                    <Icon className='text-muted-foreground h-4 w-4' />
                    <span className='text-muted-foreground'>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          <main className='space-y-6 overflow-hidden'>
            <div className='flex justify-end'>
              <Button
                variant='outline'
                size='sm'
                onClick={toggleAllCategories}
                className='gap-2 bg-transparent'
              >
                {collapsedCategories.size === 0 ? (
                  <>
                    <ChevronsDownUp className='h-4 w-4' />
                    Alle einklappen
                  </>
                ) : (
                  <>
                    <ChevronsUpDown className='h-4 w-4' />
                    Alle aufklappen
                  </>
                )}
              </Button>
            </div>

            {filteredData.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='py-12 text-center'
              >
                <p className='text-muted-foreground text-lg'>
                  Keine Ergebnisse gefunden
                </p>
              </motion.div>
            ) : (
              <AnimatePresence mode='wait'>
                {filteredData.map((category, categoryIndex) => {
                  const isCategoryCollapsed = collapsedCategories.has(
                    category.id,
                  );

                  return (
                    <motion.div
                      key={category.id}
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 40, opacity: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: categoryIndex * 0.05,
                        ease: 'easeOut',
                      }}
                      className='space-y-4'
                    >
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className='mb-4 flex w-full items-center gap-3 transition-opacity hover:opacity-80'
                      >
                        <motion.div
                          animate={{ rotate: isCategoryCollapsed ? 0 : 90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className='text-muted-foreground h-5 w-5' />
                        </motion.div>
                        <div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg'>
                          <span className='text-primary font-mono font-bold'>
                            {category.id}
                          </span>
                        </div>
                        <div className='text-left'>
                          <h2 className='text-2xl font-bold tracking-tight'>
                            {category.name}
                          </h2>
                          <p className='text-muted-foreground text-sm'>
                            {category.topics.length} Themen
                          </p>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {!isCategoryCollapsed && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className='space-y-2 overflow-hidden'
                          >
                            <AnimatePresence mode='wait'>
                              {category.topics.map((topic, topicIndex) => {
                                const isExpanded = expandedSections.has(
                                  topic.id,
                                );
                                const hasSubtopics =
                                  topic.subtopics && topic.subtopics.length > 0;

                                return (
                                  <motion.div
                                    key={topic.id}
                                    initial={{ x: 40, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 40, opacity: 0 }}
                                    transition={{
                                      duration: 0.25,
                                      delay: topicIndex * 0.03,
                                      ease: 'easeOut',
                                    }}
                                    className='border-border bg-card overflow-hidden rounded-lg border'
                                  >
                                    <button
                                      onClick={() =>
                                        hasSubtopics && toggleSection(topic.id)
                                      }
                                      className='hover:bg-accent/50 flex w-full items-center justify-between px-4 py-3 transition-colors'
                                    >
                                      <div className='flex items-center gap-3'>
                                        {hasSubtopics && (
                                          <motion.div
                                            animate={{
                                              rotate: isExpanded ? 90 : 0,
                                            }}
                                            transition={{ duration: 0.2 }}
                                          >
                                            <ChevronRight className='text-muted-foreground h-4 w-4' />
                                          </motion.div>
                                        )}
                                        <span className='text-muted-foreground font-mono text-xs'>
                                          {topic.id}
                                        </span>
                                        <span className='font-medium'>
                                          {topic.title}
                                        </span>
                                      </div>
                                      {topic.materials &&
                                        topic.materials.length > 0 && (
                                          <div
                                            className='flex flex-wrap gap-1.5'
                                            onClick={(e) => e.stopPropagation()}
                                          >
                                            {topic.materials.map(
                                              (material, idx) => {
                                                const Icon =
                                                  materialTypeIcons[material];
                                                const pdfUrl = generatePdfUrl(
                                                  topic.id,
                                                  material,
                                                );
                                                return (
                                                  <a
                                                    key={idx}
                                                    href={pdfUrl}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className={`${materialTypeColors[material]} inline-flex h-8 items-center justify-center rounded-md border px-3 text-xs font-medium transition-all`}
                                                  >
                                                    {Icon && (
                                                      <Icon className='mr-1.5 h-3.5 w-3.5' />
                                                    )}
                                                    {material}
                                                  </a>
                                                );
                                              },
                                            )}
                                          </div>
                                        )}
                                    </button>

                                    <AnimatePresence initial={false}>
                                      {isExpanded && hasSubtopics && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{
                                            height: 'auto',
                                            opacity: 1,
                                          }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{
                                            duration: 0.3,
                                            ease: 'easeInOut',
                                          }}
                                          className='border-border bg-accent/20 overflow-hidden border-t'
                                        >
                                          {topic.subtopics?.map((subtopic) => (
                                            <div
                                              key={subtopic.id}
                                              className='hover:bg-accent/50 border-border flex items-center justify-between border-b px-4 py-3 pl-12 transition-colors last:border-b-0'
                                            >
                                              <div className='flex items-center gap-3'>
                                                <span className='text-muted-foreground font-mono text-xs'>
                                                  {subtopic.id}
                                                </span>
                                                <span className='text-sm'>
                                                  {subtopic.title}
                                                </span>
                                              </div>
                                              {subtopic.materials &&
                                                subtopic.materials.length >
                                                  0 && (
                                                  <div className='flex flex-wrap gap-1.5'>
                                                    {subtopic.materials.map(
                                                      (material, idx) => {
                                                        const Icon =
                                                          materialTypeIcons[
                                                            material
                                                          ];
                                                        const pdfUrl =
                                                          generatePdfUrl(
                                                            subtopic.id,
                                                            material,
                                                          );
                                                        return (
                                                          <a
                                                            key={idx}
                                                            href={pdfUrl}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className={`${materialTypeColors[material]} inline-flex h-8 items-center justify-center rounded-md border px-3 text-xs font-medium transition-all`}
                                                          >
                                                            {Icon && (
                                                              <Icon className='mr-1.5 h-3.5 w-3.5' />
                                                            )}
                                                            {material}
                                                          </a>
                                                        );
                                                      },
                                                    )}
                                                  </div>
                                                )}
                                            </div>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </motion.div>
                                );
                              })}
                            </AnimatePresence>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
