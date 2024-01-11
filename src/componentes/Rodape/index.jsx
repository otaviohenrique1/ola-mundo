import styles from "./Rodape.module.css";
import MarcaRegistrada from '../../assets/marca_registrada.svg';
// import { ReactComponent as MarcaRegistrada } from '../../assets/marca_registrada.svg';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      {/* <MarcaRegistrada /> */}
      <img src={MarcaRegistrada} alt="" />
      Desenvolvido por Alura.
    </footer>
  );
}