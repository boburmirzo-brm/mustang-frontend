import React from "react";
import s from "./Admin.module.css";
import { adminSidebar } from "../../static/static";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

function Admin() {
  return (
    <div className={s.admin}>
      <Sidebar/>
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
