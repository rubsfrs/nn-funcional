import styles from './Footer.module.css';
import logo from '../../assets/images/logo.png';
import iconWpp from '../../assets/icons/whatsapp.svg';
import seta from '../../assets/icons/setaCima.svg';

function Footer() {
  const anoAtual = new Date().getFullYear();

  const rolarParaTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.container}>
      <div className={styles.topoFooter}>
        <img src={logo} alt="NN Funcional Logo" className={styles.logo} />
        
        <button onClick={rolarParaTopo} className={styles.botaoTopo}>
          Voltar ao Topo
          <img src={seta} alt="" aria-hidden="true" />
        </button>
      </div>

      <div className={styles.divisor} />

      <div className={styles.contatoArea}>
        <span className={styles.tituloContato}>Nosso contato:</span>
        <a href="https://wa.me/5586994939365" target="_blank" rel="noopener noreferrer" className={styles.linkWhats}>
          <img src={iconWpp} alt="Ícone WhatsApp" />
          (86) 9493-9365
        </a>
      </div>

      <p className={styles.direitosText}>
        &copy; {anoAtual} NN Funcional. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;