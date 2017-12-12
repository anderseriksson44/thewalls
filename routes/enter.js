
module.exports = (app) => {
    console.log("enter")
    app.get('/enter', function (req, res){
      res.render('enter')
    });
  

};
