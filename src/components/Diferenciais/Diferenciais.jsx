import styles from './Diferenciais.module.css'
import escudo from '../../assets/icons/escudo.svg'
import raio from '../../assets/icons/raio.svg'
import pessoas from '../../assets/icons/pessoas.svg'

function Diferenciais() {
    
    const dadosCards = [
        {
            id: 1,
            icone: escudo,
            titulo: "Espaço 100% feminino",
            descricao: "Treine sem julgamentos em um estúdio totalmente projetado para oferecer conforto, privacidade e foco total nos seus objetivos."
        },
        {
            id: 2,
            icone: raio,
            titulo: "Alta intensidade",
            descricao: "Dinâmicas de treino funcional que aumentam a força, melhoram o condicionamento e geram resultados reais no seu ritmo."
        },
        {
            id: 3,
            icone: pessoas,
            titulo: "Comunidade que apoia",
            descricao: "Muito mais que uma academia. Um ambiente de parceria onde mulheres reais compartilham a mesma energia e se motivam diariamente."
        }
    ];

    return (
        <section id="sobre" className={styles.diferenciaisContainer}>
            <h1>Aqui o ritmo é outro</h1>

            <div className={styles.stackCards}>
                {dadosCards.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <div className={styles.containerCards}>
                            <div className={styles.tituloIcone}>
                                <img src={card.icone} className={styles.icone} alt="" />
                                <h3>{card.titulo}</h3>
                            </div>
                            <p>{card.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Diferenciais;