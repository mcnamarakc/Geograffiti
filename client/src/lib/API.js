import axios from 'axios';

export default {
  ArtPage: {
    getArt: function() {
      return axios.get("/api/art/all");
    },

    getNeighborhood: function(query) {
      return axios.get("/api/art/search", {query});
    }
  },

  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },

    register: function (email, password) {
      return axios.post('/api/users/register', { email, password });
    }
  },

  Secrets: {
    getAll: function (authToken) {
      return axios.get('/api/secrets', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  }
}
