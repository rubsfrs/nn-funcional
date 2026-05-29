import styles from './Modalidades.module.css';
import img1 from '../../assets/images/img1Section3.png';
import img2 from '../../assets/images/img2Section3.png';
import img3 from '../../assets/images/img3Section3.png';

function Modalidades() {
  const listaModalidades = [
    {
      id: 1,
      imagem: img1,
      titulo: "FORÇA E EVOLUÇÃO",
      descricao:
        "Desenvolvimento de força funcional para um corpo tonificado e resistente aos desafios do dia a dia.",
    },
    {
      id: 2,
      imagem: img2,
      titulo: "POTÊNCIA E AGILIDADE",
      descricao:
        "Melhoria da capacidade explosiva e coordenação através de movimentos dinâmicos e variados.",
    },
    {
      id: 3,
      imagem: img3,
      titulo: "ENERGIA E COMUNIDADE",
      descricao:
        "Um ambiente sem julgamentos para mulheres que evoluem juntas, compartilham a mesma energy e fortalecem umas às outras.",
    },
  ];

  return (
    <section id="modalidades" className={styles.container}>
      <div className={styles.topoSection}>
        <span className={styles.tagline}>O que treinamos</span>
        <h2 className={styles.tituloSection}>Movimento coletivo, força real</h2>
      </div>

      <div className={styles.lista}>
        {listaModalidades.map((item) => (
          <div key={item.id} className={styles.card}>
            <img
              src={item.imagem}
              alt={item.titulo}
              className={styles.imagem}
            />

            <div className={styles.info}>
              <h3 className={styles.cardTitulo}>{item.titulo}</h3>
              <p className={styles.cardDesc}>{item.descricao}</p>
            </div>

            <div className={styles.linha} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Modalidades;