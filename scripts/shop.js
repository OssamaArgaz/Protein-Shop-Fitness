
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

const responsiveMinValue = document.querySelector('.responsiveMin_value');
const responsiveMaxValue = document.querySelector('.responsiveMax_value');
const responsivePriceInpuMin = document.querySelector('.responsiveMin_input');
const responsivePriceInpuMax = document.querySelector('.responsiveMax_input');
const responsiveMinTooltip = document.querySelector('.responsiveMin_tooltipe');
const responsiveMaxTooltip = document.querySelector('.responsiveMax_tooltipe');
const responsiveMinGap = 0;
const responsiveRange = document.querySelector('.responsiveSlider_track');
const responsiveSliderMinValue = parseInt(responsiveMinValue.min);
const responsiveSliderMaxValue = parseInt(responsiveMaxValue.max);



function slideMin(){
    let gap = parseInt(maxValue.value) - parseInt(minValue.value);
    if(gap <= minGap){
        minValue.value = parseInt(maxValue.value) - minGap;
    }
    minTooltip.innerHTML = "$" + minValue.value;
    priceInpuMin.value = minValue.value;



    let responsivegap = parseInt(responsiveMaxValue.value) - parseInt(responsiveMinValue.value);
    if(responsivegap <= responsiveMinGap){
        responsiveMinValue.value = parseInt(responsiveMaxValue.value) - responsiveMinGap;
    }
    responsiveMinTooltip.innerHTML = "$" + responsiveMinValue.value;
    responsivePriceInpuMin.value = responsiveMinValue.value;



    setArea();
}


function slideMax(){
    let gap = parseInt(maxValue.value) - parseInt(minValue.value);
    if(gap <= minGap){
        maxValue.value = parseInt(minValue.value) + minGap;
    }
    maxTooltip.innerHTML = "$" + maxValue.value;
    priceInpuMax.value = maxValue.value;


    let responsiveGap = parseInt(responsiveMaxValue.value) - parseInt(responsiveMinValue.value);
    if(responsiveGap <= responsiveMinGap){
        responsiveMaxValue.value = parseInt(responsiveMinValue.value) + responsiveMinGap;
    }
    responsiveMaxTooltip.innerHTML = "$" + responsiveMaxValue.value;
    responsivePriceInpuMax.value = responsiveMaxValue.value;

    setArea();
}

function setArea(){
    responsiveRange.style.left = (responsiveMinValue.value / responsiveSliderMaxValue) * 100 + "%";
    responsiveMinTooltip.style.left = (responsiveMinValue.value / responsiveSliderMaxValue) * 100 + "%";
    responsiveRange.style.right = 100 - (responsiveMaxValue.value / responsiveSliderMaxValue) * 100 + "%";
    responsiveMaxTooltip.style.right = 100 - (responsiveMaxValue.value / responsiveSliderMaxValue) * 100 + "%";

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


    let responsiveMinPrice = parseInt(responsivePriceInpuMin.value);
    if(responsiveMinPrice < responsiveSliderMinValue){
        responsivePriceInpuMin.value = responsiveSliderMinValue;
    }
    responsiveMinValue.value = responsivePriceInpuMin.value;

    slideMin();
}

function setMaxInput(){
    let maxPrice = parseInt(priceInpuMax.value);
    if(maxPrice > sliderMaxValue){
        priceInpuMax.value = sliderMaxValue;
    }
    maxValue.value = priceInpuMax.value;

        
    let responsiveMaxPrice = parseInt(responsivePriceInpuMax.value);
    if(responsiveMaxPrice > responsiveSliderMaxValue){
        responsivePriceInpuMax.value = responsiveSliderMaxValue;
    }
    responsiveMaxValue.value = responsivePriceInpuMax.value;

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

