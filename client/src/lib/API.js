import axios from 'axios';

export default {
  ArtPage: {
    getArt: function() {
      return axios.get("/api/art/all");
    },

    getNeighborhood: function(query) {
      return axios.get("/api/art/search", {params:{neighborhood: query}});
    },

    getArtist: function(query) {
      return axios.get("/api/art/search", {params:{artistName: query}});
    },

    getAllNeighborhoods: function() {
      return axios.get("/api/art/all/neighborhood");
    },

    getAllArtists: function() {
      return axios.get("/api/art/all/artistName");
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
      return axios.post('/api/keys/', {}, {
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
    },
    testKey: function (apiKey) {
      return axios.get('/api/keys/test', {
        headers: {
          'Authorization': `Api-Key ${apiKey}`
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
