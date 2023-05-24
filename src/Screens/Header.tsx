import React from 'react';
import { ReactComponent as Logo } from "./logo.svg"


const Header = () => {
  return (
    <header style={styles.header}>
        <Logo className='logo'/>
      <p className='logoName' style={styles.title}>BMV Music Player</p>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#030303',
    padding: '20px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    height:'1.5rem',
  },
  title: {
    margin: 0,
    fontFamily: 'Josefin Sans',
  },
};

export default Header;
