import React from 'react';

export default class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
    state = { term: ''};
    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return ( 
            <div className = "ui segment" >
                <form className = "ui form" onSubmit={this.onFormSubmit}>
                    <div className = "field" >
                        <label > Image Search </label>
                        {/* <input type = "text" onChange = {this.onInputChange}/>  */}
                        {/* <input type = "text" onChange = {(e) => this.setState({term: e.target.value.toUpperCase()})} value={this.state.term} />  */}
                        <input type = "text" onChange = {(e) => this.setState({term: e.target.value})} value={this.state.term} /> 
                    </div>
                </form>
            </div>
        )
    }
}