import React from "react"
import './App.css';
function Todoitems(props) {
    const completedstyle ={
        fontStyle :"italic",
        color: "#cdcdcd",
        textDecoration : "line-through"
    }
    return (
        <div className="Rounak">
            <input type="checkbox" checked={props.item.completed} onChange={() => { props.handleChange(props.item.id) }} /> 
             <p style={props.item.completed ?completedstyle :null}> Todo {props.item.id} => {props.item.text}</p>
        <hr />
        </div>
    )
}

export default Todoitems