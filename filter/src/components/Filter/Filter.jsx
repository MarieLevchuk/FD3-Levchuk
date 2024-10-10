import React from 'react';
import './Filter.css';

export default class Filter extends React.Component{
    state = {
        words: this.props.words,
        sortAZ: false,
        searchString: ''
    }

    handleSort = e => {       
        this.setState({sortAZ: e.target.checked}, this.sort);         
    }

    handleFind = e => {
        this.setState({ searchString: e.target.value}, this.find);
    }

    sort = () => {
        if(this.state.sortAZ){
            let wordsCopy = JSON.parse(JSON.stringify(this.state.words));
            this.setState({ words: wordsCopy.sort()});
        } else {
            this.setState({ words: this.props.words}, () => {
                if(this.state.searchString){
                    this.find();
                }
            });
            
        }
    }

    find = () => {
        let wordsCopy = JSON.parse(JSON.stringify(this.props.words));
        let filtered = wordsCopy.filter(word => word.includes(this.state.searchString));
            
        this.setState({ words: filtered}, () => {
            if(this.state.sortAZ){
                this.sort();
            }
        });
    }

    reset = () => {
        this.setState({
            words: this.props.words,
            sortAZ: false,
            searchString: ''
        });
    }

    render(){
        return (
            <div className="Filter">
                <div className="Filter__tools">
                    <input className="Filter__sort" type="checkbox" checked={this.state.sortAZ} onChange={this.handleSort}/>
                    <input className="Filter__search" type="text" value={this.state.searchString} onChange={this.handleFind}/>
                    <button className="Filter__reset" onClick={this.reset}>Сброс</button>
                </div>
                <div className="Filter__words">
                    {
                        this.state.words.map(word => word + '\n')
                    }
                </div>
            </div>
        );
    }
}