import { makeAutoObservable, toJS } from "mobx";
import { http, setToken, getToken, removeToken } from "@/utils";

class LoginStore {
  // 初始token值，使用已有的token或空字符串
  token = getToken() || "";
  userinfo = {}
  constructor() {
    // 使用makeAutoObservable使LoginStore的属性和方法可以被MobX观察
    makeAutoObservable(this);
  }
  // 登录
  getToken = async ({mobile, code} ) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,code
    })
    // 检查res.data是否存在，并且是否有token属性    
    this.userinfo = res.data
    console.log(toJS(this.userinfo))
    if (this.userinfo && this.userinfo.data.token) {
      this.token = this.userinfo.data.token; // 更新token属性
      setToken(this.token)
    } 
  };
  // 退出登录
  logOut = () => {
    // 清除缓存token
    this.token = '';
    removeToken();
  };
}

export default LoginStore;
