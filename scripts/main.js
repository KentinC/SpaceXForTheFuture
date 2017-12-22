//BUTTONS VARIABLES
const $homeBtn = document.querySelector('.homeBtn')
const $earthBtn = document.querySelector('.earthBtn')
const $moonBtn = document.querySelector('.moonBtn')
const $marsBtn = document.querySelector('.marsBtn')

const $sound = document.querySelector('.sound')

$sound.volume = 0.1
//
//GENERAL VARIABLES
//

//SOLAR SYSTEM CONTAINER 
const $solarSystem = document.querySelector('.solarSystem')
const $planets = $solarSystem.querySelector('.planets')

//BACKGROUND VARIABLES
const $backgroundSystem = $solarSystem.querySelector('.backgroundSystem')

//SUN VARIABLES
const $sun = $solarSystem.querySelector('.sun')
const $sunOn = $solarSystem.querySelector('.sunOn')
const $sunOff = $solarSystem.querySelector('.sunOff')

//EARTH VARIABLES
const $earthCircle = $solarSystem.querySelector('.earthCircle')
const $earth = $solarSystem.querySelector('.earth')
const $earthOn = $solarSystem.querySelector('.earthOn')
const $earthOff = $solarSystem.querySelector('.earthOff')

//MARS VARIABLES
const $marsCircle = $solarSystem.querySelector('.marsCircle')
const $mars = $solarSystem.querySelector('.mars')
const $marsOn = $solarSystem.querySelector('.marsOn')
const $marsOff = $solarSystem.querySelector('.marsOff')

//EARTH VARIABLES
const $earthBackground = $solarSystem.querySelector('.earthPart')
const $earthSection = $solarSystem.querySelector('.containEarth')
const $earthSectionOn = $solarSystem.querySelector('.earthSectionOn')
const $earthSectionOff = $solarSystem.querySelector('.earthSectionOff')

//MOON VARIABLES
const $moonBackground = $solarSystem.querySelector('.moonPart')
const $moonSection = $solarSystem.querySelector('.containMoon')
const $moonSectionOn = $solarSystem.querySelector('.moonSectionOn')
const $moonSectionOff = $solarSystem.querySelector('.moonSectionOff')

//MARS VARIABLES
const $marsBackground = $solarSystem.querySelector('.marsPart')
const $marsSection = $solarSystem.querySelector('.containMars')
const $marsSectionOn = $solarSystem.querySelector('.marsSectionOn')
const $marsSectionOff = $solarSystem.querySelector('.marsSectionOff')

//ROCKETS VARIABLES
const $earthRocket = $solarSystem.querySelector('.earthRocket')
const $moonRocket = $solarSystem.querySelector('.moonRocket')
const $marsRocket = $solarSystem.querySelector('.marsRocket')
const $rocketOn = $solarSystem.querySelector('.rocketOn')
const $rocketOff = $solarSystem.querySelector('.rocketOff')

const $earthRocketLaunched = $solarSystem.querySelector('.earthRocketLaunched')
const $moonRocketLaunched = $solarSystem.querySelector('.moonRocketLaunched')
const $marsRocketLaunched = $solarSystem.querySelector('.marsRocketLaunched')




//HOME BUTTON FUNCTION
$homeBtn.addEventListener('click', () => {

    $sun.classList.remove('sunOff')
    $sun.classList.add('sunOn')
    $sun.classList.remove('changeOpacity')

    $earth.classList.remove('earthOff')
    $earth.classList.add('earthOn')
    $earth.classList.remove('changeOpacity')

    $earthCircle.classList.remove('earthOff')
    $earthCircle.classList.add('earthOn')
    $earthCircle.classList.remove('changeOpacity')

    $earthBackground.classList.remove('earthOn')
    $earthBackground.classList.add('changeOpacity')

    $moonBackground.classList.remove('earthOn')
    $moonBackground.classList.add('changeOpacity')

    $marsBackground.classList.remove('earthOn')
    $marsBackground.classList.add('changeOpacity')

    $mars.classList.remove('marsOff')
    $mars.classList.add('marsOn')
    $mars.classList.remove('changeOpacity')

    $marsCircle.classList.remove('marsOff')
    $marsCircle.classList.add('marsOn')
    $marsCircle.classList.remove('changeOpacity')

    $earthRocket.classList.remove('earthSectionOn')
    $earthRocket.classList.add('earthSectionOff')
    $earthRocket.classList.add('changeOpacity')

    $moonRocket.classList.remove('earthSectionOn')
    $moonRocket.classList.add('earthSectionOff')
    $moonRocket.classList.add('changeOpacity')

    $marsRocket.classList.remove('earthSectionOn')
    $marsRocket.classList.add('earthSectionOff')
    $marsRocket.classList.add('changeOpacity')

    setTimeout(function () {
        $earthRocket.classList.add('changeOpacity')
        $earthRocket.classList.remove('earthRocketLaunched')

        $moonRocket.classList.add('changeOpacity')
        $moonRocket.classList.remove('moonRocketLaunched')

        $marsRocket.classList.add('changeOpacity')
        $marsRocket.classList.remove('marsRocketLaunched')
    }, 1000)

    if ($earthSection.style.opacity >= 0) {
        $earthSection.classList.remove('earthSectionOn')
        $earthSection.classList.add('earthSectionOff')
        $earthSection.classList.add('changeOpacity')

        $moonSection.classList.remove('moonSectionOn')
        $moonSection.classList.add('moonSectionOff')
        $moonSection.classList.add('changeOpacity')

        $marsSection.classList.remove('marsSectionOn')
        $marsSection.classList.add('marsSectionOff')
        $marsSection.classList.add('changeOpacity')

    }
})



//EARTH BUTTON FUNCTION
$earthBtn.addEventListener('click', () => {

    $sun.classList.remove('sunOn')
    $sun.classList.add('sunOff')
    $sun.classList.add('changeOpacity')

    $earth.classList.remove('earthOn')
    $earth.classList.add('earthOff')
    $earth.classList.add('changeOpacity')

    $earthCircle.classList.remove('earthOn')
    $earthCircle.classList.add('earthOff')
    $earthCircle.classList.add('changeOpacity')

    $earthBackground.classList.add('earthOn')
    $earthBackground.classList.remove('changeOpacity')

    $moonBackground.classList.remove('earthOn')
    $moonBackground.classList.add('changeOpacity')

    $marsBackground.classList.remove('earthOn')
    $marsBackground.classList.add('changeOpacity')

    $mars.classList.remove('marsOn')
    $mars.classList.add('marsOff')
    $mars.classList.add('changeOpacity')

    $marsCircle.classList.remove('marsOn')
    $marsCircle.classList.add('marsOff')
    $marsCircle.classList.add('changeOpacity')

    $moonRocket.classList.remove('earthSectionOn')
    $moonRocket.classList.add('earthSectionOff')
    $moonRocket.classList.add('changeOpacity')

    $marsRocket.classList.remove('earthSectionOn')
    $marsRocket.classList.add('earthSectionOff')
    $marsRocket.classList.add('changeOpacity')

    setTimeout(function () {
        $earthRocket.classList.remove('changeOpacity')
        $earthRocket.classList.add('earthRocketLaunched')
        $earthRocket.classList.add('eartchSectionOn')
        $earthRocket.classList.remove('eartchSectionOff')

        $moonRocket.classList.add('changeOpacity')
        $moonRocket.classList.remove('moonRocketLaunched')

        $marsRocket.classList.add('changeOpacity')
        $marsRocket.classList.remove('marsRocketLaunched')
    }, 1100)

    if ($earthSection.style.opacity <= 0) {
        $earthSection.classList.remove('earthSectionOff')
        $earthSection.classList.add('earthSectionOn')
        $earthSection.classList.remove('changeOpacity')

        $moonSection.classList.remove('moonSectionOn')
        $moonSection.classList.add('moonSectionOff')
        $moonSection.classList.add('changeOpacity')

        $marsSection.classList.remove('marsSectionOn')
        $marsSection.classList.add('marsSectionOff')
        $marsSection.classList.add('changeOpacity')
    }
})



//MOON BUTTON FUNCTION
$moonBtn.addEventListener('click', () => {

    $sun.classList.remove('sunOn')
    $sun.classList.add('sunOff')
    $sun.classList.add('changeOpacity')

    $earth.classList.remove('earthOn')
    $earth.classList.add('earthOff')
    $earth.classList.add('changeOpacity')

    $earthCircle.classList.remove('earthOn')
    $earthCircle.classList.add('earthOff')
    $earthCircle.classList.add('changeOpacity')

    $earthBackground.classList.remove('earthOn')
    $earthBackground.classList.add('changeOpacity')

    $moonBackground.classList.add('earthOn')
    $moonBackground.classList.remove('changeOpacity')

    $marsBackground.classList.remove('earthOn')
    $marsBackground.classList.add('changeOpacity')

    $mars.classList.remove('marsOn')
    $mars.classList.add('marsOff')
    $mars.classList.add('changeOpacity')

    $marsCircle.classList.remove('marsOn')
    $marsCircle.classList.add('marsOff')
    $marsCircle.classList.add('changeOpacity')

    $earthRocket.classList.remove('earthSectionOn')
    $earthRocket.classList.add('earthSectionOff')
    $earthRocket.classList.add('changeOpacity')

    $marsRocket.classList.remove('earthSectionOn')
    $marsRocket.classList.add('earthSectionOff')
    $marsRocket.classList.add('changeOpacity')

    setTimeout(function () {
        $moonRocket.classList.remove('changeOpacity')
        $moonRocket.classList.add('moonRocketLaunched')
        $moonRocket.classList.add('eartchSectionOn')
        $moonRocket.classList.remove('eartchSectionOff')
        $earthRocket.classList.add('changeOpacity')
        $earthRocket.classList.remove('earthRocketLaunched')

        $marsRocket.classList.add('changeOpacity')
        $marsRocket.classList.remove('marsRocketLaunched')
    }, 1100)


    if ($earthSection.style.opacity <= 0) {
        $earthSection.classList.remove('earthSectionOn')
        $earthSection.classList.add('earthSectionOff')
        $earthSection.classList.add('changeOpacity')

        $moonSection.classList.remove('moonSectionOff')
        $moonSection.classList.add('moonSectionOn')
        $moonSection.classList.remove('changeOpacity')

        $marsSection.classList.remove('marsSectionOn')
        $marsSection.classList.add('marsSectionOff')
        $marsSection.classList.add('changeOpacity')

    }
})



//MARS BUTTON FUNCTION
$marsBtn.addEventListener('click', () => {

    $sun.classList.remove('sunOn')
    $sun.classList.add('sunOff')
    $sun.classList.add('changeOpacity')

    $earth.classList.remove('earthOn')
    $earth.classList.add('earthOff')
    $earth.classList.add('changeOpacity')

    $earthCircle.classList.remove('earthOn')
    $earthCircle.classList.add('earthOff')
    $earthCircle.classList.add('changeOpacity')

    $earthBackground.classList.remove('earthOn')
    $earthBackground.classList.add('changeOpacity')

    $moonBackground.classList.remove('earthOn')
    $moonBackground.classList.add('changeOpacity')

    $marsBackground.classList.add('earthOn')
    $marsBackground.classList.remove('changeOpacity')

    $mars.classList.remove('marsOn')
    $mars.classList.add('marsOff')
    $mars.classList.add('changeOpacity')

    $marsCircle.classList.remove('marsOn')
    $marsCircle.classList.add('marsOff')
    $marsCircle.classList.add('changeOpacity')

    $earthRocket.classList.remove('earthSectionOn')
    $earthRocket.classList.add('earthSectionOff')
    $earthRocket.classList.add('changeOpacity')

    $moonRocket.classList.remove('earthSectionOn')
    $moonRocket.classList.add('earthSectionOff')
    $moonRocket.classList.add('changeOpacity')

    setTimeout(function () {
        $marsRocket.classList.remove('changeOpacity')
        $marsRocket.classList.add('marsRocketLaunched')
        $marsRocket.classList.add('eartchSectionOn')
        $marsRocket.classList.remove('eartchSectionOff')
        $earthRocket.classList.add('changeOpacity')
        $earthRocket.classList.remove('earthRocketLaunched')

        $moonRocket.classList.add('changeOpacity')
        $moonRocket.classList.remove('moonRocketLaunched')
    }, 1100)

    if ($marsSection.style.opacity <= 0) {
        $marsSection.classList.remove('marsSectionOff')
        $marsSection.classList.add('marsSectionOn')
        $marsSection.classList.remove('changeOpacity')

        $earthSection.classList.remove('earthSectionOn')
        $earthSection.classList.add('earthSectionOff')
        $earthSection.classList.add('changeOpacity')

        $moonSection.classList.remove('moonSectionOn')
        $moonSection.classList.add('moonSectionOff')
        $moonSection.classList.add('changeOpacity')
    }
})


// STARS PART


const $starCanvas = document.querySelector('.starCanvas'),
    context = $starCanvas.getContext('2d'),
    colours = ['grey', '#ececec', '#ecf0f1', 'whitesmoke'],
    particleArray = []


const initialize = function () {

    $starCanvas.width = window.innerWidth
    $starCanvas.height = window.innerHeight

    for (let i = 0, l = 100; i < l; i++) {
        const radius = Math.random() * 1.5
        particleArray.push({
            'radius': radius,
            'speed': Math.floor(Math.random() * 12) / 10,
            'x': Math.random() * $starCanvas.width,
            'y': Math.random() * $starCanvas.height,
            'colour': colours[parseInt(Math.random() * 4)],
            'blur': Math.random() * 10,
            'pulse': true,
            'threshold': (radius * 1.25)
        })
    }
    window.requestAnimationFrame(draw)
}

const generatePulseVariance = function (particle, canvas) {
    if (particle.pulse) {
        particle.radius += 0.01
        particle.pulse = (particle.radius <= particle.threshold)
    } else {
        if (particle.radius >= 1)
            particle.radius -= 0.1
        particle.pulse = (particle.radius <= 1)
    }

    if (particle.x < canvas.width)
        particle.x += particle.speed * 4 / 30
    else
        particle.x = 0


    return particle
}

const draw = function () {


    context.clearRect(0, 0, $starCanvas.width, $starCanvas.height)

    for (let i = 0, l = particleArray.length; i < l; i++) {
        let particle = particleArray[i]
        particle = generatePulseVariance(particle, $starCanvas)

        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, false)
        context.fillStyle = particle.colour
        context.shadowColor = particle.colour
        context.shadowBlur = particle.blur
        context.fill()
    }

    window.requestAnimationFrame(draw)
}


const coords = [{
    x: 0,
    y: 0
}]
const oldcoords = [{
    x: 0,
    y: 0
}]

document.addEventListener('mousemove', (e) => {

    oldcoords.x = coords.x
    oldcoords.y = coords.y
    coords.x = e.clientX
    coords.y = e.clientY
    if (coords.x < oldcoords.x && coords.y < oldcoords.y) {

        for (const particle of particleArray) {
            particle.x += particle.speed / 2
            particle.y += particle.speed / 2
        }

    } else if (coords.x < oldcoords.x && coords.y > oldcoords.y) {
        for (const particle of particleArray) {
            particle.x += particle.speed / 2
            particle.y -= particle.speed / 2
        }
    } else if (coords.x > oldcoords.x && coords.y > oldcoords.y) {
        for (const particle of particleArray) {
            particle.x -= particle.speed / 2
            particle.y -= particle.speed / 2
        }
    } else {
        for (const particle of particleArray) {
            particle.x -= particle.speed / 2
            particle.y += particle.speed / 2
        }
    }
})
initialize()


















// SET VARIABLES EARTH //

const containEarth = $planets.querySelector('.containEarth')
const textsSectionEarth = containEarth.querySelector('.texts-section-earth')

const missionSectionEarth = textsSectionEarth.querySelector('.mission-section-earth')
const displayDescriptionMissEarth = missionSectionEarth.querySelector('.display-description-earth')
const imgChevronMissEarth = displayDescriptionMissEarth.querySelector('.chevron-description-earth')
const descriptionMissionEarth = missionSectionEarth.querySelector('.description-earth')

const rocketSectionEarth = textsSectionEarth.querySelector('.rocket-section-earth')
const displayDescriptionRockEarth = rocketSectionEarth.querySelector('.display-description-earth')
const imgChevronRockEarth = displayDescriptionRockEarth.querySelector('.chevron-description-earth')
const descriptionRocketEarth = rocketSectionEarth.querySelector('.description-earth')

const datasSectionEarth = textsSectionEarth.querySelector('.datas-section-earth')
const displayDescriptionDatasEarth = datasSectionEarth.querySelector('.display-description-earth')
const imgChevronDatasEarth = displayDescriptionDatasEarth.querySelector('.chevron-description-earth')
const descriptionDatasEarth = datasSectionEarth.querySelector('.description-earth')

const actionsSectionEarth = containEarth.querySelector('.action-section')
const prevPlanetEarth = actionsSectionEarth.querySelector('.prev')
const nextPlanetEarth = actionsSectionEarth.querySelector('.next')


// TEXTS SECTIONS INTERACTIONS //


// display the description or no with interaction click on button "Chevron"


// missions sections
function isDisplayDescriptionMissEarth() {
    if (descriptionMissionEarth.classList.contains('displayNone')) {
        // display it
        descriptionMissionEarth.classList.remove('displayNone')
        descriptionMissionEarth.classList.add('displayYes')
        imgChevronMissEarth.src = 'images/earthChevron2.png'

    } else if (descriptionMissionEarth.classList.contains('displayYes')) {
        // remove display
        descriptionMissionEarth.classList.remove('displayYes')
        descriptionMissionEarth.classList.add('displayNone')
        imgChevronMissEarth.src = 'images/earthChevron.png'
    }
}

displayDescriptionMissEarth.addEventListener('click', isDisplayDescriptionMissEarth)


// rocket section
function isDisplayDescriptionRocketEarth() {
    if (descriptionRocketEarth.classList.contains('displayNone')) {
        // display it
        descriptionRocketEarth.classList.remove('displayNone')
        descriptionRocketEarth.classList.add('displayYes')
        imgChevronRockEarth.src = 'images/earthChevron2.png'

    } else if (descriptionRocketEarth.classList.contains('displayYes')) {
        // remove display
        descriptionRocketEarth.classList.remove('displayYes')
        descriptionRocketEarth.classList.add('displayNone')
        imgChevronRockEarth.src = 'images/earthChevron.png'
    }
}

displayDescriptionRockEarth.addEventListener('click', isDisplayDescriptionRocketEarth)


// datas sections
function isDisplayDescriptionDatasEarth() {
    if (descriptionDatasEarth.classList.contains('displayNone')) {
        // display it
        descriptionDatasEarth.classList.remove('displayNone')
        descriptionDatasEarth.classList.add('displayYes')
        imgChevronDatasEarth.src = 'images/earthChevron2.png'

    } else if (descriptionDatasEarth.classList.contains('displayYes')) {
        // remove display
        descriptionDatasEarth.classList.remove('displayYes')
        descriptionDatasEarth.classList.add('displayNone')
        imgChevronDatasEarth.src = 'images/earthChevron.png'
    }
}

displayDescriptionDatasEarth.addEventListener('click', isDisplayDescriptionDatasEarth)


// close other sections when user click on section who is close for open it

// mission section tab
function closeTab1() {
    // close rocket section
    descriptionRocketEarth.classList.remove('displayYes')
    descriptionRocketEarth.classList.add('displayNone')
    imgChevronRockEarth.src = 'images/earthChevron.png'
    //close datas sections
    descriptionDatasEarth.classList.remove('displayYes')
    descriptionDatasEarth.classList.add('displayNone')
    imgChevronDatasEarth.src = 'images/earthChevron.png'
}

displayDescriptionMissEarth.addEventListener('click', closeTab1)

// rocket section tab
function closeTab2() {
    // close missions section
    descriptionMissionEarth.classList.remove('displayYes')
    descriptionMissionEarth.classList.add('displayNone')
    imgChevronMissEarth.src = 'images/earthChevron.png'
    // close datas section
    descriptionDatasEarth.classList.remove('displayYes')
    descriptionDatasEarth.classList.add('displayNone')
    imgChevronDatasEarth.src = 'images/earthChevron.png'
}

displayDescriptionRockEarth.addEventListener('click', closeTab2)

// datas section tab
function closeTab3() {
    // close missions section
    descriptionMissionEarth.classList.remove('displayYes')
    descriptionMissionEarth.classList.add('displayNone')
    imgChevronMissEarth.src = 'images/earthChevron.png'
    // close rocket section
    descriptionRocketEarth.classList.remove('displayYes')
    descriptionRocketEarth.classList.add('displayNone')
    imgChevronRockEarth.src = 'images/earthChevron.png'
}

displayDescriptionDatasEarth.addEventListener('click', closeTab3)






// SET VARIABLES MOON //

const containMoon = $planets.querySelector('.containMoon')
const textsSectionMoon = containMoon.querySelector('.texts-section-moon')

const missionSectionMoon = textsSectionMoon.querySelector('.mission-section-moon')
const displayDescriptionMissMoon = missionSectionMoon.querySelector('.display-description-moon')
const imgChevronMissMoon = displayDescriptionMissMoon.querySelector('.chevron-description-moon')
const descriptionMissionMoon = missionSectionMoon.querySelector('.description-moon')

const rocketSectionMoon = textsSectionMoon.querySelector('.rocket-section-moon')
const displayDescriptionRockMoon = rocketSectionMoon.querySelector('.display-description-moon')
const imgChevronRockMoon = displayDescriptionRockMoon.querySelector('.chevron-description-moon')
const descriptionRocketMoon = rocketSectionMoon.querySelector('.description-moon')

const datasSectionMoon = textsSectionMoon.querySelector('.datas-section-moon')
const displayDescriptionDatasMoon = datasSectionMoon.querySelector('.display-description-moon')
const imgChevronDatasMoon = displayDescriptionDatasMoon.querySelector('.chevron-description-moon')
const descriptionDatasMoon = datasSectionMoon.querySelector('.description-moon')

const actionsSectionMoon = containMoon.querySelector('.action-section')
//const prevPlanetMoon = actionsSectionMoon.querySelector('.prev')
//const nextPlanetMoon = actionsSectionMoon.querySelector('.next')


// TEXTS SECTIONS INTERACTIONS //


// display the description or no with interaction click on button "Chevron"


// missions sections
function isDisplayDescriptionMissMoon() {
    if (descriptionMissionMoon.classList.contains('displayNone')) {
        // display it
        descriptionMissionMoon.classList.remove('displayNone')
        descriptionMissionMoon.classList.add('displayYes')
        imgChevronMissMoon.src = 'images/moonChevron2.png'

    } else if (descriptionMissionMoon.classList.contains('displayYes')) {
        // remove display
        descriptionMissionMoon.classList.remove('displayYes')
        descriptionMissionMoon.classList.add('displayNone')
        imgChevronMissMoon.src = 'images/moonChevron.png'
    }
}

displayDescriptionMissMoon.addEventListener('click', isDisplayDescriptionMissMoon)


// rocket section
function isDisplayDescriptionRocketMoon() {
    if (descriptionRocketMoon.classList.contains('displayNone')) {
        // display it
        descriptionRocketMoon.classList.remove('displayNone')
        descriptionRocketMoon.classList.add('displayYes')
        imgChevronRockMoon.src = 'images/moonChevron2.png'

    } else if (descriptionRocketMoon.classList.contains('displayYes')) {
        // remove display
        descriptionRocketMoon.classList.remove('displayYes')
        descriptionRocketMoon.classList.add('displayNone')
        imgChevronRockMoon.src = 'images/moonChevron.png'
    }
}

displayDescriptionRockMoon.addEventListener('click', isDisplayDescriptionRocketMoon)


// datas sections
function isDisplayDescriptionDatasMoon() {
    if (descriptionDatasMoon.classList.contains('displayNone')) {
        // display it
        descriptionDatasMoon.classList.remove('displayNone')
        descriptionDatasMoon.classList.add('displayYes')
        imgChevronDatasMoon.src = 'images/moonChevron2.png'

    } else if (descriptionDatasMoon.classList.contains('displayYes')) {
        // remove display
        descriptionDatasMoon.classList.remove('displayYes')
        descriptionDatasMoon.classList.add('displayNone')
        imgChevronDatasMoon.src = 'images/moonChevron.png'
    }
}

displayDescriptionDatasMoon.addEventListener('click', isDisplayDescriptionDatasMoon)


// close other sections when user click on section who is close for open it

// mission section tab
function closeTab1c() {
    // close rocket section
    descriptionRocketMoon.classList.remove('displayYes')
    descriptionRocketMoon.classList.add('displayNone')
    imgChevronRockMoon.src = 'images/moonChevron.png'
    //close datas sections
    descriptionDatasMoon.classList.remove('displayYes')
    descriptionDatasMoon.classList.add('displayNone')
    imgChevronDatasMoon.src = 'images/moonChevron.png'
}

displayDescriptionMissMoon.addEventListener('click', closeTab1c)

// rocket section tab
function closeTab2c() {
    // close missions section
    descriptionMissionMoon.classList.remove('displayYes')
    descriptionMissionMoon.classList.add('displayNone')
    imgChevronMissMoon.src = 'images/moonChevron.png'
    // close datas section
    descriptionDatasMoon.classList.remove('displayYes')
    descriptionDatasMoon.classList.add('displayNone')
    imgChevronDatasMoon.src = 'images/moonChevron.png'
}

displayDescriptionRockMoon.addEventListener('click', closeTab2c)

// datas section tab
function closeTab3c() {
    // close missions section
    descriptionMissionMoon.classList.remove('displayYes')
    descriptionMissionMoon.classList.add('displayNone')
    imgChevronMissMoon.src = 'images/moonChevron.png'
    // close rocket section
    descriptionRocketMoon.classList.remove('displayYes')
    descriptionRocketMoon.classList.add('displayNone')
    imgChevronRockMoon.src = 'images/moonChevron.png'
}

displayDescriptionDatasMoon.addEventListener('click', closeTab3c)


// SET VARIABLES MARS //

const containMars = $planets.querySelector('.containMars')
const textsSectionMars = containMars.querySelector('.texts-section-mars')

const missionSectionMars = textsSectionMars.querySelector('.mission-section-mars')
const displayDescriptionMissMars = missionSectionMars.querySelector('.display-description-mars')
const imgChevronMissMars = displayDescriptionMissMars.querySelector('.chevron-description-mars')
const descriptionMissionMars = missionSectionMars.querySelector('.description-mars')

const rocketSectionMars = textsSectionMars.querySelector('.rocket-section-mars')
const displayDescriptionRockMars = rocketSectionMars.querySelector('.display-description-mars')
const imgChevronRockMars = displayDescriptionRockMars.querySelector('.chevron-description-mars')
const descriptionRocketMars = rocketSectionMars.querySelector('.description-mars')

const datasSectionMars = textsSectionMars.querySelector('.datas-section-mars')
const displayDescriptionDatasMars = datasSectionMars.querySelector('.display-description-mars')
const imgChevronDatasMars = displayDescriptionDatasMars.querySelector('.chevron-description-mars')
const descriptionDatasMars = datasSectionMars.querySelector('.description-mars')

const actionsSectionMars = containMars.querySelector('.action-section')
const prevPlanetMars = actionsSectionMars.querySelector('.prev')
const nextPlanetMars = actionsSectionMars.querySelector('.next')


// TEXTS SECTIONS INTERACTIONS //


// display the description or no with interaction click on button "Chevron"


// missions sections
function isDisplayDescriptionMissMars() {
    if (descriptionMissionMars.classList.contains('displayNone')) {
        // display it
        descriptionMissionMars.classList.remove('displayNone')
        descriptionMissionMars.classList.add('displayYes')
        imgChevronMissMars.src = 'images/marsChevron2.png'

    } else if (descriptionMissionMars.classList.contains('displayYes')) {
        // remove display
        descriptionMissionMars.classList.remove('displayYes')
        descriptionMissionMars.classList.add('displayNone')
        imgChevronMissMars.src = 'images/marsChevron.png'
    }
}

displayDescriptionMissMars.addEventListener('click', isDisplayDescriptionMissMars)


// rocket section
function isDisplayDescriptionRocketMars() {
    if (descriptionRocketMars.classList.contains('displayNone')) {
        // display it
        descriptionRocketMars.classList.remove('displayNone')
        descriptionRocketMars.classList.add('displayYes')
        imgChevronRockMars.src = 'images/marsChevron2.png'

    } else if (descriptionRocketMars.classList.contains('displayYes')) {
        // remove display
        descriptionRocketMars.classList.remove('displayYes')
        descriptionRocketMars.classList.add('displayNone')
        imgChevronRockMars.src = 'images/marsChevron.png'
    }
}

displayDescriptionRockMars.addEventListener('click', isDisplayDescriptionRocketMars)


// datas sections
function isDisplayDescriptionDatasMars() {
    if (descriptionDatasMars.classList.contains('displayNone')) {
        // display it
        descriptionDatasMars.classList.remove('displayNone')
        descriptionDatasMars.classList.add('displayYes')
        imgChevronDatasMars.src = 'images/marsChevron2.png'

    } else if (descriptionDatasMars.classList.contains('displayYes')) {
        // remove display
        descriptionDatasMars.classList.remove('displayYes')
        descriptionDatasMars.classList.add('displayNone')
        imgChevronDatasMars.src = 'images/marsChevron.png'
    }
}

displayDescriptionDatasMars.addEventListener('click', isDisplayDescriptionDatasMars)


// close other sections when user click on section who is close for open it

// mission section tab
function closeTab1b() {
    // close rocket section
    descriptionRocketMars.classList.remove('displayYes')
    descriptionRocketMars.classList.add('displayNone')
    imgChevronRockMars.src = 'images/marsChevron.png'
    //close datas sections
    descriptionDatasMars.classList.remove('displayYes')
    descriptionDatasMars.classList.add('displayNone')
    imgChevronDatasMars.src = 'images/marsChevron.png'
}

displayDescriptionMissMars.addEventListener('click', closeTab1b)

// rocket section tab
function closeTab2b() {
    // close missions section
    descriptionMissionMars.classList.remove('displayYes')
    descriptionMissionMars.classList.add('displayNone')
    imgChevronMissMars.src = 'images/marsChevron.png'
    // close datas section
    descriptionDatasMars.classList.remove('displayYes')
    descriptionDatasMars.classList.add('displayNone')
    imgChevronDatasMars.src = 'images/marsChevron.png'
}

displayDescriptionRockMars.addEventListener('click', closeTab2b)

// datas section tab
function closeTab3b() {
    // close missions section
    descriptionMissionMars.classList.remove('displayYes')
    descriptionMissionMars.classList.add('displayNone')
    imgChevronMissMars.src = 'images/marsChevron.png'
    // close rocket section
    descriptionRocketMars.classList.remove('displayYes')
    descriptionRocketMars.classList.add('displayNone')
    imgChevronRockMars.src = 'images/marsChevron.png'
}

displayDescriptionDatasMars.addEventListener('click', closeTab3b)