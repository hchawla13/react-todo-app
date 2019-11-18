import React, { Component } from 'react'

export default class Input extends Component {
    state={
        inputVal:''
    }
    getInput=(event)=>{
        this.setState({inputVal:event.target.value})
    }
    SubmitInput = (event) =>{
        event.preventDefault();
        this.props.onSubmit({id:new Date().getTime(),eventName:this.state.inputVal,done:false})
        this.setState({inputVal:''})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.SubmitInput}>
                    <input placeholder="add item" type="text" onChange={this.getInput} value={this.state.inputVal}></input>
                </form>
            </div>
        )
    }
}
