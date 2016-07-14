module.exports = function (app, mongo, db) {

  // Users
  app.get('/user', function (req, res) {
    db.collection('users').find()
      .toArray(function (err, users) {
        res.json(users);
      }
    );
  });

  app.get('/user/:id', function (req, res) {
    var userId = new mongo.ObjectID(req.params.id);
    db.collection('users').findOne({_id: userId}, function (err, doc) {
      res.json(doc);
    });
  });

  app.post('/user', function (req, res) {
    db.collection('users').insertOne(req.body);
    res.end();
  });

  app.put('/user/:id', function (req, res) {
    var profileId = new mongo.ObjectID(req.params.id);
    db.collection('users').updateOne(
      {"_id": profileId},
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          subscribe: req.body.subscribe
        }
      },
      function (err, doc) {
        var userId = new mongo.ObjectID(req.params.id);
        db.collection('users').findOne({_id: userId}, function (err, doc) {
          res.json(doc);
        });
      });
  });

};