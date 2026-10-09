import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const isLogin = true;
    if(!isLogin){
        return <Navigate to={'/loginForm'}/>
    }
    return children;
}
export default ProtectedRoute;