import axios from 'axios';

export default {
  ArtPage: {
    getArt: function() {
      return axios.get("/api/art/all");
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

  ApiKey: {
    requestKey: function (authToken) {
      return axios.post('/api/keys/', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    revokeKey: function (authToken) {
      return axios.delete('/api/keys/', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    getKey: function (authToken) {
      return axios.get('/api/keys/', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
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
