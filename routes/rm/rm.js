const fs = require('fs');
const data=fs.readFileSync('./routes/cs/cs.json')
const content = JSON.parse(data);
const bal = content.usecase.balance.heading;
const rew = content.usecase.rewards.heading;

const mongoose = require('mongoose');

const roles = require("../../models/revenuemanagerRoles.js")
const usecase = require("../../models/revenuemanagerUC.js")
const archtitecure = require("../../models/revenuemanagerArch.js")
const intros = require("../../models/revenuemanagerIntro.js")

module.exports = (app) => {
  console.log("CS")

  // app.get('/api/rm/', function (req, res){
  //   intros.findOne({}, (error,intro) => {
  //     res.send(intro);
  //   });
  // });
  
  // app.get('/api/rm/what', function (req, res){
  //   usecase.findOne({}, (error, what) => {
  //     res.send(what);
  //   });
  // });
  
  // app.get('/api/rm/how', function (req, res){
  //   console.log(req.query.component)
  //   var component = req.query.component;
  //   var query = {};
  //   archtitecure.findOne({}, (error, how) => {
  //     res.send(how);
  //   });
  // });
  
  // app.get('/api/rm/who', function (req, res){
  //   // console.log(req.query.component)
  //   var component = req.query.component;
  //   var query = {};
  //   roles.findOne({}, (error, role) => {
  //     res.send(role);
  //   });
  // });
    

  app.get('/rm', function (req, res){
    intros.findOne({}, (error,intro) => {
      res.render('product', 
      
        {
          product: intro.title,
          product_img: intro.image,
          heading: intro.heading,
          sub_text1: intro.sub_text1,
          sub_text2: intro.sub_text2,
          what: "/rm/what",
          who: "/rm/who",
          how: "/rm/how", 
          where: "/rm/where",
          back: "/rm",
          root: true
        });
      });
  });

  app.get('/rm/what', function (req, res){
    usecase.findOne({}, (error, result) => {
      res.render('rm/what_RM', 
      {
        product: "Revenue Manager",
        result: result,
        product_img: "../static/images/products/1A.jpg",
        header: "What it does",
        what: "/rm/what",
        who: "/rm/who",
        how: "/rm/how",
        where: "/rm/where",
        back: "/rm"
      })
    });
  });

  
  app.get('/rm/who', function (req, res){
    
    //findOne pics first item in MongoDB array. Only this one is relevant
    roles.findOne({}, (error, result) => {
      console.log(result)
      console.log(result.heading)
     res.render('rm/who_RM', 
       {
         product: "Revenue Manager",
         result: result,
         img: content.usecase.balance.properties.img,
         product_img: "../static/images/portfolio-3.jpg",
         header: "Who we are",
         what: "/rm/what",
         who: "/rm/who",
         how: "/rm/how",
         where: "/rm/where",
         back: "/rm"
     })
    })    
  });

    
  app.get('/rm/how', function (req, res){
    res.render('rm/how_RM', 
      {
        product: "Revenue Manager",
        product_img: "../static/images/portfolio-4.jpg",
        header: "How it works",
        what: "/rm/what",
        who: "/rm/who",
        how: "/rm/how",
        where: "/rm/where",
        back: "/rm"
    })
  });

  app.get('/rm/where', function (req, res){
    res.render('where_RM', 
      {
        product: "Revenue Manager",
        product_img: "../static/images/portfolio-4.jpg",
        header: "Where we sit",
        what: "/rm/what",
        who: "/rm/who",
        how: "/rm/how",
        where: "/rm/where",
        back: "/rm"
    })
  });


};
