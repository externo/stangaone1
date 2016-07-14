module.exports = function (app, mongo, db) {

  app.get('/client', function (req, res) {
    db.collection('clients').find()
      .toArray(function (err, types) {
        res.json(types);
      }
    );
  });

  app.post('/client', function (req, res) {
    console.log(req.body);
    db.collection('clients').insertOne(
      req.body,
      function (err, result) {
        db.collection('clients').find()
          .toArray(function (err, types) {
            res.json(types);
          }
        );
      });
  });

  app.delete('/client/:id', function (req, res) {
    var typeId = new mongo.ObjectID(req.params.id);
    db.collection('clients').deleteOne(
      {_id: typeId},
      function (err, results) {
        db.collection('clients').find()
          .toArray(function (err, types) {
            res.json(types);
          }
        );
      }
    );
  });

};