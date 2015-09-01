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
  $.getJSON("/portfolio")
  .done(function(response){
    console.log(response)
    response.forEach(function(portfolio){
      $(".mainContainer").append("<a href='"+portfolio.projectUrl+"'> <img class='portfolioImage' src='"+portfolio.imageUrl+"'></a>")
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