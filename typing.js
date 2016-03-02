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
    document.getElementById("49").className = "letter";
    document.getElementById("50").className = "letter";
    document.getElementById("51").className = "letter";
    document.getElementById("52").className = "letter";
    document.getElementById("53").className = "letter";
    document.getElementById("54").className = "letter";
    document.getElementById("55").className = "letter";
    document.getElementById("56").className = "letter";
    document.getElementById("57").className = "letter";
    document.getElementById("48").className = "letter";
    document.getElementById("49").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-primary\">11%</p>";
    document.getElementById("50").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-primary\">22%</p>";
    document.getElementById("51").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-primary\">33%</p>";
    document.getElementById("52").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-primary\">44%</p>";
    document.getElementById("53").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-primary\">55%</p>";
    document.getElementById("54").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-primary\">66%</p>";
    document.getElementById("55").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-primary\">77%</p>";
    document.getElementById("56").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-primary\">88%</p>";
    document.getElementById("57").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-primary\">99%</p>";
    document.getElementById("48").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-primary\">0%</p>";
    document.getElementById("85").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-success\">pop</p>";
    document.getElementById("73").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-success\">fade</p>";
    document.getElementById("79").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-success\">strobe</p>";
    document.getElementById("74").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-warning\">pop</p>";
    document.getElementById("75").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-warning\">fade</p>";
    document.getElementById("76").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-warning\">strobe</p>";
    document.getElementById("77").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-danger\">pop</p>";
    document.getElementById("188").className = "letter";
    document.getElementById("188").innerHTML = "<p style=\"font-size:90%;margin-top:20%;\" class=\"text-danger\">fade</p>";
    document.getElementById("190").className = "letter";
    document.getElementById("190").innerHTML = "<p style=\"font-size:90%;margin-top:20%;\" class=\"text-danger\">strobe</p>";
    document.getElementById("87").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-success\">off</p>";
    document.getElementById("69").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-success\">dim</p>";
    document.getElementById("82").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-success\">bright</p>";
    document.getElementById("83").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-warning\">off</p>";
    document.getElementById("68").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-warning\">dim</p>";
    document.getElementById("70").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-warning\">bright</p>";
    document.getElementById("88").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-danger\">off</p>";
    document.getElementById("67").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-danger\">dim</p>";
    document.getElementById("86").innerHTML = "<p style=\"font-size:60%;margin-top:20%;\" class=\"text-danger\">bright</p>";
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
    document.getElementById("49").className = "double";
    document.getElementById("50").className = "double";
    document.getElementById("51").className = "double";
    document.getElementById("52").className = "double";
    document.getElementById("53").className = "double";
    document.getElementById("54").className = "double";
    document.getElementById("55").className = "double";
    document.getElementById("56").className = "double";
    document.getElementById("57").className = "double";
    document.getElementById("48").className = "double";
    document.getElementById("49").innerHTML = "<p>!</p><br><p class=\"number\">1</p>";
    document.getElementById("50").innerHTML = "<p>@</p><br><p class=\"number\">2</p>";
    document.getElementById("51").innerHTML = "<p>#</p><br><p class=\"number\">3</p>";
    document.getElementById("52").innerHTML = "<p>$</p><br><p class=\"number\">4</p>";
    document.getElementById("53").innerHTML = "<p>%</p><br><p class=\"number\">5</p>";
    document.getElementById("54").innerHTML = "<p>^</p><br><p class=\"number\">6</p>";
    document.getElementById("55").innerHTML = "<p>&</p><br><p class=\"number\">7</p>";
    document.getElementById("56").innerHTML = "<p>*</p><br><p class=\"number\">8</p>";
    document.getElementById("57").innerHTML = "<p>(</p><br><p class=\"number\">9</p>";
    document.getElementById("48").innerHTML = "<p>)</p><br><p class=\"number\">0</p>";
    document.getElementById("85").innerHTML = "U";
    document.getElementById("73").innerHTML = "I";
    document.getElementById("79").innerHTML = "O";
    document.getElementById("74").innerHTML = "J";
    document.getElementById("75").innerHTML = "K";
    document.getElementById("76").innerHTML = "L";
    document.getElementById("77").innerHTML = "M";
    document.getElementById("188").className = "double";
    document.getElementById("188").innerHTML = "<p><</p><br><p>,</p>";
    document.getElementById("190").className = "double";
    document.getElementById("190").innerHTML = "<p>></p><br><p>.</p>";
    document.getElementById("87").innerHTML = "W";
    document.getElementById("69").innerHTML = "E";
    document.getElementById("82").innerHTML = "R";
    document.getElementById("83").innerHTML = "S";
    document.getElementById("68").innerHTML = "D";
    document.getElementById("70").innerHTML = "F";
    document.getElementById("88").innerHTML = "X";
    document.getElementById("67").innerHTML = "C";
    document.getElementById("86").innerHTML = "V";
  }
  $('#'+code).css('background-color','#343434');
  $('#'+code).css('box-shadow','');
  return;
}
