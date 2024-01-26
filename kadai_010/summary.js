$(function (){
  
  $('#change-color').on('click', function() {
    $('#target').css('color','red');
  });

  $('#change-text').on('click', function() {
    $('#target').text('नमस्ते！');
  });

  $('#fade-out').on('click', function() {
    $('#target').fadeOut(1000);
  });

  $('#fade-in').on('click', function() {
    $('#target').fadeIn(1000);
  });

});