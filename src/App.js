import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import MyComponent from './components/Greet'
//import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import NameList from './components/NameList';
//import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
//import './appStyle.css'
//import styles from './appStyles.module.css'
import LifecycleA from './components/LifecycleA';
//import UserGreeting from './components/UserGreeting';
//import ParentComponent from './components/ParentComponent';
//import ChildComponent from './components/ChildComponent'
//import EventBind from './components/EventBind';

/*function App() {
  return (
    <div className="App">
      <Greet/>
    </div>
  );
}*/

/*class App extends Component {
  render(){
  return (
    <div className="App">
      <MyComponent/>
    </div>
  );
}
}*/

class App extends Component {
  render(){
  return (
    <div className="App">
     
     {/* 
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      
      <EventBind/>
     <ParentComponent/>
     <ChildComponent/>
     <UserGreeting/>
      <Stylesheet primary ={true} />*/}
      <FunctionClick/>
      <LifecycleA/>
      <Inline/>
      <ClassClick/>
      <Counter/>
      <Message/>
      <NameList/>
      {/*<Greet/>
      <Welcome name = "IIT" campus = "Bombay"/>
      <Welcome name = "VIT" campus = "Chennai"/>
      <Welcome name = "BIT" campus = "Ranchi"/>
      <Hello/>*/}
      <Greet name = "- > Genomic Analytics" employee="Genome Analyst"/>
        <p>This is children props</p>
      <Greet name = "-> TB Genomic Analytics" employee=" HPC Design."/>
        <button>Action</button>
      </div>
  );
}
}
export default App;
