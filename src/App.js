import React,{Component} from "react";
import "./myStyle.css";
import "./App.css";
import {MyFuncComponent} from "./components/FunctionComponent";
import MyClassComponent from "./components/ClassComponent";

export class App extends Component{
  constructor() {
    super();
    this.state={
      showFuncComponent:false,
      showClassComponent:false,
    };
  }

  ClickFunComponent=()=>{
    this.setState((prev)=>{
      return {
        showFuncComponent:!prev.showFuncComponent
      }
    });
    // console.log(this.state);
  };

  ClickClassComponent=(prev)=>{
    this.setState((prev)=>{
      return {
        showClassComponent:!prev.showClassComponent
      }
    })
  };

  render(){
    return (
      <div className="App">
        <h1 className="heading">Styling using Functional and Class Component</h1>
        <button onClick={this.ClickFunComponent} className="b1">To see styling in functional Component</button>
        <button onClick={this.ClickClassComponent} className="b2">To see styling in Class Component</button>
        {this.state.showFuncComponent && <MyFuncComponent/>}
        {this.state.showClassComponent && <MyClassComponent/>}
      </div>
    );
  }  
}

export default App;
