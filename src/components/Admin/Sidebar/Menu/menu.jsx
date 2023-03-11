import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './menu.module.scss';

const SidebarMenu = ({ item }) => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(!menu);
  return (
    <>
      <Link
        className={styles.sidebarLink}
        to="#"
        onClick={item.subNav && showMenu}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {item.icon}
          <span className={styles.sidebarLabel}>{item.title}</span>
        </div>
        <div>
          {item.subNav && menu
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {menu &&
        item.subNav.map((item, index) => {
          return (
            <Link key={index} className={styles.dropdownLink} to={item.path}>
              {item.icon}
              <div className={styles.sidebarLabel}>{item.title}</div>
            </Link>
          );
        })}
    </>
  );
};

export default SidebarMenu;
