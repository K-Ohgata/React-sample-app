/*
import React,{ Component } from "react";

class App extends Component{
  greet(isMorning){
    if(isMorning){
      return<span>Good Morning</span>
    }else{
      return<span>Hello</span>
    }
  }

  render(){
    const hoge='hogehoge'
    const list=[
      {id:1,title:'one'},
      {id:2,title:'two'},
      {id:3,title:'three'},
      {id:4,title:'four'},
      {id:5,title:'five'},
    ]
    const num=list.map((val,index)=>{return<div key={val.id}>IDは{val.id},TITLEは{val.title}</div>})
    const guusuu=list.filter((val,index)=>{return val.id%2===0})
    const num2=guusuu.map((val,index)=>{return <div key={val.id}>IDは{val.id},TITLEは{val.title}</div>})
    const isMorning=true;

    function Greeting(){
      if(isMorning){
        return<span>Good Morning</span>
      }else{
        return<span>Hello</span>
      }
    }
    
    return(
      <div>
        <h1>Hello</h1>
        <p className="hoge">{hoge}</p>
        <div>{num}</div>
        <div>{num2}</div>
        <div>
        {(()=>{
          if(isMorning){
            return<span>Good Morning</span>
          }else{
            return<span>Hello</span>
          }
        })()}
        </div>
        <div>{isMorning&&<span>Good Morning</span>}</div>
        <div>{isMorning?<span>Good Morning</span>:<span>Hello</span>}</div>
        <Greeting/>
        <div>{this.greet(isMorning)}</div>
        <button onClick={()=>console.log('Woooooaaaaaa!!!')}>Greet</button>
        
      </div>
    )
  }
}
export default App;
*/

/*
import React from "react";
import propTypes from 'prop-types';

const App=()=>{
  return(
    <div>
      <Funga/>
    {
      Members.map((men,index)=>{
        return<Member name={men.name} age={men.age}/>
      })
    }
    </div>
  )
}

const Funga=()=>{
  return(
    <div>
      <p>フンガフンガフンガフンガ</p>
    </div>
  )
}

const Members=[
  {name:"taro"},
  {name:"jiro",age:18},
  {name:"saburo",age:15},
]


const Member=(props)=>{
  return(
    <div>
      <span>I'm {props.name} </span>
      <span>age:{props.age}</span>
    </div>
  )
}

Member.defaultProps={
  age:25,
}

Member.propTypes={
  name:propTypes.string,
  age:propTypes.number.isRequired
}

export default App;
*/

/*
import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }
  render(){
    return(
      <React.Fragment>
        <p>現在の数字は{this.state.count}です</p>
        <button onClick={()=>this.setState({count:this.state.count+1})}>+1</button>
        <button onClick={()=>this.setState({count:this.state.count-1})}>-1</button>
        <button onClick={()=>this.setState({count:0})}>0</button>
      </React.Fragment>
    )
  }
}

export default App;
*/

/*
import React, {Component,useState} from 'react';

const App=()=>{
  const[count,setCount]=useState(0)
  return(
    <div>
      <p>現在の数字は{count}です</p>
      <button onClick={()=>setCount(a=>a+1)}>+1</button>
      <button onClick={()=>setCount(count-1)}>-1</button>
      <button onClick={()=>setCount(0)}>0</button>
    </div>
  )
}

export default App;
*/

import React, { Component } from 'react';
import {connect} from 'react-redux'
import { countMinus, countPlus } from '../actions';

class App extends Component {
  render(){
    const props =this.props
    return (
      <React.Fragment>
        <p>現在の数字は{props.val}です</p>
        <button onClick={props.countPlus}>+1</button>
        <button onClick={props.countMinus}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state =>({
  val: state.counter.val
})

const mapDispatchToProps = dispatch =>({
  countPlus:()=>dispatch(countPlus()),
  countMinus:()=>dispatch(countMinus())
})

export default connect (mapStateToProps,mapDispatchToProps)(App)