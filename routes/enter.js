
module.exports = (app) => {
    console.log("enter")
    app.get('/enter', function (req, res){
      res.render('enter', 
      {
        product: "Welcome to Ericsson Karlskrona",
        back: "/"
      })
    });

    app.get('/ka', function (req, res){
      res.render('ka', 
      {
        product: "This is Ericsson Karlskrona",
        img: "../static/images/site/building1.jpg",
        about: {url: "/about" },
        confrooms: { url: "/confrooms"},
        leadership: { url: "/leadership"},
        back: "/"
      })
    });
};
