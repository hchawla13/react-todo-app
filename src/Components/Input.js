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
    submitUpdatedInput = (event) =>{
        event.preventDefault()
        this.props.onEditSubmit({id:this.props.editValue.editId,eventName:this.state.inputVal})
        this.setState({inputVal:''})
    }
    renderEditForm(){
        if(this.props.edit){
            return(
                <form onSubmit={this.submitUpdatedInput}>
                    <input placeholder="edit item" type="text" defaultValue={this.props.editValue.editValue} onChange={this.getInput}></input>
                    <button>Edit</button>
                </form>
            )
        }
    }
    renderAddForm(){
        if(!this.props.edit){
            return(
                <form onSubmit={this.SubmitInput}>
                    <input placeholder="add item" type="text" onChange={this.getInput} value={this.state.inputVal}></input>
                    <button>Add</button>
                </form>   
            )
                
        }
    }
    render() {
        return (
            <div>
                {this.renderEditForm()}
                {this.renderAddForm()}
            </div>
        )
    }
}
