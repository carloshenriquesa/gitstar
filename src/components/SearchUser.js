import React, {Component} from 'react';
import GitHubUser from '../services/GitHubUsers';

export default class SearchUser extends Component {
  handleSubmit(e) {
    e.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value).then(function(response) {
      this.props.updateUser(response.data);
    }.bind(this));

  }

  render() {
    return (
      <div className="jumbotron">
        <h1>GitHub Info</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                ref="username"
                className="form-control"
                />
            </div>
            <button
              type="submit"
              className="btn btn-primary">Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
};

SearchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired,
};
