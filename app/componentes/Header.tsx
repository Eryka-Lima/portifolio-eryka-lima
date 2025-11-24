import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>     PORTIFÓLIO ERYKA LIMA   </div>

      <nav className={styles.nav}>
        <a href="#inicio">INÍCIO</a>
        <a href="#sobre">SOBRE MIM</a>
        <a href="#galeria">DIPLOMAS</a>
        <a href="#contato">CONTATO</a>
      </nav>
    </header>
  );
}