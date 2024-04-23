import React from 'react'

import counter from './counterStore'
import task from './taskStore'
import mobxChannel from './mobxChannel'
// 模块化管理(基本使用)1-组合模块
class MobXStore{
    constructor() {        
        // 计数器
        this.counterStore = counter
        // task
        this.taskStore = task
        // 异步
        this.mobxChannel = mobxChannel
      }
}

const mobxStore = new MobXStore()

// 模块化管理(基本使用)2-利用React的context的机制导出统一的useStore方法，给业务组件使用

// 生成状态树：context机制的数据查找链  Provider如果找不到 就找createContext方法执行时传入的参数
const context = React.createContext(mobxStore)
// 对外到处状态树
const useMobXStore = () => React.useContext(context)
// useStore() =>  rootStore  { counterStore, taskStore }

export { useMobXStore }