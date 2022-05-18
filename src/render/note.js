//为什么react 严格模式+development 生命周期函数会调用两次,函数组件会渲染两次
//因为渲染阶段的生命周期函数可能会被多次调用(比如props改变,setState函数修改状态),所以不要在这些
//生命周期函数中写副作用相关的代码,可能会引起内存泄漏等问题.而且很难发现.
//严格模式不能自动检测到你的副作用,但是可以帮助你发现它们
//怎么帮助你发现呢?react会故意重复调用以下的函数:
/**
 * class组件的constructor,render,shouldComponentUpdate
 * class组件的生命周期方法getDerivedStateFromProps
 * 函数组件体
 * 状态更新函数(setState的第一个参数)
 * 函数组件使用hook:useState,useMemo,useReducer
 */

//不受shouldComponentUpdate限制的情况有哪些?
/**
 * 1.Provider(Context对象返回的组件)的value值变化时,它内部的所有消费组件都会重新渲染
 * 
 */

//引用类型(Object,Array)怎么判断新旧值的变化
/**
 * Object.is(value1,value2) 返回一个布尔值,可以判断任意类型的值(引用类型&非引用类型)
 */

//