//Sidebar Collapse and Release

let toggler = document.querySelector('.menu');

console.log(toggler);

toggler.onclick= function(){
  console.log("HI");
  document.querySelector(".sidebar").classList.toggle('visible');
  document.querySelector(".sidebar").classList.toggle('hidden');
  document.querySelector(".hero-banner").classList.toggle('pushed');
  document.querySelector(".row-grid").classList.toggle('pushed');
  document.querySelector(".showcase").classList.toggle('pushed');
  document.querySelector(".sections").classList.toggle('pushed');
  document.querySelector(".footer").classList.toggle('pushed');
}


//Random Image in Cards

window.addEventListener('load', function() {
    var arr = [];
    var truth;
    var truth;
    while(arr.length < 6){
    var randomnumber=Math.ceil(Math.random()*6);
    if(arr.indexOf(randomnumber)<0)
    arr[arr.length]=randomnumber;
    var index= arr.indexOf(randomnumber);
    console.log(arr);
    console.log(index);
    for(var i=0; i<4;i++){
    document.querySelector(`.card-${i+1}`).style.background = "url(img/img_"+ arr[i] + ".jpg)";
    //document.querySelector(`.card-${i+1}`).style.background-repeat = "no-repeat";
  }}
});

//Smooth Scrolling
$(document).on('click', 'a', function(event){
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
  });
