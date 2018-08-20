import React from 'react';

import Person from './Person/Person';

// no more this.namechangedhandler bc this is a function not a class so you need to pass something to the function in the app.js 
const persons = (props) => {
    return (
        props.persons.map((person, index) => {
                        return <Person 
                        click = {() =>props.clicked(index)}
                        name = {person.name}
                        age = {person.age}
                        key = {person.id} 
                        changed = {(event) => props.changed(event,person.id)}/>
                        
                    } )
    );
}

export default persons;