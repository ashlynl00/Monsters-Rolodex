import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

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
        });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    return (
      <div className='App'>
        <SearchBox onSearchChange={onSearchChange}></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
