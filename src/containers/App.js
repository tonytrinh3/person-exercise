import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
    constructor (props){
        super(props);
        console.log('[App.js] Inside Constructor', props);
        this.state = {
            persons: [
                {id: "awaf", name: "Max", age: 28},
                {id: "af", name: "Manu", age: 29},
                {id: "awf", name: 'Stephanie', age: 26}
            ],
            otherState: 'some other value',
            showPersons: false
        };
    }

    componentWillMount(){
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[App.js] Inside componentDidMount()');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate (){
        console.log('[App.js] Inside componentDidUpdate()');
    }
    
    
   /* 
    state = {
        persons: [
            {id: "awaf", name: "Max", age: 28},
            {id: "af", name: "Manu", age: 29},
            {id: "awf", name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    };
    */
 
    


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
        console.log('[App.js] Inside render()');

        let persons = null;

        if(this.state.showPersons){
            persons = <Persons 
                    persons = {this.state.persons}
                    clicked = {this.deletePersonHandler}
                    changed = {this.nameChangedHandler}/>
               
        }

    return (
    // wrap that export with radium component
    
        <div className = {classes.App}>
            <Cockpit
            appTitle = {this.props.title}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonsHandler}
            />
            {persons}
        </div>
      
            
     
    );
  }
}

export default App;
