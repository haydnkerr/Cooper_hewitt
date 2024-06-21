let exploreBtn = document.querySelector('.explore-btn')
let introFooter = document.querySelectorAll('.intro-footer')
let homeFooter = document.querySelectorAll('.home-footer')
let introVideo = document.querySelector('.intro-video')
let cardBtn = document.querySelectorAll('.card-btn')
let cardContainer = document.querySelector('.card-container')
let gerryCard = document.querySelector('.gerry-card')
let climateCard = document.querySelector('.climate-card')
let introContainer = document.querySelector('.intro-container')
let mainHeading = document.querySelector('.main-heading')
let introInfoLeft = document.querySelector('.intro-info-left')
let leftInfo = document.querySelector('.left-info')
let climateEditable = document.querySelector('.climate-editable')
let climateInfoLeft = document.querySelector('.climate-info-left')
let climateWeightSlider = document.querySelector('.climate-weight-slider')
let climateSizeSlider = document.querySelector('.climate-size-slider')
let homeBtn = document.querySelector('.home-btn')


exploreBtn.addEventListener('click', function() {
    introVideo.classList.add('hidden')
    introContainer.classList.remove('hidden')

    for (let i = 0; i < introFooter.length; i++) {
        introFooter[i].classList.add('hidden')
        homeFooter[i].classList.remove('hidden')
    }
})

cardBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        cardContainer.classList.add('no-gap')
        introContainer.classList.add('new-grid')
        introInfoLeft.classList.add('expand')
        if (this.value == 'gerry') {
            gerryCard.classList.add('full-height');
            climateCard.classList.add('hidden');
            climateCard.classList.remove('full-height');
            gerryCard.classList.remove('hidden');
            mainHeading.innerHTML = "Ugly Gerry Typeface"
        } else {
            climateCard.classList.add('full-height');
            gerryCard.classList.add('hidden');
            gerryCard.classList.remove('full-height');
            climateCard.classList.remove('hidden');
            mainHeading.innerHTML = "Climate Crisis Typeface"
            climateInfoLeft.style.display = "flex"
        }
        leftInfo.classList.add('hidden')
    })
})

climateWeightSlider.addEventListener('input', function() {
    let val = climateWeightSlider.value
    climateEditable.style.fontVariationSettings = `"YEAR" ${val}`
})

climateSizeSlider.addEventListener('input', function() {
    let val = climateSizeSlider.value
    climateEditable.style.fontSize = `${val}px`
})

homeBtn.addEventListener('click', function() {
    climateCard.classList.remove('full-height');
    gerryCard.classList.remove('hidden');
    gerryCard.classList.remove('full-height');
    climateCard.classList.remove('hidden');
    cardContainer.classList.remove('no-gap')
    mainHeading.innerHTML = "Digital Collections Kiosk Interactive Title Text"
    introInfoLeft.classList.remove('expand')
    leftInfo.classList.remove('hidden')
    climateInfoLeft.style.display = "hidden"
})