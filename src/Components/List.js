import React, { Component } from 'react'
import Input from './Input'
import './List.css'

export default class List extends Component {
    
    state={
        listItem:[]
    }
    addToList=(input)=>{
        this.setState({listItem:[...this.state.listItem,input]})
    }
    markDone=(event)=>{
        console.log("mark this as done",event.target.id)
        var updatedList = this.state.listItem.map((item)=>{
            if(item.id==event.target.id){
                item.done = true;
            }
            return item
        })
        console.log("updatedList after marking done",updatedList)
        this.setState({listItem:updatedList})
    }
    deleteItem=(event)=>{
        this.setState({listItem:this.state.listItem.filter((item)=>{
            return item.id !=event.target.id
        })})
        
    }
    render() {
        return (
            <div>
                <Input onSubmit={this.addToList}></Input>
                <ul>
                    
                    {
                        this.state.listItem.map((item)=>{
                            return(
                                <div>
                                    <li className={item.done==true?'completed':'incomplete'} key={item.id}>{item.eventName}</li>
                                    <button id={item.id} onClick={this.markDone}>Mark as done</button>
                                    <button>Edit</button>
                                    <button id={item.id} onClick={this.deleteItem}>Delete</button>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
