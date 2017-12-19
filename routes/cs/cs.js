const fs = require('fs');
const data=fs.readFileSync('./routes/cs/cs.json')
const content = JSON.parse(data);
const bal = content.usecase.balance.heading;
const rew = content.usecase.rewards.heading;

const mongoose = require('mongoose');

const Tests = require("../../models/test.js")
const usecase = require("../../models/uc.js")
const archtitecure = require("../../models/how.js")

module.exports = (app) => {
  // console.log("CS")

  app.get('/api/cs/what', function (req, res){
    usecase.findOne({}, (error, what) => {
      res.send(what);
    });
  });
  
  app.get('/api/cs/how', function (req, res){
    // console.log(req.query.component)
    var component = req.query.component;
    var query = {};
    archtitecure.findOne({}, (error, how) => {
      res.send(how);
    });
  });
  
    

  app.get('/cs', function (req, res){

      res.render('product', 
        {
          product: "Charging System",
          heading: "This is Charging System",
          product_img: "../static/images/CSintro.png",
          what: "/cs/what",
          who: "/cs/who",
          how: "/cs/how", 
          back: "/cs",
          root: true
      })
  });

  app.get('/cs/what', function (req, res){
    
    usecase.findOne({}, (error, what) => {
      
    res.render('what', 
      {
        product: "Charging System",
        what: what,
        heading: what.balance.heading,
        desc: what.balance.description,
        bal: bal,
        rew: rew,
        product_img: "../static/images/portfolio-2.jpg",
        what: "/cs/what",
        who: "/cs/who",
        how: "/cs/how",
        back: "/cs"
      })
    });
  });

  
  app.get('/cs/who', function (req, res){
    
    //findOne pics first item in MongoDB array. Only this one is relevant
    usecase.findOne({}, (error, result) => {
    
     res.render('who', 
       {
         product: "Charging System",
         heading: "Who are we?",
         bal_heading: result.balance.heading,
         bal_desc: result.balance.description,
         result: result,
         img: content.usecase.balance.properties.img,
         product_img: "../static/images/portfolio-3.jpg",
         what: "/cs/what",
         who: "/cs/who",
         how: "/cs/how",
         back: "/cs"
     })
    })    
  });

    
  app.get('/cs/how', function (req, res){
    res.render('how', 
      {
        product: "Charging System",
        heading: "How does it work",
        product_img: "../static/images/portfolio-4.jpg",
        what: "/cs/what",
        who: "/cs/who",
        how: "/cs/how",
        back: "/cs"
    })
  });



};
