var entryHeight = 36
var intermediateHeight = 42
var advancedHeight = 54

var checkHeight = function(heightInches){
  $(".entry, .intermediate, .advanced").removeClass("eligible, ineligible");

  if (heightInches >= advancedHeight){
    $(".entry, .intermediate, .advanced").addClass("eligible");
  }
  else if (heightInches >= intermediateHeight){
    $(".entry, .intermediate").addClass("eligible");
    $(".advanced").addClass("ineligible");
  }
  else if (heightInches >= entryHeight){
    $(".entry").addClass("eligible");
    $(".intermediate, .advanced").addClass("ineligible");
  }
  else{
    alert("You are not tall enough to visit our park, OR incorrect height input")
  }
}
// business logic up top





$(document).ready(function(){ // User Interface Logic

  $("button#height").click(function(){
    var passengerHeight = prompt("Enter your height in INCHES");
    checkHeight(passengerHeight);
  });
});
