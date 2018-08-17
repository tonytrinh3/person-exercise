import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import classes from './App.css';


class App extends Component {
    state = {
        persons: [
            {id: "awaf", name: "Max", age: 28},
            {id: "af", name: "Manu", age: 29},
            {id: "awf", name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    }
    


    nameChangedHandler = (event, id) => {
        // good to not mutate the state directly  
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState ({persons: persons});
    }
    


    deletePersonHandler = (personIndex) => {
        //const persons2 = this.state.persons.slice();
        const persons2 = [...this.state.persons];
        persons2.splice(personIndex,1);
        this.setState({persons: persons2})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});

    }
   
    render(){
       
        let persons = null;
        let btnClass = '';



        if(this.state.showPersons){
            persons = ( 
                <div> 
                    {this.state.persons.map((person, index) => {
                        return <Person 
                        click = {() =>this.deletePersonHandler(index)}
                        name = {person.name}
                        age = {person.age}
                        key = {person.id} 
                        changed = {(event) => this.nameChangedHandler(event,person.id)}/>
                        
                    })}

                </div>
            );

            btnClass = classes.Red;

        }

        let assignedClasses = [];
        if (this.state.persons.length <=2){
            assignedClasses.push(classes.red); //classes = ['red']
        }
        if (this.state.persons.length <=1){
            assignedClasses.push(classes.bold);
        }

    return (
    // wrap that export with radium component
    
        <div className = {classes.App}>
                    <h1>Hi, I'm a React App</h1>
                    <p className = {assignedClasses.join(' ')}> This is really working!</p>
                    <button 
                        className = {btnClass}
                        onClick = {this.togglePersonsHandler}>Switch Name</button>
                        {persons}
        </div>
      
            
     
    );
  }
}

export default App;
