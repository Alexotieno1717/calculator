// Business (or back-end) logic:
var add = function(number1, number2) {
  return number1 + number2;
};
//subtract number
var subtract = function(number1, number2) {
  return number1 - number2;
};
//multiply number
var multiply = function(number1, number2) {
  return number1 * number2;
};
//Divide
var divide = function(number1, number2) {
  return number1 / number2;
};


// User interface (or front-end) logic:

//Addition
$(function(){
  $('#add').submit(function(event){
    event.preventDefault();
    var number1 = parseInt($('#add1').val());
    var number2 = parseInt($('#add2').val());
    var result = add(number1, number2);
    $('#output').text(result);
  })
  
})

//Substraction
$(function(){
  $('#sub').submit(function(event){
    event.preventDefault();
    var number1 = parseInt($('#sub1').val());
    var number2 = parseInt($('#sub2').val());
    var result = subtract(number1, number2);
    $('#output2').text(result);
  })
})

//Divide
$(function(){
  $('#divide').submit(function(event){
    event.preventDefault();
    var number1 = parseInt($('#divide1').val());
    var number2 = parseInt($('#divide2').val());
    var result = divide(number1, number2);
    $('#output3').text(result);
  })
})

//Multiplication
$(function(){
  $('#mult').submit(function(){
    event.preventDefault();
    var number1 = parseInt($('#mult1').val());
    var number2 = parseInt($('#mult2').val());
    var result = multiply(number1, number2);
    $('#output4').text(result);
  })
})
