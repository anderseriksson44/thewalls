module.exports = (app) => {
    console.log("EDA")
    app.get('/eda', function (req, res){
        res.render('product', 
        {
            product: "Ericsson Dynamic Activation",
            img: "../static/images/portfolio-2.jpg"
        })
    });
  
  };