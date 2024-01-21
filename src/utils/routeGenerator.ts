import { adminPaths } from "../routes/admin.route";
import { TRoute, TUserRoutePath } from "../types";

const role: string = 'admin';

function routeGenerator() {
  let currentRoute: TUserRoutePath[] = [];

  if (role === 'admin') {
    currentRoute = adminPaths
  }


  const route = currentRoute.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element
      })
    } else if (item.children) {
      item.children.forEach(child => {
        acc.push({
          path: child.path!,
          element: child.element
        })
      })
    }

    return acc;
  }, [])

  return route
}

export default routeGenerator;
