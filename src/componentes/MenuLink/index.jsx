import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";
import PropTypes from 'prop-types';

export default function MenuLink({ children, to }) {
  const localizacao = useLocation();

  return (
    <Link to={to} className={`
      ${styles.link}
      ${(localizacao.pathname === to) ? styles.linkDestacado : ""}
    `}>
      {children}
    </Link>

  );
}

MenuLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.any,
}

export function MenuNavLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) => `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ""}
      `}
      to={to}
      end
    >
        {children}
    </NavLink>

  );
}

MenuNavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.any,
}
