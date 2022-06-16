import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users)=>{
        this.setState(
          ()=>{
            return {monsters: users}
          }, 
          ()=>{
            console.log(this.state);
          }
        )
      })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
        this.setState(()=>{
          return { searchField }
        },
        ()=>{
          console.log(this.state);
        });
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    })
    return (
      <div className='App'>
      <input className='search-box' type='search' placeholder='search monsters' onChange={this.onSearchChange}></input>
        {/* {filteredMonsters.map((monster)=>{
          return (
            <h1 key={monster.id}>{monster.name}</h1>
          )
        })} */}
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
