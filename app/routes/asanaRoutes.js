var request         = require('request');
var Authentication  = require('./authentication.js');
var User            = require('../models/User.js');


var asanaURL        = 'https://app.asana.com/api/1.0';
var options         = {};

module.exports = function (app) {

  /* === FETCH SPECIFIC USER & GRAB TASKS === */
  app.get('/users', function (req, res) {
    User.findOne({ _id: req.user._id }, function (err, user) {

      options.method  = 'GET';
      options.url     = asanaURL + '/workspaces/1213745087037/projects'
      options.headers = {
        'Authorization' : 'Bearer ' + user.asana.token
      };

      request(options, function (err, response, projects) {
        projects = JSON.parse(projects).data;
        projects.forEach(function (project) {
          if (project.name === 'Amira Anuar') { // replace user.asana.name
            options.url = asanaURL + '/projects/' + project.id + '/tasks';
            request(options, function (err, response, tasks) {
              res.send(JSON.parse(tasks).data);
            });
          }
        });        
      });
    });
  });

  app.get('/test', function (req, res) {
    var url = asanaURL + '/tasks/13006575179249/addProject'
    var authToken = 'Bearer ' + req.user.asana.token;
    var data = JSON.stringify({data : '13006575179208'})

    
    request({
      method: 'POST',
      url: url,
      headers: {
        'Authorization'   : authToken,
        'content-type'    : 'application/json',
        'Content-Length'  : data.length
      },
      body: data
    }, function (err, response, body) {
      console.log(err)
      console.log('BODY########################################')
      var body = JSON.parse(body);
      console.log(body);
      console.log('BODY########################################')
    });
  });

};