$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 4000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});

$('.slider2').slick({
    arrows:true,
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed:800,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
});

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




function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#f5f5f5', 'black', controlSlider);
  if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
  } else {
      fromSlider.value = from;
  }
}
  
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#f5f5f5', 'black', controlSlider);
  setToggleAccessible(toInput);
  if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
  } else {
      toInput.value = from;
  }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
const [from, to] = getParsed(fromSlider, toSlider);
fillSlider(fromSlider, toSlider, '#f5f5f5', 'black', toSlider);
if (from > to) {
  fromSlider.value = to;
  fromInput.value = to;
} else {
  fromInput.value = from;
}
}

function controlToSlider(fromSlider, toSlider, toInput) {
const [from, to] = getParsed(fromSlider, toSlider);
fillSlider(fromSlider, toSlider, '#f5f5f5', 'black', toSlider);
setToggleAccessible(toSlider);
if (from <= to) {
  toSlider.value = to;
  toInput.value = to;
} else {
  toInput.value = from;
  toSlider.value = from;
}
}

function getParsed(currentFrom, currentTo) {
const from = parseInt(currentFrom.value, 10);
const to = parseInt(currentTo.value, 10);
return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max-to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
    ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
    ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
    ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
    ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
const toSlider = document.querySelector('#toSlider');
if (Number(currentTarget.value) <= 0 ) {
  toSlider.style.zIndex = 2;
} else {
  toSlider.style.zIndex = 0;
}
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#f5f5f5', 'black', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);






var products

var catitems = []


var cats = document.querySelectorAll('.name')
cats.forEach(element => {
  element.addEventListener('click',function(){
    catitems.push(element.innerHTML.toLocaleLowerCase())
    console.log(catitems);
    
    
    GetProducts()
  })
});




const GetProducts = function() {
  fetch('/json/product.json')
    .then((response) => response.json())
    .then((json) => {
      
      products = json
      console.log(products);

      function catcounts(){
        var champ = products.filter(x => x.category.includes("champagne")).length
        var half = products.filter(x => x.category.includes("half bottles")).length
        var redw = products.filter(x => x.category.includes("red wines")).length
        var rosew = products.filter(x => x.category.includes("rosé wines")).length
        var spark = products.filter(x => x.category.includes("sparkling")).length
        var wwine = products.filter(x => x.category.includes("white wines")).length
        document.querySelector('#champ span').innerHTML = champ
        document.querySelector('#half span').innerHTML = half
        document.querySelector('#redw span').innerHTML = redw
        document.querySelector('#rosew span').innerHTML = rosew
        document.querySelector('#spark span').innerHTML = spark
        document.querySelector('#wwine span').innerHTML = wwine
        console.log(champ);

      }
      catcounts()

      
      if (catitems.length != 0) {
        products = json.filter(x => x.category.includes(catitems[catitems.length-1]))
        cats.forEach(function(x){
          if(catitems[catitems.length-1] == x.innerHTML.toLowerCase()){
            x.classList.add('activecat')
          }else{
            x.classList.remove('activecat')
          }
        })
      }



      let html = ''
      products.map(element => {
        html+= `
        <div class="products">
                            
                            <div class="drink">
                                <div class="mininavs">
                                    <div class="bag">
                                        <i class="fa-solid fa-bag-shopping"></i>
                                    </div>
                                    <div class="heart">
                                        <i class="fa-regular fa-heart"></i>
                                    </div>
                                    <div class="search">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                                <div class="discount"><span>-10%</span></div>
                                <div class="hot"><span>Hot</span></div>
                                <img class="sec" src="${element.hoverImg}">
                                <img class="fst" src="${element.img}" alt="">
                            </div>
                            <div class="top">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <p>{<span>1</span> review)</p>
                            </div>
                            <a class="smltxt" href="#">${element.title}</a>
                            <div class="bottom"><p>$<span>${element.price}</span>.00</p></div>
                        </div>
        `
      });
      document.getElementById('prods').innerHTML = html;
      var items = $("#prods .products");
      var numItems = items.length;
      var perPage = 12;

      items.slice(perPage).hide();

      $('#pagination-container').pagination({
          items: numItems,
          itemsOnPage: perPage,
          prevText: "&laquo;",
          nextText: "&raquo;",
          onPageClick: function (pageNumber) {
              var showFrom = perPage * (pageNumber - 1);
              var showTo = showFrom + perPage;
              items.hide().slice(showFrom, showTo).show();
          }
      });
    })
    
}
GetProducts()










    