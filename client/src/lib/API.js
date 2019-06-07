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

  Business: {
    getBrewery: function() {
      return axios.get("/api/business/all")
    },

    getNeighborhoodBrewery: function(query) {
      return axios.get("/api/business/search", {params: {neighborhood: query}})
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
    },

    updateUser: function (authToken, email) {
      return axios.post('/api/users/me', {email:email}, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      
    },
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
  },

  Submit: {
    art: function(authToken, data) {
      return axios.post('/api/art/', data, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    business: function (authToken, data) {
      return axios.post('/api/business/', data, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  Favorites: {
    get: function (authToken) {
      return axios.get('/api/favorites/', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    post: function(authToken, ArtId) {
      return axios.post('/api/favorites/', { ArtId }, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    delete: function (authToken, id) {
      return axios.delete('/api/favorites/'+id, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  }
}
