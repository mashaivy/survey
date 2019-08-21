$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=transport-input]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>");
    });
    $("#transportation_survey").hide();
  });
});
