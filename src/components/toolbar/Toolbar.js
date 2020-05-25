import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../logo/Logo';
import NavigationItems from '../navigation/navigationitems/NavigationItems';

const toolBar = (props) => (
    <header className = {styles.Toolbar}>
        <div>MENU</div>
        <Logo height="80%"/>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolBar;