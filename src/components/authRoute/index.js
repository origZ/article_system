import { getToken } from "@/utils/token";
import { Navigate } from "react-router-dom";

// 高阶函数-->登录鉴权
function authRoute(Component) {
  return props => {
    const token = getToken('token_key')
    if (token) {
      return <Component {...props} />
    } else {
      return <Navigate to="/login" replace />
    }
  }
}

export default authRoute



