import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { id, email, role } = useAppSelector(state => state.userInfo);

  if (id === null || email === null || role === null) {
    return <Navigate to='/log-in' replace={true} />
  }

  return <>
    {children}
  </>
}

export default ProtectedRoute;
