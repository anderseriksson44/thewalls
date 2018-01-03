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
const floors = require("../../models/floors.js")
const location = require ("../../models/revenuemanagerLocation.js")

module.exports = (app) => {
  
  app.get('/rm', function (req, res){
    intros.findOne({}, (error,intro) => {
      res.render('product', 
      
        {
          product: intro.title,
          product_img: intro.image,
          heading: intro.heading,
          sub_text1: intro.sub_text1,
          sub_text2: intro.sub_text2,
          what: { url: "/rm/what" },
          who: { url: "/rm/who" },
          how: { url: "/rm/how" }, 
          where: { url: "/rm/where" },
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
        header: "The functionality",
        what: { url: "/rm/what", active: "active-link" },
        who: { url: "/rm/who" },
        how: { url: "/rm/how" },
        where: { url: "/rm/where" },
        back: "/rm"
      })
    });
  });

  
  app.get('/rm/who', function (req, res){
    
    //findOne pics first item in MongoDB array. Only this one is relevant
    roles.findOne({}, (error, result) => {
      res.render('rm/who_RM', 
       {
         product: "Revenue Manager",
         result: result,
         img: content.usecase.balance.properties.img,
         product_img: "../static/images/portfolio-3.jpg",
         header: "Our roles",
         what: { url:"/rm/what" },
         who: { url:"/rm/who", active: "active-link" },
         how: { url:"/rm/how"},
         where: { url:"/rm/where"},
         back: { url:"/rm" }
     })
    })    
  });

    
  app.get('/rm/how', function (req, res){
    res.render('rm/how_RM', 
      {
        product: "Revenue Manager",
        product_img: "../static/images/portfolio-4.jpg",
        header: "The architecture",
        what: { url: "/rm/what" },
        who: { url: "/rm/who" },
        how: { url: "/rm/how", active: "active-link" },
        where: { url:"/rm/where" },
        back: { url: "/rm" }
    })
  });

  app.get('/rm/where', function (req, res){
    location.find({}, (error, result) => {
      console.log(result)
      res.render('rm/where_RM', 
        {
          product: "Revenue Manager",
          result:result,
          product_img: "../static/images/portfolio-4.jpg",
          header: "Where you find us",
          what: { url: "/rm/what" },
          who: { url: "/rm/who" },
          how: { url: "/rm/how" },
          where: { url: "/rm/where", active: "active-link" },
          back: { url: "/rm" }
      })
    })
    
  });


};
