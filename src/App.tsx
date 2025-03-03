import {
  EnvelopeSimple,
  FacebookLogo,
  List,
  MagnifyingGlass,
  Timer,
  WhatsappLogo,
  XLogo,
} from '@phosphor-icons/react'

function App() {
  return (
    <>
      <header className='flex gap-2 flex-wrap justify-between items-center py-2 border-b border-gray-300'>
        <img src='/logo.png' width={300} alt='Alerta Morris logo' />

        <nav>
          <ul className='flex gap-3 items-center'>
            <li>
              <a
                href='#'
                className='bg-gray-200 flex gap-2 items-center px-2 py-1 rounded-sm text-stone-600'
              >
                <List size={24} color='#000' /> Menú
              </a>
            </li>
            <li>
              <a
                href='#'
                className='bg-gray-200 flex gap-2 items-center px-2 py-1 rounded-sm text-stone-600'
              >
                <MagnifyingGlass size={20} color='#000' />
                Buscar
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center gap-2 border border-gray-300 px-2 py-1 rounded-3xl uppercase font-bold italic'
              >
                <div className='size-7 bg-red-400 rounded-full flex justify-center items-center'>
                  <div className='size-1/2 bg-red-600 rounded-full'></div>
                </div>
                En vivo
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='text-gray-800 mb-4 flex flex-wrap gap-10'>
        <article className='max-w-4xl'>
          <section>
            <ul className='flex gap-2 py-4 text-red-500'>
              <li>Alerta Morris</li>
              <li>
                <span className='text-gray-400'>{'>'}</span> Seguridad
              </li>
            </ul>
          </section>

          <section className='border-b border-gray-300'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4 text-black text-balance'>
              Impactante atraco en el edificio de Enerlife
            </h1>
            <p className='text-xl md:text-2xl mb-4'>
              Los vecinos no aguantan más tanta inseguridad en el barrio
            </p>

            <ul className='flex gap-2 py-4 text-gray-700'>
              <li>2 de Marzo de 2025</li>
              <li className='flex gap-2 items-center'>
                • <Timer size={16} /> 1 minuto de lectura
              </li>
            </ul>

            <p className='text-gray-700 mb-8'>
              Por Agustina Pachado, Emilce Martinez, Facundo Sorhobigarat,
              Facundo Gonzalez, Francisco Rafael Espinola de la Vega, Jazmín
              Carballo, Lisandro Joaquin Caceres, Marlen Lopez y Melina Alcaraz
            </p>

            <img src='/enerlife.png' className='w-full' alt='Enerlife' />
            <p className='py-2'>Instalaciones de Enerlife</p>
          </section>

          <section className='flex gap-4 py-4 border-b border-gray-300'>
            <div>
              <ul className='*:py-2'>
                <li>
                  <XLogo size={28} />
                </li>
                <li>
                  <WhatsappLogo size={28} />
                </li>
                <li>
                  <FacebookLogo size={28} />
                </li>
                <li>
                  <EnvelopeSimple size={28} />
                </li>
              </ul>
            </div>

            <div className='flex flex-col gap-4 *:max-w-[80ch] md:*:text-xl'>
              <p>
                Tras los sucesos del apagón en las Provincias Unidas del Oeste,{' '}
                <strong>
                  se desataron varios casos de incidentes, hurtos y más
                  destacable
                </strong>
                , el terrible atraco ocurrido en el edificio de EnerLife.
              </p>

              <p>
                Como los otros sucesos ocurridos de inseguridad en el barrio,{' '}
                <strong>este también quedó impune</strong>.
              </p>

              <p>
                Aún se sigue investigando el caso,{' '}
                <strong>
                  las autoridades pertinentes siguen sin tomar cartas en el
                  asunto
                </strong>
                , algunos justicieros del barrio están tomando sus propias
                medidas para sacar a relucir la verdad a la luz.
              </p>
            </div>
          </section>
        </article>

        <aside className='py-8 max-w-80'>
          <h2 className='text-xl md:text-2xl font-semibold'>
            Más leidas del momento
          </h2>
          <ul className='*:border-b *:border-gray-300 *:py-4 [&_h3]:mb-2 [&_img]:ml-auto'>
            <li>
              <h3>Día Nacional de Teatro: ¿Cuál es el origen de esta fecha?</h3>
              <img src='/news/teatro.jpg' width={300} alt='Teatro' />
            </li>
            <li>
              <h3>Dolar blue hoy: a cuánto cotiza este lunes</h3>
              <img src='/news/dolar.webp' width={300} alt='Dolar' />
            </li>
          </ul>
        </aside>
      </main>
      <footer className='flex flex-col gap-4 mt-16 mb-10 [&_h4]:font-bold [&_h4]:text-gray-700 text-gray-600 text-sm'>
        <img src='/logo.png' width={200} alt='Alerta Morris logo' />

        <div className='flex gap-6 flex-wrap'>
          <div>
            <h4>Secciones</h4>
            <ul>
              <li>Últimas noticias</li>
              <li>Seguridad</li>
              <li>Política</li>
              <li>Deportes</li>
              <li>Cultura</li>
            </ul>
          </div>

          <div>
            <h4>Redes sociales</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li>Correo electrónico</li>
              <li>Whatsapp</li>
              <li>Ubicación</li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li>Política de privacidad</li>
              <li>Términos y condiciones</li>
              <li>Política de cookies</li>
            </ul>
          </div>

          <div>
            <h4>Newsletter</h4>
            <p>Recibe las últimas noticias en tu correo</p>
            <form>
              <input
                type='email'
                placeholder='Correo electrónico'
                className='border border-gray-300 px-2 py-1 rounded-sm'
              />
              <button className='bg-red-500 px-2 py-1 rounded-sm text-white'>
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <p className='max-w-[120ch] mx-auto text-center'>
          © 2025 Alerta Morris. Todos los derechos reservados. El contenido de
          este sitio, incluyendo pero no limitado a textos, imágenes y gráficos,
          está protegido por las leyes de propiedad intelectual. Queda prohibida
          su reproducción total o parcial sin autorización previa.
        </p>
      </footer>
    </>
  )
}

export default App
