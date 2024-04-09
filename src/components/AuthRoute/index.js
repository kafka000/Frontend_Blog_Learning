// 1. 判断token是否存在
// 2. 如果存在 直接正常渲染
// 3. 如果不存在 重定向到登录路由
import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

function AuthRoute ({ children }) {
    const isToken = getToken()
    if (isToken) {
      return <>{children}</>
    } else {
      return <Navigate to="/login" replace />
    }
  }
  
  // <AuthComponent> <Layout/> </AuthComponent>
  // 登录：<><Layout/></>
  // 非登录：<Navigate to="/login" replace />
  
  export { AuthRoute }