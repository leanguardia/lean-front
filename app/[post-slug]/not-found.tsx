import HidePageLoader from '@/app/components/HidePageLoader';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <HidePageLoader />
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <h1 className="font-serif text-2xl text-gray-900">404 - Ni idea</h1>
      <p className="mt-2 font-sans text-gray-600 text-center">
        No sé qué estás buscando, pero aquí no lo encontrarás.
      </p>
      <Link
        href="/"
        className="mt-6 font-sans text-accent hover:underline"
      >
        Volver al inicio
      </Link>
    </div>
    </>
  );
}
