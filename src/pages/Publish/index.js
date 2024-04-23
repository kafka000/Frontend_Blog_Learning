import React from "react";
import { observer } from "mobx-react-lite";
import store from "./testStore";

const Publish = () => {
  // 处理按钮点击事件
  const handleAddItem = () => {
    store.addItem("New Item"); // 调用 store 中的 action 添加新项
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {store.items.map((item, index) => (
          <li key={index}>{item}</li> // 渲染数组中的每个项
        ))}
      </ul>
    </div>
  );
};

export default observer(Publish);
