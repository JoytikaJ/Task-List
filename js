$(document).ready(function() {

$("h2").text("- Task Manager -"); 

//add items to the list
$('form').submit(function () {
    //when a string is added to input field
    if ($('input').val() !== '') {
        var inputVal = $('input').val();
        $('#taskList').append('<li><input type="checkbox" class="task"/ >' + ' ' + inputVal + '</li>');      
    //if input field blank...
    };
    $('input').val('');
    return false;
});

//remove items from list
//checking item removes it
$(document).on('click', '.item', function (e) {
    //prevent bubbling
    e.preventDefault();
    $(this).parent().remove();
});

// get current time 
//want a click button for that or should time just be displayed on bottom of page?
//add current time
$('#time').text(startTime);
function startTime(){
  var date = new Date();
  var n = date.toDateString();
  var time = date.toLocaleTimeString();
  return ('Current time:' + '  ' + n + ' ' + time);
}

}); 
