document.querySelector('.menuhamb i').addEventListener('click',function(){
  document.getElementById('sidenav').style.left = '0px'
})
document.querySelector('.upper i').addEventListener('click',function(){
  document.getElementById('sidenav').style.left = '-280px'
  document.querySelector('.menudd').style.left = '0px'
  document.querySelectorAll('.homepage').forEach(x => {x.style.left = '280px'})
  document.querySelectorAll('.shoppage').forEach(x => {x.style.left = '280px'})
  document.querySelectorAll('.productpage').forEach(x => {x.style.left = '280px'})
  document.querySelectorAll('.blogpage').forEach(x => {x.style.left = '280px'})
  document.querySelectorAll('.pagepage').forEach(x => {x.style.left = '280px'})

})
var NavOpener = function(e){
  // e.preventDefault();
  x = e.parentElement.getAttribute('id')
  document.querySelector('.menudd').style.left = '-280px'
  document.querySelector(`.${x}`).style.left = '0'
}
var NavCloser = function(e){
  // e.preventDefault();
  x = e.parentElement.parentElement.getAttribute('class')
  document.querySelector(`.${x}`).style.left = '280px'

  document.querySelector('.menudd').style.left = '0px'
}





$(window).scroll(function() {
    if ($("html,body").scrollTop() > 20) {
        $('#myBtn').fadeIn(400);
        $('#myBtn').css("bottom","70px")
    } else {
        $('#myBtn').fadeOut(400);
        $('#myBtn').css("bottom","10px")

    }
});

$("#myBtn").click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 300);
});



$('.slider3').slick({
    infinite: true,
    dots: false,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed:800,
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
});


const Tabs = function(x){
    let tab = x.getAttribute('data-tab')
    if(tab == 'tab1'){
        x.classList.add('activetabsbtn')
        x.nextElementSibling.classList.remove('activetabsbtn')
        document.getElementById("tab1").classList.add('activetab')
        document.getElementById("tab1").classList.remove('tabs')
        document.getElementById("tab2").classList.remove('activetab')
        document.getElementById("tab2").classList.add('tabs')
    }else if(tab == 'tab2'){
        x.classList.add('activetabsbtn')
        x.previousElementSibling.classList.remove('activetabsbtn')
        document.getElementById("tab2").classList.add('activetab')
        document.getElementById("tab2").classList.remove('tabs')
        document.getElementById("tab1").classList.remove('activetab')
        document.getElementById("tab1").classList.add('tabs')
    }
    console.log(tab);
}





function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    var x = offsetX/zoomer.offsetWidth*100
    var y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }




  $('.slider4').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    
  });
  

document.querySelectorAll('.slider4 img').forEach(x => {
    x.addEventListener('click',function(){
        document.querySelector('.zoom').style.backgroundImage = `url('${x.getAttribute('src')}')`
        document.querySelector('.zoom img').setAttribute('src',x.getAttribute('src'))
        document.querySelectorAll('.slider4 img').forEach(y => {
            y.classList.remove('activepic')
        })
        x.classList.add('activepic')
    })
})