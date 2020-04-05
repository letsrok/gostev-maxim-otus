import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchCitites} from '../actions/actions'
import { initialStateType } from '../reducers/reducer';
import { ThunkDispatch } from 'redux-thunk';
import { CityActionsType } from '../actions/types';
import { bindActionCreators } from 'redux';

interface IState {
  searchInput: string
}


type IProps = LinkDispatchProps


class SearchCities extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
      this.props.sendSearchValue(this.state.searchInput)
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


interface LinkDispatchProps {
  sendSearchValue: (value: string) => void
}

const mapStatetoProps = (state: initialStateType) => {
  return {
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, CityActionsType>, ownProps: IProps): LinkDispatchProps => {
  return({
    sendSearchValue: bindActionCreators(fetchCitites, dispatch)
  })
}

export default connect(mapStatetoProps, mapDispatchToProps)(SearchCities)