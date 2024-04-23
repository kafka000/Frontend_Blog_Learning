import { makeAutoObservable,computed } from 'mobx'
class CounterStore{
    // Mobx计数器案例步骤(基本使用)-1. 状态Store里定义初始状态
    count = 0

    // Mobx计数器案例步骤(基本使用)-2. 状态Store里实现当前类可观察
    constructor(){
        makeAutoObservable(this)
    }

    // Mobx计数器案例步骤(基本使用)-3.状态Store里定义修改方法
    addCount = () => {
        this.count++
    }

    // Mobx计数器案例步骤(计算属性)-1.状态Store定义计算属性
    get doubleCount(){
        return this.count*2      
    }

}

const counterStore = new CounterStore()
// 对外导出
export default counterStore