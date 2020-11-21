console.log('this works');



// Hamburger
const hamburger = document.getElementById('open');
            
// close button
const cross = document.getElementById('close');


function toggleClose() {
    hamburger.classList.remove('open');
    hamburger.classList.add('hide');
    cross.classList.add('open');
}

function toggleOpen() {
    cross.classList.remove('open');
    cross.classList.add('hide');
    hamburger.classList.add('open');
}


hamburger.addEventListener('click', toggleClose);
cross.addEventListener('click', toggleOpen);





$('nav .button').click(function(){
  $('nav .button span').toggleClass("rotate");
});

  $('nav ul li .first').click(function(){
    $('nav ul li .first span').toggleClass("rotate");
  });

  $('nav ul li .second').click(function(){
    $('nav ul li .second span').toggleClass("rotate");
  });

  $('nav ul li .third').click(function(){
    $('nav ul li .third span').toggleClass("rotate");
  });

  $('nav ul li .fourth').click(function(){
    $('nav ul li .fourth span').toggleClass("rotate");
  });

  $('nav ul li .fifth').click(function(){
    $('nav ul li .fifth span').toggleClass("rotate");
  });

  $('nav ul li .sixth').click(function(){
    $('nav ul li .sixth span').toggleClass("rotate");
  });