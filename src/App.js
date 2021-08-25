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
        {/* <h1>Hello</h1> */}
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
