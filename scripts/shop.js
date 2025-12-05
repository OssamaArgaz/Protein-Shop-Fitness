
// START SCRIPT POUR TRI AVEC PRIX (RANGE PRICE)
window.onload = function (){
    slideMin();
    slideMax();
}

const minValue = document.querySelector('.min_value');
const maxValue = document.querySelector('.max_value');
const priceInpuMin = document.querySelector('.min_input');
const priceInpuMax = document.querySelector('.max_input');
const minTooltip = document.querySelector('.min_tooltipe');
const maxTooltip = document.querySelector('.max_tooltipe');
const minGap = 0;
const range = document.querySelector('.slider_track');
const sliderMinValue = parseInt(minValue.min);
const sliderMaxValue = parseInt(maxValue.max);



function slideMin(){
    let gap = parseInt(maxValue.value) - parseInt(minValue.value);

    if(gap <= minGap){
        minValue.value = parseInt(maxValue.value) - minGap;
    }

    minTooltip.innerHTML = "$" + minValue.value;
    priceInpuMin.value = minValue.value;

    setArea();
}


function slideMax(){
    let gap = parseInt(maxValue.value) - parseInt(minValue.value);

    if(gap <= minGap){
        maxValue.value = parseInt(minValue.value) + minGap;
    }

    maxTooltip.innerHTML = "$" + maxValue.value;
    priceInpuMax.value = maxValue.value;

    setArea();
}

function setArea(){
    range.style.left = (minValue.value / sliderMaxValue) * 100 + "%";
    minTooltip.style.left = (minValue.value / sliderMaxValue) * 100 + "%";
    range.style.right = 100 - (maxValue.value / sliderMaxValue) * 100 + "%";
    maxTooltip.style.right = 100 - (maxValue.value / sliderMaxValue) * 100 + "%";
}


function setMinInput(){
    let minPrice = parseInt(priceInpuMin.value);
    if(minPrice < sliderMinValue){
        priceInpuMin.value = sliderMinValue;
    }
    minValue.value = priceInpuMin.value;

    slideMin();
}

function setMaxInput(){
    let maxPrice = parseInt(priceInpuMax.value);
    if(maxPrice > sliderMaxValue){
        priceInpuMax.value = sliderMaxValue;
    }
    maxValue.value = priceInpuMax.value;

    slideMax();
}

// END SCRIPT POUR TRI AVEC PRIX (RANGE PRICE)





// START SCRIPT POUR PRODUCT CARD INFO (popover)

document.addEventListener('DOMContentLoaded', function() {
  var popoverElements = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

  popoverElements.map(function(popoverEl){
    return new bootstrap.Popover(popoverEl);
  });
});

// END SCRIPT POUR PRODUCT CARD INFO (popover)

