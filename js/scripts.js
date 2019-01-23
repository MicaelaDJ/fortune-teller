$(document).ready(function(){
  $("form#luck").submit(function(event){
    event.preventDefault();
    var luckAmount = 0;
    $("#work-responses").show();
    $("input:checkbox[name=luck]:checked").each(function(){
      luckAmount += parseInt($(this).val());
    });
    if (luckAmount >= 1) {
      $("#good-luck").show();
      $("#bad-luck").hide();
      $("#no-luck").hide();
    } else if (luckAmount <= -1) {
      $("#bad-luck").show();
      $("#good-luck").hide();
      $("#no-luck").hide();
    } else {
      $("#no-luck").show();
      $("#bad-luck").hide();
      $("#good-luck").hide();
    }
  });
});
