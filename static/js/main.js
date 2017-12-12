"use strict";


jQuery(document).ready(function ($) {

	$(window).ready(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

    
    $(document).ready(function(){
        $('.carousel').carousel()
});
       
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (ev) {
        
        var id = ev.relatedTarget.id;
        console.log(id);
        switch (id) {
          case "1":
            console.log("Hej");
            $("#CS, #RM").toggleClass("carouselslidechange")
            $("#MCOM").removeClass("carouselslidechange")
            break;
          case "2":
            $("#EDA").toggleClass("carouselslidechange")
            $("#CS, #RM").removeClass("carouselslidechange")
            
            break;
          case "3":
          $("#MCOM").toggleClass("carouselslidechange")
          
          $("#EDA").removeClass("carouselslidechange")
            break;
          default:
            //the id is none of the above
        }
      })

    // function loadJSON(callback) {   
        
    //         var xobj = new XMLHttpRequest();
    //             xobj.overrideMimeType("application/json");
    //         xobj.open('GET', '../../routes/cs/what.json', true); // Replace 'my_data' with the path to your file
    //         xobj.onreadystatechange = function () {
    //               if (xobj.readyState == 4 && xobj.status == "200") {
    //                 // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
    //                 callback(xobj.responseText);
    //               }
    //         };
    //         xobj.send(null);  
    // }
   
    // function init() {
    //     loadJSON(function(response) {
    //      // Parse JSON string into object
    //        var actual_JSON = JSON.parse(response);
    //        console.log(response);
    //     });
    //    }

    // $.getJSON("../../routes/cs/what.json", function(json) {
    //     console.log(json); // this will show the info it in firebug console
    // });   
        
    
    //   $('a[data-modal]').click(function(event) {
    //     $(this).modal();
    //     return false;
    //   });


      /* Open when someone clicks on the span element */
    function openNav() {
    document.getElementById("myNav").style.width = "100%";
    }

/* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    }

    $("#ladda").on('click', function (e){
        e.preventDefault();
        console.log(content);
        // Write the callback function
        $("#about").html("hej");
    });    
    
      
    // $(".component").on('click', function (e){
    //     e.preventDefault();
    //     var request = new XMLHttpRequest();
    //     request.onreadystatechange = function() {
                
    //         if ((request.readyState===4) && (request.status===200))
    //         {
    //             var content = JSON.parse(request.responseText);
    //             $("#about").append("<p>" + content.about + "</p>" + "<p>" + content.properties.content + "</p>");
    //         }
    // };
    // request.open('GET', '../routes/cs/what.json');
    // // request.open('GET', 'http://mardby.se/AJK15G/simple_json.php');
    // request.send();
    // });

});

