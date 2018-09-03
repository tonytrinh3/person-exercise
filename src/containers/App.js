import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxilary'

//allow for available for other components
export const AuthContext = React.createContext(false);


class App extends PureComponent {
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
            showPersons: false,
            toggleClicked: 0,
            authenticated: false 
        };
    }

    componentWillMount(){
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[App.js] Inside componentDidMount()');
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextState.persons !== this.state.persons ||
    //     nextState.showPerson !== this.state.showPersons|| ;
    //     // return true;
    // }

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
        this.setState((prevState,props) => {
            return{
            showPersons: !doesShow, 
            toggleClicked:prevState.toggleClicked + 1
            }
        });
    }

    //function
    loginHandler = () => {
        this.setState({authenticated: true});

    }
   
    render(){
        console.log('[App.js] Inside render()');

        let persons = null;

        if(this.state.showPersons){
            persons = <Persons 
                    persons = {this.state.persons}
                    clicked = {this.deletePersonHandler}
                    changed = {this.nameChangedHandler}
                    />;
               
        }

    return (
    // wrap that export with radium component
    
        <Aux>
            <button onClick = {() => {this.setState({showPersons: true})}}> Show Persons </button>
            <Cockpit
            appTitle = {this.props.title}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            login = {this.loginHandler}
            clicked = {this.togglePersonsHandler}
            />
            <AuthContext.Provider value ={this.state.authenticated}>
            {persons}
            </AuthContext.Provider>
        </Aux>
      
            
     
    );
  }
}

export default withClass(App,classes.App);
