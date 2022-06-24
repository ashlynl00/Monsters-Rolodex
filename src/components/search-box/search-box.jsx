import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {

    render() {
        return (
            <input 
                className='monsters-search-box search-box' 
                type='search' 
                placeholder='search monsters' 
                onChange={this.props.onSearchChange}>
            </input>
        )
    }
};

export default SearchBox;