import React, { Component } from 'react'
import '../index.css'

//奥拓
function Cars1() {
    return (
        <div>
            <h3 className="cars">奥拓</h3>
        </div>
    )
}
//奥迪
function Cars2() {
    return (
        <div>
            <h3 className="cars">奥迪</h3>
        </div>
    )
}
//玛莎拉蒂
class Cars3 extends Component {
    render() {
        return (
            <div>
                <h3 className="cars">玛莎拉蒂</h3>
            </div>
        )
    }
}
//路虎
class Cars4 extends Component {
    render() {
        return (
            <div>
                <h3 className="cars">路虎</h3>
            </div>
        )
    }
}
//奇瑞
class Cars5 extends Component {
    render() {
        return (
            <div>
                <h3 className="cars">奇瑞</h3>
            </div>
        )
    }
}


const list = [Cars1, Cars2, Cars3, Cars4, Cars5]
export default class Cars extends Component {
    //1.声明state
    state={
        choose:null
    }
    handleClick=()=>{
        //2.使用setState方法改变state
        // Math.floor(Math.random(0,1)*5)
        this.setState({
            choose:list[Math.floor(Math.random(0,1)*5)]
        })
    }
    render() {
        let {choose}=this.state
        let Comp=choose
        return (
            <div className="container">
                {list.map((V, i, a) => <V key={i}/>)}
                <button className="btn" onClick={this.handleClick}>抽奖</button>
                <h3>抽中：<h5>{choose?<Comp/>:null}</h5></h3> 
            </div>
        )
    }
}

