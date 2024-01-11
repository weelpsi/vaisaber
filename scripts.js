


$(document).ready(function () {
    var audio = document.getElementById('track');
    audio.addEventListener('timeupdate', function () {
    
      var currentTime = Math.round(audio.currentTime);
       var durationTime = Math.round(audio.duration) - 2;


      if(currentTime >= durationTime){
        $('#showtime').addClass('act');
        
      }

    
    }, false);
});



var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();



var output =  ((''+day).length<2 ? '0' : '') + day  + '/'+
     ((''+month).length<2 ? '0' : '') + month + '/' +
    d.getFullYear() ;
$('.data').text(output);

window.addEventListener("load",function() {
    setTimeout(function(){
        // Hide the address bar:
        window.scrollTo(0, 1);
    }, 0);
});









  $(".aplayer-btn-play").click(function(){
    
  var idd = $(this).siblings('audio').attr('id')  ;
var audioplayer = document.getElementById(idd);


    if (audioplayer.paused) {
       audioplayer.play();
      $(this).parents('.aplayer').addClass('aplayer-playing');
    }   
    else {
       audioplayer.pause();
      $(this).parents('.aplayer').removeClass('aplayer-playing');
    }
    $(this).toggleClass('pause'); 

    
});


      setInterval(function()
	{	
    $(".aplayer.aplayer-playing audio").each(function(){ 
   var idd = $(this).attr('id')  ;
var audioplayer = document.getElementById(idd);
 
    var duration = audioplayer.duration ;
      var currentTime = audioplayer.currentTime ;
  // $('.duration').text(duration);
  //       $('.time').text(currentTime);

  if( currentTime == duration ){
   $(this).parents('.aplayer').removeClass('aplayer-playing');
    
    
  }
});

	}, 1000);
  