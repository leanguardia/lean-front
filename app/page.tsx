import Image from 'next/image';
import Logo from './components/Logo';
import LogoLoop, { type LogoItem } from '../components/LogoLoop';
import ProfileCard from '../components/ProfileCard';

export default function Home() {
  const interests: LogoItem[] = [
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Experimentación científica</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Inteligencia Artificial</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">ANÁLISIS DE DATOS</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Ingeniería de software</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">blockchain y descentralización</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Pensamiento Probabilístico</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Aprendizaje continuo</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Educación Orgánica</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Lectura y Escritura</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Filosofía ecléctica</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Cultura humanista</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Leyes de la naturaleza</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Arte y diseño visual</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Música y Mezcla Deejay</p> },
    { node: <p className="text-gray-800 uppercase font-semibold text-2xl">Autoconocimiento y expansión</p> },
  ];

  const relationsImages = [
    { src: '/images/relations/university-of-bristol.png', alt: 'University of Bristol', isSquare: false, url: 'https://www.bristol.ac.uk/science-engineering/' },
    { src: '/images/relations/toptal.png', alt: 'Toptal', isSquare: false, url: 'https://www.toptal.com/developers/resume/leandro-guardia' },
    { src: '/images/relations/chevening.png', alt: 'Chevening', isSquare: true, url: 'https://www.chevening.org/' },
    { src: '/images/relations/ucb.png', alt: 'UCB', isSquare: true, url: 'https://cba.ucb.edu.bo/' },
    { src: '/images/relations/elgeniox.png', alt: 'Elgeniox', isSquare: false, url: 'https://elgeniox.com/' },
    { src: '/images/relations/nueva-acropolis.png', alt: 'Nueva Acropolis', isSquare: false, url: 'https://acropolis.org.bo/' },
    { src: '/images/relations/caff.png', alt: 'CAFF', isSquare: true, url: 'https://froebel.edu.bo/' },
    { src: '/images/relations/afs.png', alt: 'AFS', isSquare: true, url: 'https://www.afs.de/' },
  ];

  // Calculate grid template rows based on isSquare property
  // Group images by rows (2 per row) and determine row height
  const gridTemplateRows = Array.from({ length: relationsImages.length / 2 }, (_, rowIndex) => {
    const firstImageInRow = relationsImages[rowIndex * 2];
    // If the first image in the row is square, use 1fr, otherwise 0.65fr for horizontal
    return firstImageInRow.isSquare ? '1fr' : '0.65fr';
  }).join(' ');

  return (
    <div className="my-1 py-4 px-4 sm:py-4 mx-auto min-h-screen bg-background">
      <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-3 auto-rows-[210px] min-h-screen">

        {/* Hero */}
        <div className="xs:col-span-1 sm:col-span-6 md:row-span-1 md:col-span-3 lg:col-span-2 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-4 flex-grow flex items-center justify-center">
            <div className="relative z-10 flex items-center justify-center h-full w-full">
              <Logo className="h-full" />
            </div>
          </div>
        </div>

        {/* Why? */}
        <div className="xs:col-span-1 sm:col-span-6 md:row-span-1 md:col-span-5 lg:col-span-6 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-4 flex-grow bg-primary border-2 border-primary">
            <div className="absolute inset-0 bg-primary"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
              <h3 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-800 mb-3">
                leancontinuo
              </h3>
              <p className="text-lg md:text-xl text-gray-700 font-sans text-center font-semibold pb-1">
                Evolución interna y externa
              </p>
              <p className="text-md m:text-lg text-gray-600 font-sans text-center font-semibold">
                Eleva la humanidad a través de la curiosidad y la acción
              </p>
            </div>
          </div>
        </div>

        {/* Relations - */}
        <div className="sm:col-span-6 md:col-span-4 md:row-span-3 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-4 pb-4 flex-grow bg-secondary border-2 border-secondary">
            <div className="relative z-10 flex flex-col h-full px-1 py-4 lg:px-6 lg:py-4">
              <h3 className="text-lg md:text-xl font-serif font-light text-gray-900 mb-2 md:mb-0">R E L A C I O N E S</h3>
              <div 
                className="grid grid-cols-2 gap-x-0 lg:gap-x-2 xl:gap-x-8 rounded-lg flex-1"
                style={{ gridTemplateRows: gridTemplateRows }}
              >
                {relationsImages.map((image, index) => (
                  <a
                    key={index}
                    href={image.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-neutral-100 rounded-xl flex items-center justify-center p-2 m-1 transition-all duration-300 ease-out cursor-pointer overflow-hidden hover:scale-105"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.isSquare ? 160 : 260}
                      height={image.isSquare ? 160 : 80}
                      className="w-full h-full object-contain p-0"
                      sizes="(max-width: 180px) 100vw, 50vw"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chat with me */}
        <div className="sm:col-span-6 md:col-span-4 row-span-2 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl flex-grow min-h-0">
            <ProfileCard
              avatarUrl="/images/lean.png"
              name="Artificial Lean"
              title="chat with me"
              className="flex-1 min-h-0"
            />
          </div>
        </div>

        {/* Interests */}
        <div className="xs:col-span-1 sm:col-span-6 md:col-span-4 row-span-2 md:row-span-3 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-4 pb-4 flex-grow bg-white border-2 border-gray-500">
            <div className="relative z-10 flex flex-col h-full p-6">
              <h3 className="text-lg md:text-xl font-serif font-light text-gray-900 mb-4">I N T E R E S E S</h3>
              <LogoLoop
                logos={interests}
                direction="up"
                speed={33}
                hoverSpeed={99}
                logoHeight={18}
                gap={10}
                ariaLabel="Interests"
                fadeOut
                fadeOutColor="var(--color-white)"
                className="h-full"
              />
            </div>
          </div>
        </div>

        {/* Blog */}
        <div className="sm:col-span-6 md:col-span-4 md:row-span-3 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-4 pb-4 flex-grow bg-secondary border-2 border-secondary">
            <div className="absolute inset-0 bg-secondary"></div>
            <div className="relative z-10 flex flex-col h-full p-6">
            <h3 className="text-lg md:text-xl font-serif font-light text-gray-900 mb-4">B L O G</h3>
              <div className="space-y-4 flex-1">
                <article className="mb-4 p-3 bg-accent-light/50 rounded-2xl border border-secondary/30">
                  <h4 className="text-xl font-serif font-semibold text-gray-900 mb-2">Lorem Ipsum</h4>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                  </p>
                </article>
                <article className="p-3 bg-accent-light/50 rounded-2xl border border-secondary/30">
                  <h4 className="text-xl font-serif font-semibold text-gray-900 mb-2">Dolor Sit Amet</h4>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* Download CV */}
        <div className="sm:col-span-6 md:col-span-4 md:row-span-1 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-4 pb-4 flex-grow bg-accent-light border-2 border-accent-light">
            <div className="absolute inset-0 bg-accent-light"></div>
            <div className="relative z-10 flex flex-col justify-center h-full p-6">
              <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-2">CV</h3>
              <p className="text-gray-800 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        {/* Data Viz */}
        <div className="sm:col-span-6 md:col-span-8 md:row-span-2 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-4 pb-4 flex-grow bg-white transition-shadow border-2 border-gray-500">
            <div className="relative z-10 flex flex-col h-full p-6">
              <h3 className="text-lg md:text-xl font-serif text-gray-900 mb-6">D A T A V I Z</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                <div className="p-4 bg-white rounded-2xl border border-neutral/30">
                  <p className="text-neutral text-sm md:text-base leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="text-accent font-medium hover:underline">
                    Explorar datos →
                  </a>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-neutral/30">
                  <p className="text-neutral text-sm md:text-base leading-relaxed mb-3">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="#" className="text-accent font-medium hover:underline">
                    Ver análisis →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spotify */}
        <div className="sm:col-span-6 md:col-span-7 md:row-span-1 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-4 pb-4 flex-grow bg-accent-light border-2 border-accent-light">
            <div className="absolute inset-0 bg-accent-light"></div>
            <div className="relative z-10 flex flex-row items-center justify-between h-full p-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-2">Spotify</h3>
                <p className="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="sm:col-span-6 md:col-span-5 md:row-span-1 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-4 pb-4 flex-grow bg-primary transition-shadow border-2 border-primary">
            <div className="relative z-10 flex flex-col justify-center h-full p-6">
              <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">Socials</h3>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="text-accent font-medium hover:underline text-sm px-3 py-1 border border-accent rounded hover:bg-accent hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-accent font-medium hover:underline text-sm px-3 py-1 border border-accent rounded hover:bg-accent hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-accent font-medium hover:underline text-sm px-3 py-1 border border-accent rounded hover:bg-accent hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
