import React, {Component} from 'react';
import axios from 'axios';

export default class GitHubUser extends Component {
  getByUsername(username) {
    return axios.get('https://api.github.com/users/' + username);
  }

  getStarredByUsername(username) {
    return axios.get('https://api.github.com/users/' + username + "/starred");
  }
};
