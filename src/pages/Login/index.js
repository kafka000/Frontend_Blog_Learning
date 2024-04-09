// 导入Ant Design组件库中的Card, Form, Input, Button, Checkbox等组件
import { Card, Form, Input, Button, Checkbox,message } from "antd";
// 导入登录页面的logo图片
import logo from "@/assets/dinner.png";
// 导入登录页面的样式文件
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store";


// 登录
const Login = () => {
  const navigate = useNavigate()
  const loginStore = useStore()
  async function onFinish (values) {
    console.log(values)
    // values：放置的是所有表单项中用户输入的内容
    // todo:登录
    const { mobile, code } = values
    await loginStore.getToken({ mobile, code })
    // 跳转首页
    navigate('/', { replace: true })
    // 提示用户
    message.success('登录成功')
  }
  return (
    <div className="login">
      {/* 一个带有登录容器类样式的Card组件，用于包裹表单 */}
      <Card className="login-container">
        {/* 一个img标签，用于显示登录页面的logo */}
        <img className="login-logo" src={logo} alt="" />
        {/* 一个Form组件，用于包裹登录表单 */}
        <Form  onFinish={ onFinish } validateTrigger={["onBlur", "onChange"]}>
          {/* 一个Form.Item组件，包含一个Input组件，用于输入手机号 */}
          <Form.Item
            name="mobile"
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机号码格式不对",
                validateTrigger: "onBlur",
              },
              { required: true, message: "请输入手机号" },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          {/* 另一个Form.Item组件，包含一个Input组件，用于输入验证码 */}
          <Form.Item
            name="code"
            rules={[
              { len: 6, message: "验证码6个字符", validateTrigger: "onBlur" },
              { required: true, message: "请输入验证码" },
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          {/* 一个Form.Item组件，包含一个Checkbox组件，用于同意用户协议和隐私条款 */}
          <Form.Item>
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          {/* 一个Form.Item组件，包含一个Button组件，用于提交表单 */}
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

// 导出Login组件，使其可以在其他文件中使用
export default Login;
