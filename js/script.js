
console.log('hello world');
 
$(document).ready(function (params) {

 $.ajax({
 url: "https://newsapi.org/v2/everything?q=Apple&from=2021-02-26&sortBy=popularity&apiKey=2139dc76ae1b4dcc88f56c7096715f69",
 type: "GET",
 dataType: "json",
 success: function (result , status) {
 console.log(result);
 for ( let i = 0; i < result.articles.length; i++){
 $("#latest-news").append(
 '<div class="col">'+
 '<div class="card m-2">'+
 '<img src=" '+ result.articles[i].urlToImage +'" class="card-img-top" alt="...">'+
 
 '<div class="card-body border-transparent bg-transparent">'+
 '<h5 class="card-title "> '+ result.articles[i].title +'</h5>'+
 '<p class="card-text ">'+ result.articles[i].description +'</p>'+
 '</div>'+
 '</div>'+
 '</div>'
 )
 }
 },



 
 error: function (xhr, status, error) {
 console.log(error);
 
 return;
 }
 })
 
});
 




$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

