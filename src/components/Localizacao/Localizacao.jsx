import styles from './Localizacao.module.css';
import fachadaImg from '../../assets/images/imgSection5.png';
import pin from '../../assets/icons/pin.svg'

function Localizacao() {
  return (
    <section id="onde-estamos" className={styles.container}>
      <div className={styles.topoSection}>
        <span className={styles.tagline}>Localização</span>
        <h2 className={styles.tituloSection}>Onde estamos</h2>
      </div>

      <div className={styles.conteudo}>
        <div className={styles.mapaWrapper}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!4v1780018311993!6m8!1m7!1sr5juBeqkTLa6BVJgSNV7Pg!2m2!1d-4.393920212252696!2d-42.88860968619427!3f7.1955156!4f0!5f0.7820865974627469" 
            width="100%"
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa NN Funcional"
          ></iframe>
        </div>

        <img src={fachadaImg} alt="Fachada do estúdio NN Funcional" className={styles.imagemFachada} />

        <div className={styles.endereco}>
            <img src={pin} className={styles.pinIcon} />
            <p className={styles.enderecoText}>
                Povoado Novo Nilo • União - PI
            </p>
        </div>
      </div>
    </section>
  )
}

export default Localizacao;