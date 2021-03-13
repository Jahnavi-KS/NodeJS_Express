const cool = require('cool-ascii-faces') ;
const express = require('express');
const router = express.Router();
const path = require('path') ;
const PORT = process.env.PORT || 3000
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://jahanvi123:mongo123@cluster0.igdjg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = router;


router.get('/db', function (request, response) {

  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    //get collection of routes
    const db = client.db('DB');
    const Routes = db.collection('DB_Collection');
    //get all Routes
    Routes.find({ }).toArray(function (err, docs) {
      if(err) throw err;

      response.render('pages/db', {results: docs});

    });

    //close connection when your app is terminating.
    client.close(function (err) {
      if(err) throw err;
    });
  });//end of connect

});//end router.get







