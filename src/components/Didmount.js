import React, { Component } from 'react'

export default class Didmount extends Component {
    constructor()
    {
        super();
        //console.warn("Constructor");
        this.state={
            name:"Nilesh"
        }
    }
    componentDidMount(){
        console.warn("componentDidMount");
    }
  render() {
    console.warn("render");
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"Nilu"})}}>Update name</button>
        </div>
    )
  }
}
