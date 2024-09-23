// estrutura do HTML (NavBar.jsx) 

import React from 'react'; 
import styles from './navbar.module.css'; 

const NavBar = ({ logoInicio }) => { 
    return ( 
    <nav className={styles["navbar"]}> 
        <img src={logoInicio} className={styles["logo-inicio"]} alt="Logo Início" /> 
        
        <button className={styles['logo-fim']}>
            Ver Musicas
        </button> 
    </nav> 
); }; 

export default NavBar;