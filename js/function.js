// Assignment PWA Marcel 10374813
//Change for dropdown and seating
$(function chooseDay() {

  $('#chooseDay').on('change', function () {
    //console.log("Select has changed value",$(this).val());
    var changedValue = $(this).val();
    //console.log("Select has changed value to %s", changedValue);
    //Hide all dayItems
    $('.dayItem').hide();
    $('#seatingLayout').hide();
    $('#movieList').hide();
    //Build up an id and then use it to hide / show items	
    var dayId = '#' + changedValue; // eg # + mon
    $(dayId).show();
    var chosentext = $("#chooseDay :selected").text();
    //nice output //console.log("Chosen text is now %s", chosentext);
  });
  })
  
  
  
  
  
  //API = college-movies.herokuapp.com
     function ShowMovies(){
      //console.log("Inside show movies");
      var url = 'https://college-movies.herokuapp.com/';
        $.ajax({
          dataType: "json",
          url: url,
          success: function (result) { 
            //console.log("Inside ajax");
              var chooseDay = $('#chooseDay').val();
              var tmpResult = result.slice(1,10);
            //console.log(tmpResult);
            $('#ulMovieList').empty();
  
            //Building the output
            for(var i = 0; i < tmpResult.length; i++) {
                $('#ulMovieList').append("<li>" + 
                tmpResult[i]['title'] + 
                [' recordet in <i><b>'] +
                tmpResult[i]['year'] + 
                ['</i></b>'] +
                "</li>");
                //console.log( tmpResult[i]['runningTimes']);
                var ulString = "<ul>";
  
                for(var j = 0; j < tmpResult[i]['runningTimes'][chooseDay].length; j++) {
                ulString += "<li>" + tmpResult[i]['runningTimes'][chooseDay][j] + "</li>";
                }
                ulString += "</ul>";
                
                $('#ulMovieList').append(ulString);
  
            }
            //End of building the output
          }
        });
     }
         
      // Click button list movies
      $(function () {
        $('#chooseMovieOption').on('change', function () {    
          var chosentext = $("#chooseMovieOption :selected").text();
          //console.log("Chosen text is now %s", chosentext);
        });
  
        $('#listMovies').on("click", function () {
          //console.log($('#chooseDay').val());
          ShowMovies();
        $('#movieList').show();
        
        // Write a text for the button in console
        var buttonlayouttext = $("#chooselayouttext :selected").text();
        //console.log("Movie select button is selected", buttonlayouttext);
        });
        
    })
  
      
  
  