import { createElement } from "react";
import { adminPaths } from "../routes/admin.route";
import { TUserRoutePath } from "../types";
import { NavLink } from "react-router-dom";

const role: string = 'admin'

function sidebarItemsGenerator() {
  let currentRoute: TUserRoutePath[] = [];

  if (role === 'admin') {
    currentRoute = adminPaths
  }

  const route = currentRoute.map(item => ({
    key: item.title,
    icon: createElement(item.icon ? item.icon : ''),
    label: item.path ? <NavLink to={item.path}>{item.title}</NavLink> : item.title,
    children: item.child?.map(child => ({
      key: child.title,
      label: child.path ? <NavLink to={child.path}>{child.title}</NavLink> : child.title,
    }))
  }))

  return route;

}

export default sidebarItemsGenerator;