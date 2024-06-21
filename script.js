let exploreBtn = document.querySelector('.explore-btn')
let introFooter = document.querySelectorAll('.intro-footer')
let homeFooter = document.querySelectorAll('.home-footer')
let introVideo = document.querySelector('.intro-video')
let initialInfoContainer = document.querySelectorAll('.initial-info-container')
let secondInfoContainer = document.querySelectorAll('.second-info-container')
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
let gerryControls = document.querySelector('.gerry-controls')
let climateControls = document.querySelector('.climate-controls')
let whiteFont = document.querySelector('.white-font')
let climateFontSize = document.querySelector('.climate-font-size')
let climateYearSize = document.querySelector('.climate-year-size')
let carouselControls = document.querySelector('.carousel-controls')
let climateRight = document.querySelector(".climate-right")
let redBtn = document.querySelector('.red-btn')
let climateImg = document.querySelector('.climate-img')
let gerryImg = document.querySelector('.gerry-img')
let keyboard = document.querySelector('.keyboard')
let gerryInfoLeft = document.querySelector('.gerry-info-left')
let gerryFontSizeSlider = document.querySelector('.gerry-size-slider')
let gerryFontSize = document.querySelector('.gerry-font-size')

climateRight.addEventListener('click', function() {
    climateImg.classList.add('hidden')
    redBtn.classList.remove('hidden')
})

redBtn.addEventListener('click', function() {
    let randomInt = Math.floor(Math.random() * 5)
    console.log(climateWeightSlider.min)
    climateWeightSlider.min = parseInt(climateWeightSlider.min) + randomInt;
    console.log(climateWeightSlider.min)
    climateWeightSlider.value = climateWeightSlider.min
    let val = climateWeightSlider.value
    climateEditable.style.fontVariationSettings = `"YEAR" ${val}`
    climateYearSize.innerHTML = climateWeightSlider.value
})


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
        for (let i = 0; i < initialInfoContainer.length; i++) {
            initialInfoContainer[i].classList.add('hidden')
            secondInfoContainer[i].classList.remove('hidden')
        }

        cardContainer.classList.add('no-gap')
        introContainer.classList.add('new-grid')
        introInfoLeft.classList.add('expand')
        if (this.value == 'gerry') {
            gerryInfoLeft.classList.remove('hidden')
            climateEditable.classList.add('hidden')
            gerryImg.classList.add('hidden')
            keyboard.classList.remove('hidden')
            gerryCard.classList.add('full-height');
            climateCard.classList.add('hidden');
            climateCard.classList.remove('full-height');
            gerryCard.classList.remove('hidden');
            // mainHeading.innerHTML = "Ugly Gerry Typeface"
            whiteFont.classList.remove('hidden')
            whiteFont.innerHTML = "Ugly Gerry Typeface"
            gerryControls.classList.remove('hidden')
            climateControls.classList.add('hidden')
        } else {
            gerryInfoLeft.classList.add('hidden')
            climateEditable.classList.remove('hidden')
            climateCard.classList.add('full-height');
            carouselControls.classList.remove('hidden')
            gerryCard.classList.add('hidden');
            gerryCard.classList.remove('full-height');
            climateCard.classList.remove('hidden');
            // mainHeading.innerHTML = "Climate Crisis Typeface"
            whiteFont.classList.remove('hidden')
            whiteFont.innerHTML = "Climate Crisis Typeface"
            climateInfoLeft.style.display = "flex"
            gerryControls.classList.add('hidden')
            climateControls.classList.remove('hidden')
        }
        climateInfoLeft.style.display = "flex"
        leftInfo.classList.add('hidden')
        mainHeading.classList.add("hidden")
    })
})

gerryFontSizeSlider.addEventListener('input', function() {
    let val = gerryFontSizeSlider.value
    gerryInfoLeft.style.fontSize = val + "px"
    gerryFontSize.innerHTML = gerryFontSizeSlider.value
})

climateWeightSlider.addEventListener('input', function() {
    let val = climateWeightSlider.value
    climateEditable.style.fontVariationSettings = `"YEAR" ${val}`
    climateYearSize.innerHTML = climateWeightSlider.value
})

climateSizeSlider.addEventListener('input', function() {
    let val = climateSizeSlider.value
    climateEditable.style.fontSize = `${val}px`
    climateFontSize.innerHTML = `${val}px`
})

homeBtn.addEventListener('click', function() {
    whiteFont.classList.add('hidden')
    mainHeading.classList.remove("hidden")
    climateCard.classList.remove('full-height');
    gerryCard.classList.remove('hidden');
    gerryCard.classList.remove('full-height');
    climateCard.classList.remove('hidden');
    cardContainer.classList.remove('no-gap')
    mainHeading.innerHTML = "Digital Collections Kiosk Interactive Title Text"
    introInfoLeft.classList.remove('expand')
    leftInfo.classList.remove('hidden')
    climateInfoLeft.style.display = "none"
    gerryImg.classList.remove('hidden')
    keyboard.classList.add('hidden')
    climateControls.classList.add('hidden')
    carouselControls.classList.add('hidden')
    climateImg.classList.remove('hidden')
    redBtn.classList.add('hidden')
    for (let i = 0; i < initialInfoContainer.length; i++) {
        initialInfoContainer[i].classList.remove('hidden')
        secondInfoContainer[i].classList.add('hidden')
    }
})