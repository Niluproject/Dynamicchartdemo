import { render } from '@testing-library/react'
import React from 'react'

class Didupdate extends React.Component {
    constructor(){
        super();
        console.warn("constructor");
        this.state={
            name:"Nilesh",
            count: 0
        } 
    }
    componentDidUpdate(preProps, preState, snapShot){
        console.warn("componentDidUpdate", preState.count,this.state.count);
        if(preState.count===this.state.count){
            alert("Data is same");
        }
    }
render() {
        console.warn("render");
return (
    <div>
        <h1>componentDidUpdate {this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Mount</button>
        {/* <button onClick={()=>{this.setState({count:1})}}>Update Mount</button> */}

    </div>
  )
}
}
export default Didupdate