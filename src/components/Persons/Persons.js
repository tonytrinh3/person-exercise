import React, {Component} from 'react';

import Person from './Person/Person';


// no more this.namechangedhandler bc this is a function not a class so you need to pass something to the function in the app.js 
// now extend to class to components 
//now turn a const stateless component into a stateful component 
class Persons extends Component{
    constructor (props){
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
         this.lastPersonRef = React.createRef();
    }

    componentWillMount(){
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[Persons.js] Inside componentDidMount()');
        this.lastPersonRef.current.focus();
    }
    
    componentWillReceiveProps(nextProps){
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
    }
    
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || 
    //     nextProps.changed !== this.props.changed ||
    //     nextProps.clicked !== this.props.clicked;
    //     //return true;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate (){
        console.log('[Persons.js] Inside componentDidUpdate()');
    }

   

    render (){
        console.log('[Persons.js] Inside render()')
        return this.props.persons.map((person, index) => {
            return <Person 
            click = {() =>this.props.clicked(index)}
            name = {person.name}
            position = {index}
            age = {person.age}
            ref={this.lastPersonRef}
            key = {person.id} 
            changed = {(event) => this.props.changed(event,person.id)}/>
            
        } )


    }


}

export default Persons;