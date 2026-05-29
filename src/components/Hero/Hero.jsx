import styles from './Hero.module.css';
import heroImg from '../../assets/images/imgHero.png';

function Hero() {
    return (
        <section id="inicio" className={styles.heroContainer}>
            <div className={styles.conteudoInterno}>
                
                <img src={heroImg} className={styles.heroImg} alt="Mulher treinando funcional" />

                <div className={styles.heroTexto}>
                    <h1>Força, Movimento, Transformação.</h1>
                    <p>Treinamento funcional de alta intensidade feito por e para mulheres. Supere limites e evolua em comunidade.</p>
                </div>

            </div>
        </section>
    );
}

export default Hero;