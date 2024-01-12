import styles from "./NaoEncontrado.module.css";
import erro404 from "../../assets/erro_404.png";
import BotaoPrincipal from "../../componentes/BotaoPrincipal";
import { useNavigate } from "react-router-dom";

export default function NaoEncontrado() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>Tem certeza de que era isso que você estava procurando?</p>
        <p className={styles.paragrafo}>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
        <div
          className={styles.botaoContainer}
          onClick={() => navegar("/")}
        >
          <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
        </div>
        <img
          src={erro404}
          alt="Cachorro de óculos e vestido como humano"
          className={styles.imagemCachorro}
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}