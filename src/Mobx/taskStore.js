import { makeAutoObservable,action} from 'mobx'

class TaskStore {
  taskList = [];
  constructor() {
    makeAutoObservable(this, {
      addTask: action,
    });
  }

  addTask = action(() => {
    // 向taskList添加任务
    this.taskList.push('Vue');
  });
}

const task = new TaskStore()


export default task
