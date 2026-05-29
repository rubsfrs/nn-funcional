import { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import menu from '../../assets/icons/menu.svg';

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className={styles.headerContainer}>
            <div className={styles.containerInterno}>
                
                <img src={logo} alt="Logo NN Funcional" className={styles.logoIcon} />

                <button
                    className={styles.hamburguer}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <img
                        src={menu}
                        alt="Botão Abrir Menu"
                        className={`${styles.hamburguerIcon} ${menuAberto ? styles.hamburguerIconAtivo : ''}`}
                    />
                </button>

                <nav className={`${styles.navMenu} ${menuAberto ? styles.navMenuAtivo : ''}`}>
                    <ul className={styles.navList}>
                        <li><a href="#inicio" onClick={() => setMenuAberto(false)}>Início</a></li>
                        <li><a href="#sobre" onClick={() => setMenuAberto(false)}>A NN Funcional</a></li>
                        <li><a href="#modalidades" onClick={() => setMenuAberto(false)}>Modalidades</a></li>
                        <li><a href="#onde-estamos" onClick={() => setMenuAberto(false)}>Onde Estamos</a></li>
                        <li>
                            <a 
                                href="https://wa.me/5586994939365" 
                                className={styles.ctaMenu} 
                                onClick={() => setMenuAberto(false)}
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;