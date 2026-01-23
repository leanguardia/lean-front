import Image from 'next/image';
import Logo from './components/Logo';
import LogoLoop, { type LogoItem } from '../components/LogoLoop';
import MagnetLines from '@/components/MagnetLines';
import ProfileCard from '../components/ProfileCard';
import ShinyText from '../components/ShinyText';
import Iridescence from '../components/Iridescence';
import ArticleCarousel, { type Article } from '../components/ArticleCarousel';
import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';

export default function Home() {
  const interests: LogoItem[] = [
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none ">Experimentación científica</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">Inteligencia Artificial</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">ANÁLISIS DE DATOS</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">Ingeniería de software</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">blockchain y descentralización</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">Pensamiento Probabilístico</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">Aprendizaje continuo</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">Educación Orgánica</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">Lectura y Escritura</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">Filosofía ecléctica</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">Cultura humanista</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">Leyes de la naturaleza</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">Arte y diseño visual</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">Música y Mezcla Deejay</span> },
    { node: <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">Autoconocimiento y expansión</span> },
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

  const articles: Article[] = [
    {
      title: 'Todo comienza con tus valores',
      excerpt: 'Si prestas atención, todos exponemos nuestros valores continuamente…',
      image: '/images/articles/valores.jpeg',
    },
    {
      title: 'Leer',
      excerpt: 'Te encuentras en una isla. La brisa es lenta y cálida, acaricia tu piel y se siente familiar…',
      image: '/images/articles/leer.jpeg',
    },
    {
      title: 'Síndrome del impostor',
      excerpt: 'Mike, el cofundador de Atlassian y representante de Australia en el evento World Entrepreneur…',
      image: '/images/articles/imposter.jpeg',
    },
    {
      title: 'Tecnología',
      excerpt: 'El camino de tierra era irregular, estaba marcado por huellas de caballo y ruedas de carrozas arrastradas…',
      image: '/images/articles/tecnologia.jpeg',
    },
  ];

  return (
    <div className="my-1 py-4 px-4 sm:py-4 mx-auto min-h-screen bg-background">
      <div className="grid grid-cols-2 md:grid-cols-12 gap-3 auto-rows-[210px] min-h-screen">

        {/* Hero */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-4 flex-grow flex items-center justify-center">
            <div className="relative z-10 flex items-center justify-center h-full w-full">
              <Logo className="h-full" />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="col-span-1 md:col-span-5 lg:col-span-6 md:row-span-1 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-0 md:px-4 flex-grow bg-primary border-2 border-primary">
            <div className="relative z-10 flex flex-col h-full p-6 items-center justify-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-gray-800 mb-3">
                <ShinyText text="leancontinuo"/>
              </div>
              <div className="leading-tight text-lg md:text-2xl text-gray-700 font-sans text-center font-semibold pb-1">
                <ShinyText text="Evolución interna y externa"/>
              </div>
              <div className="leading-tight text-md md:text-lg text-gray-600 font-sans text-center font-semibold">
                <ShinyText text="Eleva la humanidad a través de la curiosidad y la acción"/>
              </div>
            </div>
          </div>
        </div>

        {/* Relations - */}
        <div className="col-span-1 row-span-3 md:col-span-4 md:row-span-3 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-0 md:px-4 pb-0 md:pb-4 flex-grow bg-secondary border-2 border-secondary">
            <div className="relative z-10 flex flex-col h-full px-1 py-4 lg:p-6">
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
        <div className="col-span-1 row-span-2 md:col-span-4 flex flex-col">
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
        <div className="col-span-1 row-span-3 md:col-span-4 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-0 md:px-1 lg:px-4 pb-0 md:pb-4 flex-grow bg-white border-2 border-gray-500">
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
        <div className="col-span-1 row-span-3 md:col-span-4 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-4 pb-2 flex-grow">
            {/* Gradient circle background */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                className="z-0"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background:
                    'radial-gradient(circle, var(--color-accent) 0%, var(--color-secondary) 100%)',
                  opacity: 0.75,
                }}
              />
            </div>
            <div className="relative z-10 flex flex-col h-full p-2 md:p-3 xl:p-6">
              <h3 className="text-lg md:text-xl font-serif text-gray-900 mb-6">
                D A T A V I Z 
                <span className="text-gray-600 font-serif text-sm inline-block ml-2">próximamente</span>
              </h3>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full h-full max-w-[420px] mx-auto aspect-[5/4] sm:aspect-[5/3] md:aspect-[5/2]">
                  <MagnetLines
                    containerSize="100%"
                    rows={10}
                    columns={6}
                    lineColor="var(--color-accent-light)"
                    lineHeight="min(7.5vw, 48px)"
                    lineWidth="min(1vw, 6px)"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="col-span-1 md:col-span-4 md:row-span-1 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl flex-grow bg-accent-light">
            <div className="relative flex flex-1 items-center justify-center">
              <Iridescence
                color={[0.3,0.7,0.8]}
                mouseReact={false}
                amplitude={0.1}
                speed={0.4}
                className="absolute inset-0 w-full h-full"
              />
              
              <a
                href="https://t.me/leanguardia"
                target="_blank"
                aria-label="Escribeme en Telegram"
                className="relative z-10 text-white px-8 py-3 rounded-full text-xl opacity-85 font-bold hover:scale-140 hover:opacity-100 transition duration-300"
              >
                E S C R Í B E M E
              </a>
            </div>
          </div>
        </div>

        {/* Artículos Carousel */}
        <div className="col-span-2 md:col-span-8 md:row-span-2 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-2xl px-4 pb-2 flex-grow bg-white transition-shadow border-2 border-gray-500">
            <div className="relative z-10 flex flex-col h-full p-6">
              <ArticleCarousel articles={articles} />
            </div>
          </div>
        </div>

        {/* Spotify */}
        {/* <div className="col-span-2 md:col-span-7 md:row-span-1 flex flex-col">
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
        </div> */}
      </div>

      {/* Socials - Full Width Row */}
      <div className="w-full pt-6 pb-2 px-4">
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/leandro-guardia"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-114 text-gray-800 hover:text-gray-600"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/leancontinuo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-114 text-gray-800 hover:text-gray-600"
            aria-label="X (Twitter)"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/leanguardia"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-114 text-gray-800 hover:text-gray-600"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/leancontinuo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-114 text-gray-800 hover:text-gray-600"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
