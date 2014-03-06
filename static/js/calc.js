$(function() {
  var notLastOp = function() {
    var lastChar = $('#output').text().slice(-1);
    return ['+','-','*','/','%'].indexOf(lastChar) === -1;
  };

  $('#zero').click(function() {
    var outputText = $('#output').text() + '0';
    if (outputText === '00') {
      outputText = '0';
    }
    $('#output').text(outputText);
  });

  $('#one').click(function() {
    var outputText = $('#output').text() + '1';
    if (outputText === '01') {
      outputText = '1';
    }
    $('#output').text(outputText);
  });

  $('#two').click(function() {
    var outputText = $('#output').text() + '2';
    if (outputText === '02') {
      outputText = '2';
    }
    $('#output').text(outputText);
  });

  $('#three').click(function() {
    var outputText = $('#output').text() + '3';
    if (outputText === '03') {
      outputText = '3';
    }
    $('#output').text(outputText);
  });

  $('#four').click(function() {
    var outputText = $('#output').text() + '4';
    if (outputText === '04') {
      outputText = '4';
    }
    $('#output').text(outputText);
  });

  $('#five').click(function() {
    var outputText = $('#output').text() + '5';
    if (outputText === '05') {
      outputText = '5';
    }
    $('#output').text(outputText);
  });

  $('#six').click(function() {
    var outputText = $('#output').text() + '6';
    if (outputText === '06') {
      outputText = '6';
    }
    $('#output').text(outputText);
  });

  $('#seven').click(function() {
    var outputText = $('#output').text() + '7'
    if (outputText === '07') {
      outputText = '7';
    }
    $('#seven').text(outputText);
  });

  $('#eight').click(function() {
    var outputText = $('#output').text() + '8'
    if (outputText === '08') {
      outputText = '8';
    }
    $('eight').text(outputText);
  });

  $('#nine').click(function() {
    var outputText = $('#output').text() + '9'
    if (outputText === '09') {
      outputText = '9';
    }
    $('nine').text(outputText);
  });

  $('#add').click(function() {
    if (notLastOp()) {
      var outputText = $('#output').text() + '+';
      $('#output').text(outputText);
    }
  });

  $('#sub').click(function() {
    if (notLastOp()) {
      var outputText = $('#output').text() + '-';
      $('#output').text(outputText);
    }
  });

  $('#mul').click(function() {
    if (notLastOp()) {
      var outputText = $('#output').text() + 'x';
      $('#output').text(outputText);
    }
  });

  $('#div').click(function() {
    if (notLastOp()) {
      var outputText = $('#output').text() + '/';
      $('#output').text(outputText);
    }
  });

  $('#sqrt').click(function() {
    var outputText = $('#output').text();
    var outputNum = parseFloat(eval(outputText));
    var newNum = Math.sqrt(outputNum);
    $('#output').text(newNum);
  });

  $('#square').click(function() {
    var outputText = $('#output').text();
    var outputNum = parseFloat(eval(outputText));
    var newNum = (outputNum*outputNum);
    $('#output').text(newNum);
  });

  $('#equals').click(function() {
    var outputText = $('#output').text();
    var res = parseFloat(eval(outputText));
    var res = eval(outputText);
    $('#output').text(res);
  });

  $('#dot').click(function() {
    var outputText = $('#output').text();
    if (notLastOp() && outputText.indexOf('.') === -1) {
      $('#output').text(outputText + '.');
    }
  });

  $('#clear').click(function() {
    var outputText = $('#output').text().slice(0, -1);
    if (outputText === '') {
      outputText = '0';
    }
    $('#output').text(outputText);
  });

  $('#dance').click(function() {
    $('#calc_container').addClass('dance');
    setTimeout(function () {
      $('#calc_container').removeClass('dance');
    }, 2000);
  });
});

