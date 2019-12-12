import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import styles from './header.css';

const header = {
  ['']: 'Home',
  ['about-me']: 'Who am I?',
  ['about-site']: 'About this site',
  ['why']: 'Right Side Menu??',
  ['projects']: 'His Works',
  ['contact']: 'Contact'
};


const Header = () => {
  const history = useHistory();
  let location = history.location.pathname.slice(1);

  return (
    <header className={styles.Header} >
      <Link to="/">
        <h1>jared-Myhrberg</h1>
      </Link>
      <h3>&gt; {header[location]}</h3>
    </header>
  );
};

export default Header;
