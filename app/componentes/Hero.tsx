import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.overlay}>
        <h1>DESENVOLVEDORA COM HABILIDADES UX/UI</h1>
        <p>Sou uma desenvolvedora focada em UX/UI, dedicada a criar experiências digitais que sejam intuitivas, acessíveis e visualmente consistentes. Minha abordagem une criatividade, pesquisa e estratégia, sempre priorizando as necessidades reais do usuário e o impacto que a interface gera no produto.

Trabalho desde a construção de fluxos e wireframes até o desenvolvimento visual completo da interface, garantindo que cada decisão tenha propósito e melhore a jornada do usuário. Tenho domínio das principais ferramentas de design, prototipação e desenvolvimento front-end, o que me permite transformar ideias em interfaces funcionais, responsivas e modernas.

Sou apaixonada por resolver problemas, comunicar com clareza e colaborar em equipes multidisciplinares. Busco constantemente aprender novas tecnologias e tendências de design, mantendo meu trabalho atualizado, acessível e alinhado às boas práticas de mercado. Meu objetivo é sempre criar produtos que entreguem valor, gerem experiência e conectem pessoas por meio de interfaces bem construídas.</p>
        <a className={styles.button} href="#contato">ME CONHEÇA</a>
      </div>
    </section>
  );
}
