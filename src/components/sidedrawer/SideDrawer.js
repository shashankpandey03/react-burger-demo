import React from 'react';
import styles from './SideDrawer.module.css';
import Logo from '../logo/Logo';
import NavigationItems from '../navigation/navigationitems/NavigationItems';

const sideDrawer = (props) => (
    <div className={styles.SideDrawer}>
        {/* <Logo height='5%' width='10px'/>
        <nav>
            <NavigationItems />
        </nav> */}
    </div>
);

export default sideDrawer;