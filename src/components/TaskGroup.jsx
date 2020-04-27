import React, { Component } from 'react';
import Task from './Task';

export default class TaskGroup extends Component {
    task = "";
    state = {
        tasks: []
    };
    constructor(props){
        super(props);

        this.state.tasks = ["task1","task2","task3"];
    }

    handleInput = (e) => {
        this.task = e.target.value;
    }
        
    

    handleSubmit = () => {
        this.state.tasks.push(this.task);
        this.setState({ tasks: this.state.tasks });
    }

    render = () => {
        return (
            <React.Fragment>
                <input className="form-control" onChange={this.handleInput}></input>
                <button onClick={this.handleSubmit} >submit</button>
                { this.state.tasks.map(task => <Task key={task} description={task} /> ) }
            </React.Fragment>            
        )
    }
}