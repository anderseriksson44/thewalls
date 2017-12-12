module.exports = (app) => {
  console.log("index")  
  app.get('/', function (req, res){

    res.render('index')
});

app.get('/test', function (req, res){
  
      res.render('test')
  });
};


