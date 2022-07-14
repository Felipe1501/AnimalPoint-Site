var $simpleCarousel = document.querySelector(".js-carousel--simple");
let inputSearch = document.querySelector('#inputSearch');
let body = document.querySelector('body');
let textContainer = body.children[1].innerText.toLowerCase();
let arrayTextContainer = textContainer.split(" ");
let fieldQtWorkSearched = document.querySelector('.col-2')

inputSearch.addEventListener('input', () => {
  var searchClient = inputSearch.value
  let palavra = false
  arrayTextContainer.forEach(workSearched => {
    if (workSearched === searchClient) {
      let qtWorksearched = workSearched.length + 1;
      if (qtWorksearched > 1) {
        fieldQtWorkSearched.innerHTML = qtWorksearched
      }
      else {
        fieldQtWorkSearched.innerHTML = ''
      }
    }
  });
});

new Glider($simpleCarousel, {
  slidesToShow: 2,
  slidesToScroll: 2,
  draggable: true,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
});