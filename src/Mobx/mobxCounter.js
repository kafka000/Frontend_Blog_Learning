import { makeAutoObservable } from 'mobx'
class MobXCounter{
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
}

const mobxCounter = new MobXCounter()
// 对外导出
export default mobxCounter