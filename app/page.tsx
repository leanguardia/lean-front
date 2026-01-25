import Image from 'next/image';
import Logo from '@/app/components/Logo';
import LogoLoop, { type LogoItem } from '@/components/LogoLoop';
import MagnetLines from '@/components/MagnetLines';
import ProfileCard from '@/components/ProfileCard';
import ShinyText from '@/components/ShinyText';
import Iridescence from '@/components/Iridescence';
import ArticleCarousel from '@/components/ArticleCarousel';
import Squares from '@/components/Squares';
import GridCard from '@/components/GridCard';
import {
  interests,
  experienceImages,
  articles,
  externalResources,
  socialLinks,
  calculateGridTemplateRows,
} from '@/lib/data';

// Transform string interests into LogoItems with consistent styling
const interestItems: LogoItem[] = interests.map((text) => ({
  node: (
    <span className="text-gray-800 uppercase font-semibold text-lg md:text-xl lg:text-2xl leading-none">
      {text}
    </span>
  ),
}));

const gridTemplateRows = calculateGridTemplateRows(experienceImages);

export default function Home() {
  return (
    <div className="my-1 py-3 px-2 md:py-4 md:px-4 mx-auto min-h-screen bg-background">
      <div className="grid grid-cols-2 md:grid-cols-12 gap-2 sm:gap-3 md:gap-4 auto-rows-[210px] min-h-screen">

        {/* Hero */}
        <GridCard
          colSpan="col-span-2 md:col-span-3 lg:col-span-2"
          padding="px-3 md:px-4"
          className="flex items-center justify-center"
        >
          <div className="relative z-10 flex items-center justify-center h-full w-full">
            <Logo className="h-full" />
          </div>
        </GridCard>

        {/* Bio */}
        <GridCard
          colSpan="col-span-2 md:col-span-5 lg:col-span-6"
          rowSpan="md:row-span-1"
          padding="px-0 md:px-4"
          className="hover:scale-98 transition-all duration-300 shadow-md hover:shadow-none"
          style={{
            backgroundImage: "url('/white-marble-texture-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'var(--primary)',
          }}
        >
          <div className="relative z-10 flex flex-col h-full p-4 md:p-6 items-center justify-center rounded-xl">
            <div className="text-4xl lg:text-5xl font-serif font-semibold text-gray-800 mb-3">
              <ShinyText text="leancontinuo"/>
            </div>
            <div className="text-2xl text-gray-700 font-sans leading-tight text-center font-semibold pb-1">
              <ShinyText text="evolución interna y externa"/>
            </div>
            <div className="text-lg text-gray-600 font-sans leading-tight text-center font-semibold">
              <ShinyText text="curiosidad y acción para elevar la humanidad"/>
            </div>
          </div>
        </GridCard>

        {/* Experience */}
        <GridCard
          colSpan="col-span-1 md:col-span-4"
          rowSpan="row-span-3 md:row-span-3"
          bg="bg-secondary"
          border="border-2 border-secondary"
          padding="px-3 md:px-4 pb-0 md:pb-4"
        >
          <div className="relative z-10 flex flex-col h-full px-1 py-3 md:py-4 lg:p-6">
            <h3 className="text-md md:text-xl font-serif font-light text-gray-900 mb-2 md:mb-0">
              E X P E R I E N C I A
            </h3>
            <div 
              className="grid grid-cols-2 gap-x-0 lg:gap-x-2 xl:gap-x-8 rounded-lg flex-1"
              style={{ gridTemplateRows: gridTemplateRows }}
            >
              {experienceImages.map((image, index) => (
                <a
                  key={index}
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-neutral-100 rounded-xl flex items-center justify-center p-1 sm:p-2 m-0 sm:m-1 transition-all duration-300 ease-out cursor-pointer overflow-hidden hover:scale-105"
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
        </GridCard>

        {/* AI Chatbot */}
        <GridCard
          colSpan="col-span-1 md:col-span-4"
          rowSpan="row-span-2"
          className="min-h-0"
        >
          <ProfileCard
            avatarUrl="/images/lean.png"
            name="Artificial Lean"
            title="chat with me"
            className="flex-1 min-h-0"
          />
        </GridCard>

        {/* Interests */}
        <GridCard
          colSpan="col-span-1 md:col-span-4"
          rowSpan="row-span-3"
          bg="bg-white"
          border="border-2 border-gray-500"
          padding="px-0 md:px-1 lg:px-4 pb-0 md:pb-4"
        >
          <div className="relative z-10 flex flex-col h-full p-4 md:p-6">
            <h3 className="text-md md:text-xl font-serif font-light text-gray-900 mb-4">I N T E R E S E S</h3>
            <LogoLoop
              logos={interestItems}
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
        </GridCard>

        {/* Data */}
        <GridCard
          colSpan="col-span-1 md:col-span-4"
          rowSpan="row-span-2"
          padding="px-3 md:px-4 pb-2"
        >
          {/* Gradient circle background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              className="z-0 absolute w-full h-full opacity-75"
              style={{
                background: 'radial-gradient(circle, var(--color-accent) 0%, var(--color-secondary) 100%)',
              }}
            />
          </div>
          <div className="relative z-10 flex flex-col h-full p-2 md:p-3 xl:p-6">
            <h3 className="text-md md:text-xl font-serif text-gray-900 mb-6">
              D A T O S
              <span className="text-gray-600 font-serif text-sm inline-block ml-1 md:ml-2">
                próximamente
              </span>
            </h3>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full h-full max-w-[420px] mx-auto aspect-[5/4] sm:aspect-[5/3] md:aspect-[5/2]">
                <MagnetLines
                  containerSize="100%"
                  rows={7}
                  columns={7}
                  lineColor="var(--color-accent-light)"
                  lineHeight="min(7.5vw, 48px)"
                  lineWidth="min(1vw, 6px)"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </GridCard>

        {/* Contact me */}
        <GridCard
          colSpan="col-span-2 md:col-span-4"
          rowSpan="md:row-span-1"
          bg="bg-accent-light"
        >
          <div className="relative flex flex-1 items-center justify-center">
            <Iridescence
              color={[0.3, 0.7, 0.8]}
              mouseReact={false}
              amplitude={0.1}
              speed={0.4}
              className="absolute inset-0 w-full h-full"
            />
            <a
              href="https://t.me/leanguardia"
              target="_blank"
              aria-label="Escribeme en Telegram"
              className="relative z-10 text-white rounded-full text-xl opacity-85 font-bold hover:scale-140 hover:opacity-100 transition duration-300"
            >
              E S C R Í B E M E
            </a>
          </div>
        </GridCard>

        {/* Articles */}
        <GridCard
          colSpan="col-span-2 md:col-span-8"
          rowSpan="row-span-2 md:row-span-2"
          bg="bg-white"
          border="border-2 border-gray-500"
          padding="px-3 md:px-4 pb-2"
          className="transition-shadow"
        >
          <div className="relative z-10 flex flex-col h-full p-4 md:p-6">
            <ArticleCarousel articles={articles} />
          </div>
        </GridCard>

        {/* External Resources */}
        <GridCard
          colSpan="col-span-2 md:col-span-4"
          rowSpan="row-span-1"
          bg="bg-accent"
        >
          <div className="absolute inset-0 w-full h-full z-0">
            <Squares
              direction="diagonal"
              speed={0.3}
              borderColor="#A5D8FF"
              squareSize={49}
            />
          </div>
          <div className="relative z-10 grid grid-cols-2 grid-rows-2 h-full w-full">
            {externalResources.map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex flex-col items-center justify-center gap-2"
              >
                <resource.icon className="text-2xl md:text-3xl text-white group-hover/link:text-accent-light transition-all duration-300" />
                <span className="text-xs md:text-sm text-white group-hover/link:text-accent-light font-sans leading-snug text-center px-2 transition-all duration-300">
                  {resource.label}
                </span>
              </a>
            ))}
          </div>
        </GridCard>
      </div>

      {/* Footer - Socials */}
      <div className="w-full pt-4 md:pt-6 pb-2 px-3 md:px-4">
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-114 text-gray-800 hover:text-gray-600"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
