import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../Assets/img/logo.svg';
import UseMedia from '../Hooks/UseMedia';
import { useLocation } from 'react-router';

const Header = () => {
  const mobile = UseMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav1} container`}>
        <div className={`${mobile ? styles.containerMenuMobile : styles.logo}`} to="/" arial-label="Logo - Home">
          <NavLink to="/" end><Logo className={`${mobile ? styles.mobileLogo : styles.logo}`} /></NavLink>
          {mobile &&
            <button 
              aria-label="Menu" 
              className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
              onClick={() => setMobileMenu(!mobileMenu)}>  
            </button>
          }
        </div> 

        <ul className={`${mobile ? styles.navMobile : styles.nav1} ${mobileMenu && styles.navMobileActive}`}>
          <NavLink className={styles.link} to="/" end>Home</NavLink>
          <NavLink className={styles.link} to="marcas">Marcas</NavLink>
          <NavLink className={styles.link} to="contato">Contato</NavLink> 
          <NavLink className={`${styles.linkC}`} to="criarConta">Criar Conta</NavLink>
        </ul>
      </nav>
  </header>
  )
}

export default Header;