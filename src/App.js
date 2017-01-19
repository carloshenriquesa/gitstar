import React, {Component} from 'react';
import SearchUser from './components/SearchUser';
import UserInfo from './components/UserInfo';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      repos: []
    };
  }

  updateUser(user) {
    this.setState(
      user: user
    );
  }

  updateRepos(repos) {
    this.setState(
      repos: repos
    );
  }

  render() {
    return (
      <div className="container">
        <SearchUser
          updateUser={this.updateUser}
          updateRepos={this.updateRepos}
        />
        <UserInfo
          user={this.state.user}
          repos={this.state.repos}
        />
      </div>
    );
  }
};
