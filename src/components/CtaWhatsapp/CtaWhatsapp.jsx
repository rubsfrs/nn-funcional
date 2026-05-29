import styles from './CtaWhatsapp.module.css'
import logoWpp from '../../assets/icons/whatsapp.svg'

function CtaWhatsapp() {
    return (
        <section className={styles.container}>
            <div className={styles.containerInterno}>
                
                <div className={styles.blocoTextos}>
                    <span className={styles.tagline}>Fale com a Gente</span>
                    <h2 className={styles.titulo}>Pronta para mudar o seu ritmo?</h2>
                    <p className={styles.descricao}>
                        Escolha o melhor horário para você e agende sua visita. O primeiro passo só depende de você.
                    </p>
                </div>

                <a 
                    href="https://wa.me/5586994939365" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.botao}
                >
                    <img src={logoWpp} className={styles.iconeWpp} alt="" />
                    Chamar no Whatsapp
                </a>

            </div>
        </section>
    )
}

export default CtaWhatsapp;