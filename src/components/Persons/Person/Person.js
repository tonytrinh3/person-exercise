import React, {Component} from 'react';
import classes from './Person.css';

//changed from a const stateless component to a stateful component 
//why change from props to this.props when going from const to class? 
class Person extends Component {
    constructor (props){
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
    }
    
    
    render() {
        console.log('[Person.js] Inside render()')
        return (
            <div className = {classes.Person} >
                <p onClick = {this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type ="text" onChange = {this.props.changed}/>
            </div>
        )

    }



}



 


export default Person;