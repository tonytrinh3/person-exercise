import React from 'react';
import classes from "./Cockpit.css"

//function component bc it doesn't need to maintain its own state 

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }

    btnClass = classes.Red;
    if (props.persons.length <=2){
        assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.persons.length <=1){
        assignedClasses.push(classes.bold);
    }
    
    return (
        //scoping of our classes in the cockpit component
        <div className = {classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className = {assignedClasses.join(' ')}> This is really working!</p>
            <button 
                className = {btnClass}
                onClick = {props.clicked}>Toggle Persons</button>
        </div>

    )
}

export default Cockpit;