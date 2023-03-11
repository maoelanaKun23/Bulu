import React, { useState } from "react";
import style from "./tabLayout.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink as RouterLink } from "react-router-dom";

const RouterTab = item => {
  return (
    <RouterLink
      key={`${item.href}`}
      to={item.href}
      className={style.tabHead}
      activeClassName={classNames(style.tabHead, style.active)}
    >
      {item.title}
    </RouterLink>
  );
};

const CustomTab = (item, index, setCount, count) => {
  return (
    <div
      key={index}
      className={classNames(style.tabHead, count === index && style.active)}
      onClick={() => setCount(index)}
    >
      {item.title}
    </div>
  );
};

const Tab = ({ tabList, isRouterLink = false }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={classNames(style.tabsList, isRouterLink && style.border)}>
      {tabList.map((item, index) =>
        isRouterLink ? RouterTab(item) : CustomTab(item, index, setCount, count)
      )}
    </div>
  );
};

Tab.propTypes = {
  tabList: PropTypes.array
};

export default Tab;
