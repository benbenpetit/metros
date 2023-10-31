import { ReactLenis } from '@studio-freight/react-lenis'
import './styles/main.scss'

const LINKS = [
  {
    title: `Mairie des Lilas`,
    img: 'mairie-des-lilas.webp',
    split: 1
  },
  {
    title: `P<sup>te</sup> des Lilas`,
    img: 'porte-des-lilas.jpeg',
    split: 2
  },
  {
    title: 'Tele graphe',
    img: 'telegraphe.jpeg',
    split: 1
  },
  {
    title: 'Place des fetes',
    img: 'place-des-fetes.webp',
    split: 2
  },
  {
    title: 'Jour dain',
    img: 'jourdain.jpeg',
    split: 1
  },
  {
    title: 'Py renees',
    img: 'pyrenees.jpeg',
    split: 1
  },
  {
    title: 'Belle ville',
    img: 'belleville.webp',
    split: 1
  },
  {
    title: 'Gon court',
    img: 'goncourt.jpeg',
    split: 1
  },
  {
    title: 'Republi que',
    img: 'republique.jpeg',
    split: 1
  },
  {
    title: 'Arts & Metiers',
    img: 'arts-et-metiers.jpeg',
    split: 2
  },
  {
    title: 'Rambu teau',
    img: 'rambuteau.jpeg',
    split: 1
  },
  {
    title: 'Hotel de Ville',
    img: 'hotel-de-ville.jpeg',
    split: 2
  },
  {
    title: 'Cha telet',
    img: 'chatelet.jpeg',
    split: 1
  }
]

const getImageUrl = (x: string) => {
  return new URL(`/src/assets/img/${x}`, import.meta.url).href
}

const App = () => {
  return (
    <ReactLenis root>
      <header>
        <a href='#'>métro</a>
      </header>
      <main>
        <section>
          <h1>La ligne onze ( 11 )</h1>
          <ul className='list'>
            {LINKS.map((link, i) => (
              <li key={i}>
                <a href='#' aria-label={link.title}>
                  {link.title.split(' ').map((word, i) => (
                    <>
                      {i === link.split && (
                        <div className='hidden-image'>
                          <span>
                            <img src={getImageUrl(link.img)} alt={link.title} />
                          </span>
                        </div>
                      )}
                      <span
                        key={i}
                        dangerouslySetInnerHTML={{ __html: word }}
                      />
                    </>
                  ))}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </ReactLenis>
  )
}

export default App
