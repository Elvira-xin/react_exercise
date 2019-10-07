import React from 'react'
//类组件创建的方法
export default class HelloWord extends React.Component{
    render(){
        //这是jsx语法 jsx只是一种中间语法
        return(
            <div>HelloWord</div>
        )
    }
}

//函数组件用function去定义
// function HelloWord(){
//     return(<div>我是函数式组件</div>)
// }
// export default HelloWord

