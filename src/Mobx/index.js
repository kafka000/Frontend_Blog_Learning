// Mobx计数器案例步骤(基本使用)4-使用方导入counterStore （Mobx）
import mobxCounter from "./mobxCounter";
import mobxChannel from "./mobxChannel";
// Mobx计数器案例步骤(基本使用)5-使用方导入observer方法（中间件）
import { observer } from "mobx-react-lite";
import { Divider, Button, Space, Tag } from "antd";
import { useEffect } from "react";
const MobX = () => {
  // 随机生成颜色的函数
  const getRandomColor = () => {
    const random = Math.floor(Math.random() * 16777215);
    return `#${random.toString(16)}`;
  };

  useEffect(() => {
    mobxChannel.setChannelList();
  }, []);

  return (
    <div className="mobx">
      {/* 点击方法 */}
      {/* Mobx计数器案例步骤(基本使用)7-调用方法*/}
      {/* 自动可观察 */}
      <Space>
        <Button onClick={() => mobxCounter.addCount()} type="primary">
          Mobx最简单的计数器案例:{mobxCounter.count}
        </Button>
        <Button type="primary">
          Mobx计数器案例-计算属性:{mobxCounter.doubleCount}
        </Button>
      </Space>
      <Divider></Divider>
      <div className="flex-container">
        {mobxChannel.channelList.map((item, index) => (
          <Tag key={index} color={getRandomColor()}>
            {item.name}
          </Tag>
        ))}
      </div>
      <Divider></Divider>
    </div>
  );
};

//Mobx计数器案例步骤(基本使用)6-使用方包裹组件响应数据变化
export default observer(MobX);
