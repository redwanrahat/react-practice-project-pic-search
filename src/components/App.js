import React, {Component} from 'react';
import Axios from 'axios'
import SearchBar from "./SearchBar"

class App extends Component {
    onSearchSubmit(term){
        Axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 8ba51d2d2cf8188d6db33ac5cb6f6b07dca5fa70c0550964c6000709f76d464e'
            }            
        })
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: "15px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;
