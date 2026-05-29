import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Diferenciais from '../../components/Diferenciais/Diferenciais'
import Modalidades from '../../components/Modalidades/Modalidades'
import CtaWhatsapp from '../../components/CtaWhatsapp/CtaWhatsapp'
import Localizacao from '../../components/Localizacao/Localizacao'
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Diferenciais />
            <Modalidades />
            <CtaWhatsapp />
            <Localizacao />
            <Footer />
        </>
    )
}

export default Home;