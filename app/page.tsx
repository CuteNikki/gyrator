import { LearningMaterials } from '@/components/learning-materials';
import { scrapeGyrator } from '@/lib/data';

export const revalidate = 3600; // Revalidate für die ganze Seite alle 60 Min

export default async function Page() {
  const data = await scrapeGyrator();

  if ('error' in data) {
    return (
      <div className='flex h-svh w-svw flex-col items-center justify-center p-8'>
        <h1 className='mb-2 text-2xl font-bold'>Fehler!</h1>
        <p className='text-muted-foreground'>
          Es konnten keine Daten geladen werden.
          <br />
          {data.status} {data.error}
        </p>
      </div>
    );
  }

  return (
    <LearningMaterials
      categories={data.categories}
      lastUpdated={data.lastUpdated}
    />
  );
}
