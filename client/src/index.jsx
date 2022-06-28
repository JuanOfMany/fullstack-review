import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    let appInstance = this;
    $.ajax({
    url: '/repos',
    type: 'GET',
    success: function(result) {
      console.log('Retrieved Repos!')
      appInstance.setState({repos: JSON.parse(result)})
    }
  })}

  search (term) {
    let appInstance = this;
    if(term.length === 0) {
      $.ajax({
        url: '/repos',
        type: 'GET',
        success: function(result) {
          console.log('Retrieved Repos!')
          appInstance.setState({repos: JSON.parse(result)})
        }
      })
    } else {
      console.log(`${term} was searched`);
      $.ajax({
        url: '/repos',
        type: 'POST',
        data: {
          term: term
        },
        success: function (result) {
          console.log('Successfully Posted!')
          $.ajax({
            url: '/repos',
            type: 'GET',
            success: function(result) {
              console.log('Retrieved Repos!')
              appInstance.setState({repos: JSON.parse(result)})
            }
          })
        }
      });
    }
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
