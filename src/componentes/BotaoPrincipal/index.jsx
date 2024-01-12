import styles from "./BotaoPrincipal.module.css";
import PropTypes from 'prop-types';

export default function BotaoPrincipal({ children }) {
  return (
    <button className={styles.botaoPrincipal}>{children}</button>
  );
}

BotaoPrincipal.propTypes = {
  children: PropTypes.node,
};