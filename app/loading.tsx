import { Spinner } from '@/components/ui/spinner';

export default function LoadingPage() {
  return (
    <div className='flex h-svh w-svw items-center justify-center'>
      <Spinner className='size-8' />
    </div>
  );
}
