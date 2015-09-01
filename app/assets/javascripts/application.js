// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function() {
  var cw = $('.portfolioImage').width();
  $('.portfolioImage').css({'height':cw+'px'});
  $(".selector1").css("border-top", "10px solid red")
  $.getJSON("/portfolio")
  .then(function(response){
    console.log(response)
    response.forEach(function(portfolio){
      $(".mainContainer").append("<div id='id_"+portfolio.id+"' class='whichPortfolio'> <img class='portfolioImage' src='"+portfolio.imageUrl+"'></div>")
    })
  })
  .then(function(response){
    $(".whichPortfolio").on("click", function(){
      var temp = $(this).attr("id")
      temp = temp.split("_");
      var id = temp[1]
      console.log("clicked a portfolio with id: "+id)
      console.log(response)
      console.log("Look here: "+$(this).css("width"));
      // if($(this).css("width") != "240px"){
      //   $(this).css("width", "15em");
      //   $(this).css("height", "15em");
      // }
      // else{
      //   $(this).css("width", "20em");
      //   $(this).css("height", "20em");
      // }
    })
  })
  $("#portfolioLink").on("click", function() {
    $(".selector2").css("border-top", "0px solid red")
    $(".selector1").css("border-top", "10px solid red")
  })
  $("#aboutLink").on("click", function() {
    $(".selector1").css("border-top", "0px solid red")
    $(".selector2").css("border-top", "10px solid red")
  })
})
