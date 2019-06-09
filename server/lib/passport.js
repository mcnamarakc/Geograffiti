const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { HeaderAPIKeyStrategy } = require('passport-headerapikey');

const db = require('../models');

var JWT_STRATEGY_OPTS = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use(
  new JwtStrategy(JWT_STRATEGY_OPTS, function(jwtPayload, done) {
    db.User.findByPk(jwtPayload.sub)
      .then(user => done(null, user || false))
      .catch(err => done(err, false));
  })
);

const JWTVerifier = passport.authenticate('jwt', { session: false });

const { refreshKeysDaily } = require('./dailyRefresh');
passport.use(
  new HeaderAPIKeyStrategy(
    { header: 'Authorization', prefix: 'Api-Key ' },
    false,
    function(apikey, done) {
      refreshKeysDaily(db);
      db.User.findOne({ where: { apiKey: apikey } })
        .then(user => {
          if (!user) {
            return done(null, false);
          }
          if (user.remainingRequests > 0) {
            return done('out of requests', null);
          }

          db.User.decrement(
            { requestsRemaining: 1 },
            { where: { apiKey: apikey } }
          );
          return done(null, user);
        })
        .catch(err => {
          return done(err);
        });
    }
  )
);

const ApiKeyVerifier = passport.authenticate('headerapikey', {
  session: false //,
  //failureRedirect: '/api/unauthorized'
});

module.exports = {
  passport,
  JWTVerifier,
  ApiKeyVerifier
};
