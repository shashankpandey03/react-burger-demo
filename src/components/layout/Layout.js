import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../toolbar/Toolbar';
import SideDrawer from '../sidedrawer/SideDrawer';

const Layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;