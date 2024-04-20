// Mobx计数器案例步骤(基本使用)4-使用方导入counterStore （Mobx）
import mobxCounter from "./mobxCounter";
// Mobx计数器案例步骤(基本使用)5-使用方导入observer方法（中间件）
import { observer } from "mobx-react-lite";
import { Button } from "antd";
const MobX = () => {
  return (
    <div className="mobx">
      {/* 点击方法 */}
      {/* Mobx计数器案例步骤(基本使用)7-调用方法*/}
      {/* 自动可观察 */}
      <Button onClick={() => mobxCounter.addCount()} type="primary">
        Mobx最简单的计数器案例:{mobxCounter.count}
      </Button>
    </div>
  );
};

//Mobx计数器案例步骤(基本使用)6-使用方包裹组件响应数据变化
export default observer(MobX);
