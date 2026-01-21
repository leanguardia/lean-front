import Logo from './components/Logo';

export default function Home() {
  return (
    <div className="py-4 px-4 sm:py-4 mx-auto min-h-screen bg-background">
      <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-5 auto-rows-[210px] min-h-screen">

        {/* Hero */}
        <div className="xs:col-span-1 sm:col-span-6 md:row-span-1 md:col-span-3 lg:col-span-2 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 flex-grow flex items-center justify-center">
            <div className="relative z-10 flex items-center justify-center h-full w-full">
              <Logo className="h-full" />
            </div>
          </div>
        </div>

        {/* Why? */}
        <div className="xs:col-span-1 sm:col-span-6 md:row-span-1 md:col-span-5 lg:col-span-6 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 flex-grow bg-accent hover:opacity-90 transition-opacity border-2 border-accent">
            <div className="absolute inset-0 bg-accent"></div>
            <div className="relative z-10 flex flex-col justify-center h-full p-6">
              <h3 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-3">leancontinuo</h3>
              <p className="text-white/95 text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="xs:col-span-1 sm:col-span-6 md:col-span-4 md:row-span-3 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 flex-grow bg-secondary hover:opacity-90 transition-opacity border-2 border-secondary">
            <div className="absolute inset-0 bg-secondary"></div>
            <div className="relative z-10 flex flex-col h-full p-6">
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">Interests</h3>
              <div className="space-y-4 flex-1">
                <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
                <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat with me */}
        <div className="sm:col-span-6 md:col-span-4 md:row-span-2 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 flex-grow bg-primary hover:opacity-90 transition-opacity border-2 border-primary">
            <div className="absolute inset-0 bg-primary"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">Chat with my artificial self</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors border-2 border-accent">
                Iniciar conversación
              </button>
            </div>
          </div>
        </div>

        {/* Institutions - Fondo blanco con neutro (Gris Culto) para texto */}
        <div className="sm:col-span-6 md:col-span-4 md:row-span-3 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 flex-grow bg-white hover:shadow-lg transition-shadow border-2 border-neutral">
            <div className="relative z-10 flex flex-col h-full p-6">
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">Institutions</h3>
              <div className="space-y-4 flex-1">
                <p className="text-neutral text-sm md:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <p className="text-neutral text-sm md:text-base leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
                <a href="#" className="text-accent font-medium hover:underline inline-block mt-4">
                  Ver más →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Blog */}
        <div className="sm:col-span-6 md:col-span-4 md:row-span-3 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 flex-grow bg-secondary hover:opacity-90 transition-opacity border-2 border-secondary">
            <div className="absolute inset-0 bg-secondary"></div>
            <div className="relative z-10 flex flex-col h-full p-6">
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">Blog</h3>
              <div className="space-y-4 flex-1">
                <article className="mb-4 p-3 bg-accent-light/50 rounded-lg border border-secondary/30">
                  <h4 className="text-xl font-serif font-semibold text-gray-900 mb-2">Lorem Ipsum</h4>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                  </p>
                </article>
                <article className="p-3 bg-accent-light/50 rounded-lg border border-secondary/30">
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
          <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 flex-grow bg-accent-light hover:opacity-90 transition-opacity border-2 border-accent-light">
            <div className="absolute inset-0 bg-accent-light"></div>
            <div className="relative z-10 flex flex-col justify-center h-full p-6">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-2">CV</h3>
              <p className="text-gray-800 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        {/* Data Viz */}
        <div className="sm:col-span-6 md:col-span-8 md:row-span-2 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 flex-grow bg-background hover:shadow-lg transition-shadow border-2 border-neutral">
            <div className="relative z-10 flex flex-col h-full p-6">
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">Data</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                <div className="p-4 bg-white rounded-lg border border-neutral/30">
                  <p className="text-neutral text-sm md:text-base leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="text-accent font-medium hover:underline">
                    Explorar datos →
                  </a>
                </div>
                <div className="p-4 bg-white rounded-lg border border-neutral/30">
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
          <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 flex-grow bg-accent-light hover:opacity-90 transition-opacity border-2 border-accent-light">
            <div className="absolute inset-0 bg-accent-light"></div>
            <div className="relative z-10 flex flex-row items-center justify-between h-full p-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-2">Spotify</h3>
                <p className="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <a href="#" className="text-accent font-medium hover:underline px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                Escuchar →
              </a>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="sm:col-span-6 md:col-span-5 md:row-span-1 flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 flex-grow bg-white hover:shadow-lg transition-shadow border-2 border-neutral">
            <div className="relative z-10 flex flex-col justify-center h-full p-6">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">Socials</h3>
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
