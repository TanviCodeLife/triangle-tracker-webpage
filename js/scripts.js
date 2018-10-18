//backend
var side1Input;
var side2Input;
var side3Input;

function choose(){
  var sum1 = side1Input + side2Input;
  var sum2 = side2Input + side3Input;
  var sum3 = side1Input + side3Input;
    if (sum1 < side3Input || sum2 < side1Input || sum3 < side2Input) {
      $("#notresult").show();
      $("#equiresult").hide();
      $("#isoresult").hide();
      $("#scaresult").hide();
      var notTri = true;
    }
        if(side1Input === side2Input && side1Input === side3Input && side2Input === side3Input) {
          $("#equiresult").show();
          $("#isoresult").hide();
          $("#scaresult").hide();
          $("#notresult").hide();
        }
        else if(side1Input === side2Input || side2Input === side3Input || side1Input === side3Input) {
          $("#isoresult").show();
          $("#equiresult").hide();
          $("#scaresult").hide();
          $("#notresult").hide();
        }
        else if(side1Input !== side2Input && side2Input !== side3Input && side1Input !== side3Input && !notTri) {
          $("#scaresult").show();
          $("#equiresult").hide();
          $("#isoresult").hide();
          $("#notresult").hide();
        }


    }




//front-end
$(document).ready(function() {
$("#detailsform").submit(function(event) {
  event.preventDefault();
  side1Input = parseInt($("select#side1").val());
  side2Input = parseInt($("select#side2").val());
  side3Input = parseInt($("select#side3").val());


  event.preventDefault();

  choose(side1Input, side2Input, side3Input);
  });
});
