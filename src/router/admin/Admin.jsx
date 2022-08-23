import React from "react";
import s from "./Admin.module.css";
import { adminSidebar } from "../../static/static";
import { NavLink, Switch, Route } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../context/action/action";

function Admin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const signOutAdminPanel = () => {
    dispatch(signOut());
    history.push("/login");
  };
  return (
    <div className={s.admin}>
      <div className={s.sidebar}>
        <h1 className={s.logo}>Mustang</h1>
        <div className={s.admin_info}>
          <div className={s.admin_circle}>RB</div>
          <div>
            <h3>Rasulov Boburmirzo</h3>
            <p>Admin</p>
          </div>
        </div>
        <div className={s.sidebar_collection}>
          {adminSidebar?.map(({ id, title, icon, link }) => (
            <NavLink
              to={`/admin/${link}`}
              className={s.sidebar_item}
              activeClassName={s.active}
              key={id}
            >
              {icon}
              <span>{title}</span>
            </NavLink>
          ))}
        </div>
        <div onClick={signOutAdminPanel} className={s.sign_out}>
          <IoExitOutline />
          <span>Chiqish</span>
        </div>
      </div>
      <div className={s.admin_content}>
        <Switch>
          {adminSidebar?.map(({ component, link, id }) => (
            <Route key={id} path={`/admin/${link}`}>
              {component}
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default Admin;
