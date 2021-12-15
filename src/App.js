
import React, { Component } from 'react'
import './App.css';
import Cardlist from './components/cardlist/cardlist';
import Searchbox from './components/searchbox/searchbox';



export default class App extends Component {
  
  constructor(){
    super();
    this.state={
      monsters:[],
      search:""
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=> Response.json())
    .then(users=>this.setState({monsters:users}))
}
  onsearchChange=(e)=>{
    this.setState({search:e.target.value})
  }
 
  render() {
    const { monsters,search }= this.state;
    const filtredMonsters= monsters.filter(monster=>
      monster.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox 
              placeholder="search monsters"
              searchChange={this.onsearchChange}
        />
        <Cardlist monsters={filtredMonsters} />
      </div>
    )
  }
}
