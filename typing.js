$(function() {
    var keyboard = $('#keyboard');
    keyboard.css('height', keyboard.width()/(10.98)*4.52);

    var letter = $('.letter');
    var key = letter.width();
    letter.css('height', key);
    letter.css('font-size', key*.4);
    letter.css('border-radius',key*.1);
    letter.css('margin',key*.05);

    var left = $('.left');
    left.css('height', key);
    left.css('font-size', key*.5);
    left.css('border-radius',key*.1);
    left.css('margin',key*.05);


    var right = $('.right');
    right.css('height', key);
    right.css('font-size', key*.5);
    right.css('border-radius',key*.1);
    left.css('margin',key*.05);


    var double = $('.double');
    double.css('height', key);
    double.css('font-size', key*.25);
    double.css('border-radius',key*.1);
    double.css('margin',key*.05);


    var small = $('.small');
    small.css('height', key);
    small.css('font-size', key*.5);
    small.css('border-radius',key*.1);
    small.css('margin',key*.05);


    var middle = $('.middle');
    middle.css('height', key);
    middle.css('font-size', key*.3);
    middle.css('border-radius',key*.1);
    middle.css('margin',key*.05);


    var large = $('.large');
    large.css('height', key);
    large.css('font-size', key*.3);
    large.css('border-radius',key*.1);
    large.css('margin',key*.05);


    var command = $('.command');
    command.css('height', key);
    command.css('font-size', key*.5);
    command.css('border-radius',key*.1);
    command.css('margin',key*.05);


    var space = $('.space');
    space.css('height', key);
    space.css('font-size', key*.3);
    space.css('border-radius',key*.1);
    space.css('margin',key*.05);

    var mini = $('.mini');
    mini.css('font-size', key*.3);

});

$(document).ready(function () {
  $( "body").keydown(function(e){
    var press = e.which;
    keypress(press.toString());
  });
  $( "body").keyup(function(e){
    var up = e.which;
    keyup(up.toString());
  });
});

function keypress(code) {
  console.log(code);
  if(code=="16"||code=="18") {
    $('.'+code).css('background-color','#999999');
    return;
  }

/* BELOW ARE KEYBOARD CONTROLS DISPLAYED BY PRESSING TAB */

  if(code=="20") {
      // TODO replace with whatever scheme should be here when tab is pressed
  }
  $('#'+code).css('background-color','#999999');
  $('#'+code).css('box-shadow','0 0 4px #222 inset');
  return;
}

function keyup(code) {
  if(code=="16"||code=="18") {
    $('.'+code).css('background-color','#343434');
    return;
  }
  if(code=="20") {
    // TODO replace with original theme when tab is pressed
  }
  $('#'+code).css('background-color','#343434');
  $('#'+code).css('box-shadow','');
  return;
}
