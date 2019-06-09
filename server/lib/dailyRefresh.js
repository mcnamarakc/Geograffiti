let lastUpdated = 0;

function dayElapsed() {
  const dayInMs = 86400000; //1000 * 60 * 60 * 24;
  const nowInMs = Date.now();
  if (nowInMs - lastUpdated > dayInMs) {
    lastUpdated = nowInMs;
    return true;
  } else {
    return false;
  }
}

module.exports = {
  refreshKeysDaily: function(db) {
    if (dayElapsed()) {
      console.log('Day has passed since last refresh => reseting key limits');
      // db.User.update(
      //   {
      //     requestsRemaining: db.User.Instance.requestLimit()
      //   },
      //   {
      //     where: {
      //       requestLimit: {
      //         [Op.ne]: null
      //       }
      //     }
      //   }
      // );
      db.sequelize
        .query(
          'UPDATE users SET requestsRemaining = requestLimit WHERE requestLimit IS NOT NULL'
        )
        .then(([results, metadata]) => {
          // Results will be an empty array and metadata will contain the number of affected rows.
          console.log(metadata);
        });
    }
  }
};
