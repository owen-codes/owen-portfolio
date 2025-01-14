import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import Sobre from './components/Sobre.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'


export default function App () {
  return (
    <section className='bg-tertiary text-white font-body'>
      <Header />
      <Banner />
      <Sobre />
      <Contato />
      <Footer />
    </section>
  )
}