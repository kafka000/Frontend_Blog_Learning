// Mobx计数器案例步骤(基本使用)4-使用方导入counterStore （Mobx）

// Mobx计数器案例步骤(基本使用)5-使用方导入observer方法（中间件）
import { observer } from "mobx-react-lite";
import { Divider, Button, Space, Tag, Steps,List} from "antd";
import { useEffect, useState} from "react";
// 模块化管理(基本使用)3-导入
import { useMobXStore } from "./mobxCounter";
import { toJS } from "mobx";
const MobX = () => {
  // 得到store
  const {counterStore,taskStore,mobxChannel} = useMobXStore();
  // 随机生成颜色的函数
  const getRandomColor = () => {
    const random = Math.floor(Math.random() * 16777215);
    return `#${random.toString(16)}`;
  };

  useEffect(() => {
    mobxChannel.setChannelList();
  }, [mobxChannel]);


  return (
    <div className="mobx">
      {/* 点击方法 */}
      {/* Mobx计数器案例步骤(基本使用)7-调用方法*/}
      {/* 自动可观察 */}
      <Space>
        <Button onClick={() => counterStore.addCount()} type="primary">
          Mobx-基本使用-最简单的计数器案例:{counterStore.count}
        </Button>
        <Button type="primary">
          Mobx-计算属性：计数器案例:{counterStore.doubleCount}
        </Button>
      </Space>
      <Divider></Divider>
      <div> Mobx-异步数据处理</div>
      <div className="flex-container">
        {mobxChannel.channelList.map((item, index) => (
          <Tag key={index} color={getRandomColor()}>
            {item.name}
          </Tag>
        ))}
      </div>
      <Divider></Divider>
      
      <Button onClick={() => taskStore.addTask()} type="primary">
        Mobx-tojs模块化管理：点击更新数组
      </Button>      
      <List header={<div>📢这里注意转化成JS类型</div>}
            bordered
            dataSource={toJS(taskStore.taskList)}
            renderItem={(item) => <List.Item>{item}</List.Item>}
      />      
      <Divider></Divider>

    </div>
  );
};

//Mobx计数器案例步骤(基本使用)6-使用方包裹组件响应数据变化
export default observer(MobX);
