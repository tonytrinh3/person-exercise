import React, {Component} from 'react';

import Person from './Person/Person';


// no more this.namechangedhandler bc this is a function not a class so you need to pass something to the function in the app.js 
// now extend to class to components 
//now turn a const stateless component into a stateful component 
class Persons extends Component{
    render (){
        return this.props.persons.map((person, index) => {
            return <Person 
            click = {() =>this.props.clicked(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id} 
            changed = {(event) => this.props.changed(event,person.id)}/>
            
        } )


    }


}

export default Persons;