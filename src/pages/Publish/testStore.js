// store.js
import { makeAutoObservable } from 'mobx';

class testStore {
  items = []; // 初始为空的数组

  constructor() {
    makeAutoObservable(this);
  }

  addItem = () => {
    // 向taskList添加任务
    this.items.push('Vue');
    this.items.push('React');
    this.items.push('在这停顿');
  };
}

const store = new testStore();
export default store;