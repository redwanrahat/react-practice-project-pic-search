import React, {Component} from 'react';
import unsplash from '../api/unsplash'
import SearchBar from "./SearchBar"

class App extends Component {
    state = { images: [] }
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },          
        })
        this.setState({images: response.data.results})
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: "15px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {this.state.images.length}
            </div>
        );
    }
}

export default App;
