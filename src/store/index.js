import React from "react"
import LoginStore from './login.Store'

class RootStore {
  // 组合模块
  constructor() {
    this.loginStore = new LoginStore()
  }
}

const StoreContext = React.createContext(new RootStore())
const useStore = () => React.useContext(StoreContext)

export { useStore }