module.exports = (app) => {
    console.log("Mcom")
    app.get('/mcom', function (req, res){
        res.render('product', {product: "M-Commerce"})
    });
  
  };