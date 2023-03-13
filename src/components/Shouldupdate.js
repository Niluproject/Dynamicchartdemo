import React, { Component } from 'react'

export default class Shouldupdate extends Component {
    constructor(){
        super();
         this.state={
            // name:"Nilesh"
            count:0
        }
    }
    shouldComponentUpdate(){
        console.warn("shouldComponentUpdate");
    }
  render() {
    return (
      <div>
        <h1>Shouldupdate {this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Mount</button>
      </div>
    )
  }
}
