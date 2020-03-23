import React, {Component} from 'react';

interface Iprops {
  func: Function,
  sendSearch: void
}

interface IState {
  searchInput: string
}

export class SearchCities extends React.Component<Iprops, IState> {
  constructor(props: Iprops) {
    super(props);

    this.state = {
      searchInput: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.sendSearch = this.sendSearch.bind(this)
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    const searchInput = event.currentTarget.value;
    this.setState({
      searchInput
    })
  }

  sendSearch(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const {searchInput} = this.state;

    if(searchInput.length > 2) {
      this.props.func(searchInput)
    }
  }

  render(){
    const {searchInput} = this.state;

    return (  
      <div className="form-wrapper wrap">
          <form onSubmit={this.sendSearch}>
            <input type="search" name="citySearch" id="citySearch"
              placeholder="search cities on english please"
              value={searchInput}
              onChange={this.handleChange}
            />
            <button type="submit">Искать</button>
          </form>
      </div>
    )
  }
}