
"use strict";


jQuery(document).ready(function ($) {




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
      
   
   
   
   
    //  $('#whomodal').on('show.bs.modal', function (event) {
    //     $(".svgobj").animate({"margin-left": "50px"})
        
    //     var Myevent = $(event.relatedTarget)
    //     var button = $(this) // Button that triggered the modal
    //     var role = Myevent.data('map') // Extract info from data-* attributes
    //     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    //     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    //     console.log(role)
    //     $.ajax({
    //         type: "GET",
    //         url: "/api/rm/who", 
    //         dataType: 'json',
    //         success: function(result){
    //             var heading = result[role].heading;
    //             var description = result[role].description;
    //             console.log(heading, description)
    //             var modal = $(this)
    //             modal.find('.whomodal-title').text(heading)
    //             modal.find('.whomodal-body').text(description)
    //         }.bind(this)   
    //     });
        
    // });



    // $("#whomodal").on("hide.bs.modal", function(){
    //     $(".svgobj").animate({"margin-left": "620px"})
    // })

    // $("#image").on('click', function() {
    //     if ($(this).attr('data-click-state') == 1) {
    //         $(this).attr('data-click-state', 0)
    //         frontFlip();
    //     } else {
    //         $(this).attr('data-click-state', 1)
    //         backFlip();
    //     }
    //     });
    

    
    // function frontFlip() {
    //     $("#image")
    //     .css('transform', 'perspective(600px) rotateY(0deg)')
    //     $("#image")
    //     .css('transform', 'perspective(600px) rotateY(180deg)')
    // }
    
    // function backFlip() {
    //     $(".back")
    //     .css('transform', 'perspective(600px) rotateY(0)')
    //     $(".front")
    //     .css('transform', 'perspective(600px) rotateY(-180deg)')
    // }

        
        

        


        
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
            $("#col2").removeClass("menuhide")
            $(".RMarch").removeClass("RMarch_slided");
        });

// -----------------------The Roles -----------------------------//



        

// -----------------------Architecture - How does it work -------------------------//

       
        $(".RMarch g").on("click", function(e) {
            // var text = $(e.target)
            // var component = $(this).attr("id");
            // console.log(text)
            // console.log(component)

            var clicked = $(this) // Button that triggered the modal
            console.log(clicked)
            var component = clicked.data('name') // Extract info from data-* attributes

            // console.log("Myevent", Myevent);
            console.log("Component", component)
           $("#mySidenav").addClass("openside")
           $("#col2").addClass("menuhide")
           $(".RMarch").addClass("RMarch_slided");

            // if($("#customermanagement").data(!"clicked"))
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
    

// -----------------------Architecture - How does it work -------------------------//


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

});

$("#loggin").on("click", function() {
    $("#mySidenav").addClass("openside");
})

$("g").on("click", function(e) {
    var room = $(this).attr("id");
    console.log(room)
});



    // $(this).toggleClass("highlightfloor desaturate")
    // $(this).siblings().addClass("desaturate")
    // var component = clicked.data('name') // Extract info from data-* attributes

    // console.log("Myevent", Myevent);
    // console.log("Component", component)
//    $("#mySidenav").addClass("openside")
//    $("#col2").addClass("menuhide")
//    $(".RMarch").addClass("RMarch_slided");

    // if($("#customermanagement").data(!"clicked"))
    // $.ajax({
    //     type: "GET",
    //     // url: "/api/cs/how?component="+$(this).data("component"), 
    //     url: "/api/rm/how", 
    //     dataType: 'json',
    //     success: function(result){
            
    //         var heading = result[component].heading;
    //         var description = result[component].description;
    //         console.log
    //         $("#mySidenav h1").text(heading)
    //         $("#mySidenav p").text(description)
            
    //     }
    // });
// });


// -----------------------Architecture - How does it work -------------------------//




}); //End  Jquery

