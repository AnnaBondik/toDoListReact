import { Component } from 'react';
import pic from './tick.png';
export class List extends Component{
    constructor(){
        super();
        this.state={
            input:'',
            list:[]
        }
    }
    onChangeEvent(e){
        this.setState({input:e});
    }
    addElement(userInput){
        if(userInput===''){
            return false;
        } 
        let array=this.state.list;
        array.unshift(userInput);
        console.log(array)
        this.setState({list:array, input:''})
    }
    Clear(){
        let array=this.state.list;
        array=[];
        this.setState({list:array});
    }
    Done(event){
        const li=event.target;
        li.classList.toggle('crossed');
    }
    Enter(e){
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.Enter}>
                <div className='header'>
                    <h1>My To Do List</h1>
                </div>
            <div className='input'>
                <input type="text"
                placeholder='my to do list'
                value={this.state.input}
                onChange={(e)=> this.onChangeEvent(e.target.value)} />
    </div>
           <div className='button'>
               <button className='add' onClick={()=> this.addElement(this.state.input)}>Add</button>
           </div>
           <ul className='list'>
               {this.state.list.map((x, i)=>(
                   <li onClick={this.Done} key={i}><img src={pic} alt="done"/> {x}</li>
               )
               )}
           </ul>
           <div className='button'>
           <button className="clear" onClick={()=>this.Clear()}>All done!</button>
           </div>
           </form>
        )
    }
}