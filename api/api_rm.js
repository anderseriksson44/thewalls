const fs = require('fs');
const data=fs.readFileSync('./routes/cs/cs.json')
const content = JSON.parse(data);
const bal = content.usecase.balance.heading;
const rew = content.usecase.rewards.heading;

const mongoose = require('mongoose');

const roles = require("../models/revenuemanagerRoles.js")
const usecase = require("../models/revenuemanagerUC.js")
const archtitecure = require("../models/revenuemanagerArch.js")
const intros = require("../models/revenuemanagerIntro.js")

module.exports = (app) => {
  console.log("CS")

  app.get('/api/rm/', function (req, res){
    intros.findOne({}, (error,intro) => {
      res.send(intro);
    });
  });
  
  app.get('/api/rm/what', function (req, res){
    usecase.findOne({}, (error, what) => {
      res.send(what);
    });
  });
  
  app.get('/api/rm/how', function (req, res){
    console.log(req.query.component)
    var component = req.query.component;
    var query = {};
    archtitecure.findOne({}, (error, how) => {
      res.send(how);
    });
  });
  
  app.get('/api/rm/who', function (req, res){
    // console.log(req.query.component)
    var component = req.query.component;
    var query = {};
    roles.findOne({}, (error, role) => {
      res.send(role);
    });
  });
    

};
