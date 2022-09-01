import React, { useState } from "react";
import s from "./Sidebar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { signOut } from "../../context/action/action";
import { adminSidebar } from "../../static/static";

function Sidebar() {
  const { owner, name } = useSelector((s) => s.auth);
  const [sidebarShow, setSidebarShow] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch();

  const signOutAdminPanel = () => {
    if (window.confirm("Ishonchingiz komilmi?")) {
      dispatch(signOut());
      history.push("/login");
    }
  };
  return (
    <>
      <div onClick={()=>setSidebarShow(p=>!p)} className={s.menu}>{sidebarShow ? <IoMdClose/> : <MdMenu/> } </div>
      {sidebarShow && <div onClick={()=>setSidebarShow(false)} className={s.sidebarShadow}></div>} 
      <div className={sidebarShow? [s.sidebar, s.show].join(" ") : s.sidebar}>
        <h1 className={s.logo}>
          <NavLink to="/"><FiArrowLeft/> <span>Mustang</span></NavLink>
        </h1>
        <div className={s.admin_info}>
          <div className={s.admin_circle}>{name.slice(0, 1)}</div>
          <div>
            <h3>{name}</h3>
            <p>{owner ? "Owner" : "Admin"} </p>
          </div>
        </div>
        <div className={s.sidebar_collection}>
          {adminSidebar?.map(({ id, title, icon, link }) =>
            !owner && link === "add-admin" ? (
              <div key={id}></div>
            ) : (
              <NavLink
                to={`/admin/${link}`}
                className={s.sidebar_item}
                activeClassName={s.active}
                key={id}
              >
                {icon}
                <span>{title}</span>
              </NavLink>
            )
          )}
        </div>
        <div onClick={signOutAdminPanel} className={s.sign_out}>
          <IoExitOutline />
          <span>Chiqish</span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
