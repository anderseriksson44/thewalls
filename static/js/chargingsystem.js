"use strict";


jQuery(document).ready(function ($) {

//Usecases - What it does

    // $("#rewards").click(function() {
    //      $.ajax({
    //          url: "/api/cs/what", 
    //          success: function(result){
    //              console.log(result.balance.description);
    //              var text= "jkasdhfkadjs"
    //              // TODO - RENDER MODAL
    //              $(text).appendTo("#whatmodal").modal({
    //                 fadeDuration: 200
    //             });
    //          }
    //      });
         
    //     });
 
    //  $("#ServiceCharging").click(function() {
    //      $("#whatmodal").modal({
    //          fadeDuration: 200
    //      });
    //    });



//Architecture - How does it work

       $("div.component").click(function(e) {
           var text = $(e.target).text()
           var component = $(this).attr("id");
           console.log(text)
           console.log(component)
            // if($("#customermanagement").data(!"clicked"))
        $.ajax({
            type: "GET",
            // url: "/api/cs/how?component="+$(this).data("component"), 
            url: "/api/cs/how", 
            dataType: 'json',
            success: function(result){
                
                var heading = result[component].heading;
                var description = result[component].description;
                
                
                $("#description").html("<h3>" + heading + "</h3><p>" + description + "<p>");
                
            }
            });
        });
});

