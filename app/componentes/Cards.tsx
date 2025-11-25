import styles from "../styles/Cards.module.css";

export default function Cards() {
  const itens = [
    { title: "FERRAMENTAS DE DESIGN", desc: " Adobe, Sketch, Ilustrator, Photos." },
    { title: "LINGUAGENS DE PROGRAMAÇÃO", desc: "HTML5, CSS3, JavaScript, Design Systems e Python" },
    { title: "FERRAMENTAS DE PROTOTIPAÇÃO E ARQUITETURA", desc: "Figma, Miro,Notion e Trello." },
    { title: "CARACTERÍSTICAS", desc: "Foco no Usuário, Criatividade com Objetividade, Boa Comunicação e Empatia, " },
    { title: "HABILIDADES", desc: "Liderança, Organização, Planejamento, Técnia e Criatividade " },
    {title: "CURSOS", desc: "Desenvolvimentos de Sitemas| ETEC CAMARGO ARANHA, Dev. Games| ZION SCHOOL, Segurança de Dados| CISCO " },
    ];

  return (
    <section className={styles.cards} id="sobre">
      {itens.map((item, index) => (
        <div key={index} className={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
}

