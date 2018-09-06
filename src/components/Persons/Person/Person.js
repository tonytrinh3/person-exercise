import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Auxilary';
<<<<<<< HEAD
import {AuthContext} from '../../../containers/App';
=======
import { AuthContext } from '../../../containers/App';

>>>>>>> 79d30659d8de9a369debba8e44012aaab5124015

//changed from a const stateless component to a stateful component 
//why change from props to this.props when going from const to class? 
class Person extends Component {
    constructor (props){
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
    }
//didmount execute after render
    componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position ===0){
            this.inputElement.current.focus();
        }

    }


    focus(){
        this.inputElement.current.focus();
    }
    //ref is all to focus - only use this for focus or media

            //this.props.authenticated ? <p>I'm authenticated!</p> : null
    
    render() {
        console.log('[Person.js] Inside render()')
        return (
<<<<<<< HEAD
            <Aux classes = {classes.Person} >
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated!</p> : null}
                </AuthContext.Consumer>
    
=======
            <Aux classes = {classes.Person}>
                <AuthContext.Consumer>
                {auth => auth ? <p>I'm authenticated!</p> : null}
                </AuthContext.Consumer>
>>>>>>> 79d30659d8de9a369debba8e44012aaab5124015
                <p onClick = {this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                ref = {this.inputElement}
                type ="text" 
                onChange = {this.props.changed}
                value = {this.props.name}
                />
            </Aux>
        )   
    }


}



 
Person.propTypes = {
    click: PropTypes.func ,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
 }



export default withClass(Person,classes.Person);