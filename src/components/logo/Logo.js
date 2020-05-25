import React from 'react';
import LogoImage from '../../assets/images/logo.png';
import styles from './Logo.module.css'

const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height,width:props.width ? props.width : null}} >
        <img src={LogoImage} alt="Pandeyji Burger" />
    </div>
);

export default logo;