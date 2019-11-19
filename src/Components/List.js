import React, { Component } from 'react'
import Input from './Input'
import './List.css'

export default class List extends Component {
    
    state={
        listItem:[],
        edit:false
    }
    addToList=(input)=>{
        this.setState({listItem:[...this.state.listItem,input]})
    }
    editList=(item)=>{
        let c = this.state.listItem.map((elem)=>{
            if(elem.id === item.id){
                elem.eventName = item.eventName
            }
            return elem;
        })
        this.setState({listItem:c,edit:false})
    }
    editItem(event){
        this.setState({edit:true,editValue:arguments[1],editId:arguments[0]})
    }
    markDone=(event)=>{
        var updatedList = this.state.listItem.map((item)=>{
            if(item.id==event.target.id){
                item.done = true;
            }
            return item
        })
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
                <Input editValue={{editValue:this.state.editValue,editId:this.state.editId}} edit={this.state.edit} onSubmit={this.addToList} onEditSubmit={this.editList}></Input>
                <ul>
                    
                    {
                        this.state.listItem.map((item)=>{
                            return(
                                <div>
                                    <li className={item.done==true?'completed':'incomplete'} key={item.id}>{item.eventName}</li>
                                    <button id={item.id} onClick={this.markDone}>Mark as done</button>
                                    <button id={item.id} onClick={this.editItem.bind(this,item.id,item.eventName)}>Edit</button>
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
