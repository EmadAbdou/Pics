import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    // Method to send request and recieve response data
    // onSearchSubmit(term){
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID e7c1f3e22c59436ef4689df33a587ffe1b74c2e1b2f4d29d654da0beada6b86a'
    //         }
    //     }).then( (response) => {
    //         console.log(response.data.results);
    //     })
    // }

    state = { images: [] };
    // Other method " Best one "
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        // console.log(response.data.results);
        this.setState({ images: response.data.results });
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}> 
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
                {/* Found: { this.state.images.length } images */}
                <ImageList images = {this.state.images}/>
            </div> 
        );    
    }
}

export default App;