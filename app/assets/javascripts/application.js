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
      $(".mainContainer").append("<div id='id_"+portfolio.id+"' class='whichPortfolio'><a href='"+portfolio.projectUrl+"'><img class='portfolioImage' src='"+portfolio.imageUrl+"'></a></div>")
    })
  })
  $("#portfolioLink").on("click", function() {
    $(".mainContainer").css("left", "0px")
    $(".aboutContainer").css("left", "2000px")
    $(".selector2").css("border-top", "0px solid red")
    $(".selector1").css("border-top", "10px solid red")
  })

  $("#aboutLink").on("click", function() {
    $(".mainContainer").css("left", "-2000px")
    $(".aboutContainer").css("left", "8%")
    $(".selector1").css("border-top", "0px solid red")
    $(".selector2").css("border-top", "10px solid red")
  })
})
