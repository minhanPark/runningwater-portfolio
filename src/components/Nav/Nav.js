import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import { profile } from "images/profile";

const activeStyle = {
  color: "#2f3542",
  borderBottom: "2px solid #2f3542"
};

class Nav extends Component {
  render() {
    return (
      <div className={styles.backGround}>
        <div>
          <NavLink
            exact
            to="/runningwater-portfolio"
            className={styles.profile}
          >
            <img src={profile} className={styles.profileImage} alt="profile" />
          </NavLink>
        </div>
        <div className={styles.row}>
          <ul className={styles.nav}>
            <li>
              <NavLink
                exact
                to="/runningwater-portfolio"
                className={styles.link}
                activeStyle={activeStyle}
              >
                Done
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/channel"
                className={styles.link}
                activeStyle={activeStyle}
              >
                Channel
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
