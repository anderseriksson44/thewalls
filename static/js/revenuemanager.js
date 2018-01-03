
"use strict";


jQuery(document).ready(function ($) {


    $('.sidebar-nav li a').on("click", function(){
        // $('li a').removeClass("active-link");
        $(this.li).addClass("active-link");
    });

    //Usecases - What it does


    $('#whatModal').on('show.bs.modal', function (event) {
        console.log("modal 1 triggered")
        var button = $(event.relatedTarget) // Button that triggered the modal
        console.log("button", button)
        var uc = button.data('whatever') // Extract info from data-* attributes
        console.log(uc)
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        $.ajax({
            type: "GET",
            url: "/api/rm/what", 
            dataType: 'json',
            success: function(result){
                // console.log("usecase", uc)
                var heading = result[uc].heading;
                var description = result[uc].description;
                // console.log(heading, description)
               
                var modal = $(this)
                modal.find('.modal-title').html(heading)
                modal.find('.modal-description').html(description)
                }.bind(this), 
            });
            // showNewinfo(uc)
        })
       

     
          // Roles
      

        
// -----------------------The Roles -----------------------------//
        //Open Sidebar and fetch data from the API and present
    
        $(".pic").on("click", function (event){
            var Myevent = $(event.relatedTarget)
            var clicked = $(this) // Button that triggered the modal
            var role = clicked.data('map') // Extract info from data-* attributes

            // console.log("Myeven", Myevent);
            console.log(clicked)
            $("#mySidenav").addClass("openside")
            $("#col2").addClass("menuhide")
            $(this.div).find(".role-btn").addClass("btn-primary")
            // $($this.pic).find("button").addClass("btn-primary");

                $.ajax({
                    type: "GET",
                    url: "/api/rm/who", 
                    dataType: 'json',
                    success: function(result){
                        var heading = result[role].heading;
                        var description = result[role].description;
                        var img = result[role].properties.img;
                        console.log(result)
                        console.log(img)
                        // console.log(heading, description)
                        // var img= "../static/images/rm/roles/peter.jpg"

                        // $(".mySidenav").html("<h1>" + heading + "</h1><p>" + description + "<p>");
                        $(".activeimg").attr("src", img)
                    
                        $(".sidebar-header").html(heading)
                        $(".sidebar-content").html(description)
                        
                    }  
                            
                })
        });
        
            // Close sidebar
        $("#mySidenav").on("click", function() {
            $(this).removeClass("openside")
            $(".RMarch g").find("rect").removeClass("highlight-comp");

            $("#col2").removeClass("menuhide")
            $(".RMarch").removeClass("RMarch_slided");
        });

// ---------------------------------------------------------------//
        

// -----------------------Architecture - How does it work -------------------------//

       
        $(".RMarch g").on("click", function() {
            $(".RMarch g").find("rect").removeClass("highlight-comp");
            $(this).find("rect").addClass("highlight-comp")
            
            var clicked = $(this) // Button that triggered the modal
            console.log(clicked)
            var component = clicked.data('name') // Extract info from data-* attributes


            // console.log("Myevent", Myevent);
            console.log("Component", component)
           $("#mySidenav").addClass("openside")
           $("#col2").addClass("menuhide")
           $(".RMarch").addClass("RMarch_slided");
           

            $.ajax({
                type: "GET",
                // url: "/api/cs/how?component="+$(this).data("component"), 
                url: "/api/rm/how", 
                dataType: 'json',
                success: function(result){
                    
                    var heading = result[component].heading;
                    var description = result[component].description;
                    console.log
                    $("#mySidenav h1").text(heading)
                    $("#mySidenav p").text(description)
                    
                    
                }
            });
            
        });
    

// --------------------------------------------------------------//





// -----------------------Where do you find us -------------------------//

$("#ps3, #ps4, #ps5").addClass("highlightfloor")
$(".building g").not(".highlightfloor").addClass("desaturate")

// $(".building g").not(".highlightfloor").find("polygon", "path").addClass("desaturate")
       

$(".building g").on("click", function(e) {
    var text = $(e.target)
    var component = $(this).attr("id");
    // console.log(text)
    console.log(component)

    var clicked = $(this) // Button that triggered the modal
    console.log(clicked)
    $("#floordropdown").addClass("opendropdown")

    // $("#"+component).attr('transform', 'translate(10 10) rotate(90)');
    
    // $("#floormodal").modal()
});

$(".dropdownbutton").on("click", function (){
    $("#floordropdown").removeClass("opendropdown");
    $("g path,polygon").removeClass("showroom");

});


$("#loggin").on("click", function() {
    $("#mySidenav").addClass("openside");
})


$(".floorschetch_L g").on("click", function(e) {
    var room = $(this).data("name");
    $("g path,polygon").removeClass("showroom")
    // $("g polygon").removeClass("showroom")
    
    $(this).find("path,polygon").addClass("showroom")
    
    console.log(room)
});



$(".modalsidebar-nav li a").on("click", function (){
    var room = $(this).attr("id");
    var att= $("g path,polygon").attr(room)
    console.log(att)
    $("g path,polygon").find(room).addClass("showroom");
    // console.log(room)
})




$(".floorbutton").click(function(){
    console.log("before if", $(this))
    if ($(this).attr("class") == "floorbutton" && "clicked" ) {
        $(this).addClass("clicked")
        $(this).text("Show RM floors")
        
        $(".building g").not(".highlightfloor").removeClass("desaturate")
        $(".building g.highlightfloor").removeClass("highlightfloor");


    } else {
        console.log("clicked")
        $("#ps3, #ps4, #ps5").addClass("highlightfloor")
        $(".building g").not(".highlightfloor").addClass("desaturate")
        $(this).removeClass("clicked")
        $(this).text("Show all floors")
    }

})


// -----------------------Architecture - How does it work -------------------------//




}); //End  Jquery

