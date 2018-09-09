import decode from 'jwt-decode';
import {baseApiUrl} from "../utils/constants";
export default class AuthService {
  constructor() {
    this.fetch = this.fetch.bind(this); // React binding stuff
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(email, password) {
    return this.fetch(`${baseApiUrl}/api/account/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })

    }).then(res => {
      this.setToken(res.token); // Setting the token in localStorage
      this.setIsAdmin(res.isAdmin); // Setting the token in localStorage
      return Promise.resolve(res);
    });
  }

  loggedIn() {
    const token = this.getToken(); // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
        return true;
      }
      else
        return false;
    }
    catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    localStorage.setItem('auth_token', idToken);
  }

  setIsAdmin(isAdmin) {
    localStorage.setItem('isAdmin', isAdmin);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('isAdmin');
  }

  getProfile() {
    return decode(this.getToken());
  }

  fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json());
  }

  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
