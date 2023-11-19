let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
})

const styles = getComputedStyle(document.documentElement)

const primaryColor = styles.getPropertyValue('--color-primary')
const secondaryColor = styles.getPropertyValue('--color-secondary')
const opacityPrimaryColor = primaryColor + '40'

document.documentElement.style.setProperty('--color-opacity', opacityPrimaryColor)

// анимация на стартовом экране "Практика"
animatePractice(primaryColor, secondaryColor)
function animatePractice(pc, sc, oc = opacityPrimaryColor) {
    const wrapper = document.querySelector('.practice-start__img')
    if (!wrapper) return

    const { round } = Math

    // 
    const columnPercent = ((157 / 479) * 100).toFixed(1)
    const longColumnPercent = ((253 / 479) * 100).toFixed(1)

    const firstSecondRowPercent = ((202 / 534) * 100).toFixed(1)
    const halfSecondRowPercent = ((167 / 534) * 100).toFixed(1)
    const thirdRowPercent = ((122 / 534) * 100).toFixed(1)
    // 

    const wrapperHeight = wrapper.clientHeight
    const wrapperWidth = wrapper.clientWidth

    // 
    const columnSize = round(wrapperWidth * (columnPercent / 100))
    const longColumnSize = round(wrapperWidth * (longColumnPercent / 100))

    const firstSecondRowSize = round(wrapperHeight * (firstSecondRowPercent / 100))
    const halfSecondRowSize = round(wrapperHeight * (halfSecondRowPercent / 100))
    const thirdRowSize = round(wrapperHeight * (thirdRowPercent / 100))
    // 

    // 
    const gapSize = 4
    const secondRowInfelicity = firstSecondRowSize - halfSecondRowSize
    const lastElInfelicityX = (2 * firstSecondRowSize + gapSize) - (2 * columnSize + gapSize)
    const lastElInfelicityY = columnSize - halfSecondRowSize
    // 

    const getKeyframes = () => {
        const keyFrames2 = `
            @keyframes keyFrames2 {
                from {
                    width: ${columnSize}px;
                    height: ${thirdRowSize}px;
                    background-color: ${pc};
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize / 2 - thirdRowSize / 2}px);
                }
                
                20% {
                    height: ${firstSecondRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize + gapSize}px);
                }

                100% {
                    height: ${firstSecondRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize + gapSize}px);
                }
            }`
        const keyFrames3 = `
            @keyframes keyFrames3 {
                from {
                    width: ${columnSize}px;
                    height: ${thirdRowSize}px;
                    background-color: ${oc};
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize / 2 - thirdRowSize / 2}px);
                }
                
                20% {
                    height: ${halfSecondRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize + gapSize + secondRowInfelicity}px);
                }

                40% {
                    width: ${columnSize}px;
                    transform: translate(${columnSize + gapSize}px, ${firstSecondRowSize + gapSize + secondRowInfelicity}px);
                }

                60% {
                    width: ${2 * columnSize + gapSize}px;
                    transform: translate(0, ${firstSecondRowSize + gapSize + secondRowInfelicity}px);
                }

                100% {
                    width: ${2 * columnSize + gapSize}px;
                    height: ${halfSecondRowSize}px;
                    transform: translate(0, ${firstSecondRowSize + gapSize + secondRowInfelicity}px);
                }
            }`
        const keyFrames4 = `
            @keyframes keyFrames4 {
                from {
                    width: ${columnSize}px;
                    height: ${thirdRowSize}px;
                    background-color: ${oc};
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize / 2 - thirdRowSize / 2}px);
                }
                
                20% {
                    height: ${halfSecondRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize + gapSize + secondRowInfelicity}px);
                }

                40% {
                    width: ${columnSize}px;
                    transform: translate(${columnSize + gapSize}px, ${firstSecondRowSize + gapSize + secondRowInfelicity}px);
                    z-index: 4;
                }

                60% {
                    width: ${2 * columnSize + gapSize}px;
                    transform: translate(0, ${firstSecondRowSize + gapSize + secondRowInfelicity}px);
                    z-index: 7;
                }

                80% {
                    width: ${2 * columnSize + gapSize}px;
                    height: ${halfSecondRowSize}px;
                    border-radius: 100px;
                    transform-origin: right bottom;
                    transform: translate(0, ${firstSecondRowSize + gapSize + secondRowInfelicity}px);
                }

                100% {
                    width: ${2 * firstSecondRowSize + gapSize}px;
                    height: ${columnSize}px;
                    border-radius:  120px 160px 120px 200px;
                    transform-origin: right bottom;
                    transform: translate(-${lastElInfelicityX + columnSize}px, ${firstSecondRowSize + gapSize + secondRowInfelicity - lastElInfelicityY}px) rotate(90deg);
                    z-index: 7;
                }
            }`
        const keyFrames5 = `
            @keyframes keyFrames5 {
                from {
                    width: ${columnSize}px;
                    height: ${thirdRowSize}px;
                    background-color: ${sc};
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize / 2 - thirdRowSize / 2}px);
                }
                
                20% {
                    height: ${firstSecondRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize + gapSize}px);
                }

                40% {
                    height: ${thirdRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${2 * (firstSecondRowSize + gapSize)}px);
                }

                60% {
                    transform: translate(${columnSize + gapSize}px, ${2 * (firstSecondRowSize + gapSize)}px);
                }

                80% {
                    width: ${columnSize}px;
                    transform: translate(0, ${2 * (firstSecondRowSize + gapSize)}px);
                }

                100% {
                    width: ${longColumnSize}px;
                    height: ${thirdRowSize}px;
                    transform: translate(-${longColumnSize - columnSize}px, ${2 * (firstSecondRowSize + gapSize)}px);
                }
            }`
        const keyFrames6 = `
            @keyframes keyFrames6 {
                from {
                    width: ${columnSize}px;
                    height: ${thirdRowSize}px;
                    background-color: ${pc};
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize / 2 - thirdRowSize / 2}px);
                }
                
                20% {
                    height: ${firstSecondRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize + gapSize}px);
                }

                40% {
                    height: ${thirdRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${2 * (firstSecondRowSize + gapSize)}px);
                }

                60% {
                    transform: translate(${columnSize + gapSize}px, ${2 * (firstSecondRowSize + gapSize)}px);
                }

                100% {
                    height: ${thirdRowSize}px;
                    transform: translate(${columnSize + gapSize}px, ${2 * (firstSecondRowSize + gapSize)}px);
                }
            }`
        const keyFrames7 = `
            @keyframes keyFrames7 {
                from {
                    width: ${columnSize}px;
                    height: ${thirdRowSize}px;
                    background-color: ${oc};
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize / 2 - thirdRowSize / 2}px);
                }
                
                20% {
                    height: ${firstSecondRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize + gapSize}px);
                }

                40% {
                    height: ${thirdRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${2 * (firstSecondRowSize + gapSize)}px);
                }

                100% {
                    height: ${thirdRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${2 * (firstSecondRowSize + gapSize)}px);
                }
            }`
        return keyFrames2 + keyFrames3 + keyFrames4 + keyFrames5 + keyFrames6 + keyFrames7
    }

    const constructWrapper = () => {
        const divs = []

        for (let i = 0; i <= 6; i++) {
            const div = document.createElement('div')
            wrapper.append(div)
        }

        wrapper.querySelectorAll('div').forEach((div, idx) => divs[idx] = div)

        const head = document.querySelector('head')
        const style = document.createElement('style')

        const keyframes = getKeyframes()

        style.innerHTML = keyframes
        head.append(style)

        divs[1].style.animation = 'keyFrames2 3.5s ease-in-out 0s forwards'
        divs[2].style.animation = 'keyFrames3 3.5s ease-in-out 0s forwards'
        divs[3].style.animation = 'keyFrames4 3.5s ease-in-out 0s forwards'
        divs[4].style.animation = 'keyFrames5 3.5s ease-in-out 0s forwards'
        divs[5].style.animation = 'keyFrames6 3.5s ease-in-out 0s forwards'
        divs[6].style.animation = 'keyFrames7 3.5s ease-in-out 0s forwards'

        $(divs[0]).css({
            width: 2 * columnSize + gapSize + 'px',
            height: firstSecondRowSize + 'px',
            backgroundColor: sc,
            transform: `translateX(${columnSize + gapSize}px)`
        })

        $(divs[1]).css({
            width: columnSize + 'px',
            height: thirdRowSize + 'px',
            backgroundColor: pc,
            transform: `translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize / 2 - thirdRowSize / 2}px)`
        })

        $(divs[2]).css({
            width: columnSize + 'px',
            height: thirdRowSize + 'px',
            backgroundColor: oc,
            transform: `translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize / 2 - thirdRowSize / 2}px)`
        })

        $(divs[3]).css({
            width: columnSize + 'px',
            height: thirdRowSize + 'px',
            backgroundColor: oc,
            transform: `translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize / 2 - thirdRowSize / 2}px)`
        })

        $(divs[4]).css({
            width: columnSize + 'px',
            height: thirdRowSize + 'px',
            backgroundColor: sc,
            transform: `translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize / 2 - thirdRowSize / 2}px)`
        })

        $(divs[5]).css({
            width: columnSize + 'px',
            height: thirdRowSize + 'px',
            backgroundColor: pc,
            transform: `translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize / 2 - thirdRowSize / 2}px)`
        })

        $(divs[6]).css({
            width: columnSize + 'px',
            height: thirdRowSize + 'px',
            backgroundColor: oc,
            transform: `translate(${2 * (columnSize + gapSize)}px, ${firstSecondRowSize / 2 - thirdRowSize / 2}px)`
        })
    }

    constructWrapper()
}

// анимация на стартовом экране "Банкротство"
animateBfl(primaryColor, secondaryColor)
function animateBfl(pc, sc, oc = opacityPrimaryColor) {
    const wrapper = document.querySelector('.bfl-start__img') || document.querySelector('.form-start__img')
    if (!wrapper) return

    const { round } = Math

    // 
    const firstSecondColumnPercent = ((202 / 536) * 100).toFixed(1)
    const halfSecondColumnPercent = ((167 / 536) * 100).toFixed(1)
    const thirdColumnPercent = ((122 / 536) * 100).toFixed(1)

    const firstSecondRowPercent = ((157 / 577) * 100).toFixed(1)
    const longSecondRowPercent = ((318 / 577) * 100).toFixed(1)
    const thirdRowPercent = ((126 / 577) * 100).toFixed(1)
    const longThirdRowPercent = ((253 / 577) * 100).toFixed(1)
    // 

    const wrapperHeight = wrapper.clientHeight
    const wrapperWidth = wrapper.clientWidth

    // высота/ширина элементов в пикселях
    const firstSecondColumnSize = round(wrapperWidth * (firstSecondColumnPercent / 100))
    const halfSecondColumnSize = round(wrapperWidth * (halfSecondColumnPercent / 100))
    const thirdColumnSize = round(wrapperWidth * (thirdColumnPercent / 100))

    const firstSecondRowSize = round(wrapperHeight * (firstSecondRowPercent / 100))
    const longSecondRowSize = round(wrapperHeight * (longSecondRowPercent / 100))
    const thirdRowSize = round(wrapperHeight * (thirdRowPercent / 100))
    const longThirdRowSize = round(wrapperHeight * (longThirdRowPercent / 100))
    // 

    // 
    const gapSize = 4
    const secondColumnInfelicity = firstSecondColumnSize - halfSecondColumnSize
    const lastElInfelicity = firstSecondColumnSize - firstSecondRowSize
    // 

    const getKeyframes = () => {
        const keyFrames2 = `
            @keyframes keyFrames2 {
                from {
                    width: ${thirdColumnSize}px;
                    transform: translateX(${2 * (firstSecondColumnSize + gapSize)}px);
                }
                
                20% {
                    width: ${firstSecondColumnSize}px;
                    transform: translateX(${firstSecondColumnSize + gapSize}px);
                }

                100% {
                    width: ${firstSecondColumnSize}px;
                    transform: translateX(${firstSecondColumnSize + gapSize}px);
                }
            }`
        const keyFrames3 = `
            @keyframes keyFrames3 {
                from {
                    width: ${thirdColumnSize}px;
                    transform: translate(${2 * (firstSecondColumnSize + gapSize)}px, 0);
                }
                
                20% {
                    width: ${thirdColumnSize}px;
                    transform: translate(${2 * (firstSecondColumnSize + gapSize)}px, ${firstSecondRowSize + gapSize}px);
                }

                100% {
                    width: ${thirdColumnSize}px;
                    transform: translate(${2 * (firstSecondColumnSize + gapSize)}px, ${firstSecondRowSize + gapSize}px);
                }
            }`
        const keyFrames4 = `
            @keyframes keyFrames4 {
                from {
                    width: ${thirdColumnSize}px;
                    height: ${firstSecondRowSize}px;
                    transform: translate(${2 * (firstSecondColumnSize + gapSize)}px, 0);
                }
                
                20% {
                    width: ${thirdColumnSize}px;
                    transform: translate(${2 * (firstSecondColumnSize + gapSize)}px, ${firstSecondRowSize + gapSize}px);
                }

                40% {
                    width: ${halfSecondColumnSize}px;
                    height: ${firstSecondRowSize}px;
                    transform: translate(${firstSecondColumnSize + gapSize + secondColumnInfelicity}px, ${firstSecondRowSize + gapSize}px);
                }

                60% {
                    height: ${longSecondRowSize}px;
                }

                100% {
                    width: ${halfSecondColumnSize}px;
                    height: ${longSecondRowSize}px;
                    transform: translate(${firstSecondColumnSize + gapSize + secondColumnInfelicity}px, ${firstSecondRowSize + gapSize}px);
                }
            }`
        const keyFrames5 = `
            @keyframes keyFrames5 {
                from {
                    width: ${thirdColumnSize}px;
                    height: ${firstSecondRowSize}px;
                    transform: translateX(${2 * (firstSecondColumnSize + gapSize)}px);
                }
                
                20% {
                    width: ${firstSecondColumnSize}px;
                    transform: translateX(${firstSecondColumnSize + gapSize}px);
                }

                40% {
                    transform: translateX(${firstSecondColumnSize + gapSize}px);
                }

                60% {
                    height: ${firstSecondRowSize}px;
                    transform: translateX(0);
                }

                80% {
                    height: ${2 * firstSecondRowSize + gapSize}px;
                }

                100% {
                    width: ${firstSecondColumnSize}px;
                    height: ${2 * firstSecondRowSize + gapSize}px;
                    transform: translateX(0);
                }
            }`
        const keyFrames6 = `
            @keyframes keyFrames6 {
                from {
                    width: ${thirdColumnSize}px;
                    height: ${firstSecondRowSize}px;
                    transform: translate(${2 * (firstSecondColumnSize + gapSize)}px, 0);
                }
                
                20% {
                    transform: translate(${2 * (firstSecondColumnSize + gapSize)}px, ${firstSecondRowSize + gapSize}px);
                }

                60% {
                    height: ${firstSecondRowSize}px;
                    transform: translate(${2 * (firstSecondColumnSize + gapSize)}px, ${firstSecondRowSize + gapSize}px);
                }

                80% {
                    height: ${thirdRowSize}px;
                    transform: translate(${2 * (firstSecondColumnSize + gapSize)}px, ${2 * (firstSecondRowSize + gapSize)}px);
                }

                100% {
                    width: ${thirdColumnSize}px;
                    height: ${longThirdRowSize}px;
                    transform: translate(${2 * (firstSecondColumnSize + gapSize)}px, ${2 * (firstSecondRowSize + gapSize)}px);
                }
            }`
        const keyFrames7 = `
            @keyframes keyFrames7 {
                from {
                    width: ${thirdColumnSize}px;
                    height: ${firstSecondRowSize}px;
                    transform: translate(${2 * (firstSecondColumnSize + gapSize)}px, 0);
                }
                
                20% {
                    width: ${thirdColumnSize}px;
                    transform: translate(${2 * (firstSecondColumnSize + gapSize)}px, ${firstSecondRowSize + gapSize}px);
                }

                40% {
                    width: ${halfSecondColumnSize}px;
                    height: ${firstSecondRowSize}px;
                    transform: translate(${firstSecondColumnSize + gapSize + secondColumnInfelicity}px, ${firstSecondRowSize + gapSize}px);
                }

                60% {
                    height: ${longSecondRowSize}px;
                    z-index: 2;
                }

                80% {
                    height: ${longSecondRowSize}px;
                    width: ${halfSecondColumnSize}px;
                    border-radius: 100px;
                    transform-origin: right top;
                    transform: translate(${firstSecondColumnSize + gapSize + secondColumnInfelicity}px, ${firstSecondRowSize + gapSize}px);
                }

                100% {
                    width: ${firstSecondRowSize}px;
                    height: ${firstSecondColumnSize * 2 + gapSize}px;
                    border-radius: 160px 120px 200px 120px;
                    transform-origin: right top;
                    transform: translate(${firstSecondColumnSize + gapSize + lastElInfelicity}px, ${firstSecondRowSize * 2 + gapSize}px) rotate(90deg);
                    z-index: 3;
                }
            }`
        // border-radius: 200px 120px 160px 160px;
        return keyFrames2 + keyFrames3 + keyFrames4 + keyFrames5 + keyFrames6 + keyFrames7
    }

    const constructWrapper = () => {
        const divs = []

        for (let i = 0; i <= 6; i++) {
            const div = document.createElement('div')
            wrapper.append(div)
        }

        wrapper.querySelectorAll('div').forEach((div, idx) => divs[idx] = div)

        const head = document.querySelector('head')
        const style = document.createElement('style')

        const keyframes = getKeyframes()

        style.innerHTML = keyframes
        head.append(style)

        divs[1].style.animation = 'keyFrames2 3.5s ease-in-out 0s forwards'
        divs[2].style.animation = 'keyFrames3 3.5s ease-in-out 0s forwards'
        divs[3].style.animation = 'keyFrames4 3.5s ease-in-out 0s forwards'
        divs[4].style.animation = 'keyFrames5 3.5s ease-in-out 0s forwards'
        divs[5].style.animation = 'keyFrames6 3.5s ease-in-out 0s forwards'
        divs[6].style.animation = 'keyFrames7 3.5s ease-in-out 0s forwards'

        $(divs[0]).css({
            width: thirdColumnSize + 'px',
            height: firstSecondRowSize + 'px',
            backgroundColor: oc,
            transform: `translateX(${2 * (firstSecondColumnSize + gapSize)}px)`
        })

        $(divs[1]).css({
            width: thirdColumnSize + 'px',
            height: firstSecondRowSize + 'px',
            backgroundColor: pc,
            transform: `translateX(${2 * (firstSecondColumnSize + gapSize)}px)`
        })

        $(divs[2]).css({
            width: thirdColumnSize + 'px',
            height: firstSecondRowSize + 'px',
            backgroundColor: pc,
            transform: `translateX(${2 * (firstSecondColumnSize + gapSize)}px)`
        })

        $(divs[3]).css({
            width: thirdColumnSize + 'px',
            height: firstSecondRowSize + 'px',
            backgroundColor: sc,
            transform: `translateX(${2 * (firstSecondColumnSize + gapSize)}px)`
        })

        $(divs[4]).css({
            width: thirdColumnSize + 'px',
            height: firstSecondRowSize + 'px',
            backgroundColor: oc,
            transform: `translateX(${2 * (firstSecondColumnSize + gapSize)}px)`
        })

        $(divs[5]).css({
            width: thirdColumnSize + 'px',
            height: firstSecondRowSize + 'px',
            backgroundColor: sc,
            transform: `translateX(${2 * (firstSecondColumnSize + gapSize)}px)`
        })

        $(divs[6]).css({
            width: thirdColumnSize + 'px',
            height: firstSecondRowSize + 'px',
            backgroundColor: oc,
            transform: `translateX(${2 * (firstSecondColumnSize + gapSize)}px)`
        })
    }

    constructWrapper()
}

// анимация на стартовом экране "О нас"
animateAbout(primaryColor, secondaryColor)
function animateAbout(pc, sc, oc = opacityPrimaryColor) {
    const wrapper = document.querySelector('.about-start__img')
    if (!wrapper) return

    const { round } = Math

    // высота/ширина элементов в процентах
    const columnPercent = ((157 / 640) * 100).toFixed(1)

    const firstRowPercent = ((237 / 534) * 100).toFixed(1)
    const secondRowPercent = ((167 / 534) * 100).toFixed(1)
    const thirdRowPercent = ((122 / 534) * 100).toFixed(1)

    const halfTopPercent = ((135 / 534) * 100).toFixed(1)
    const rightTopPercent = ((202 / 534) * 100).toFixed(1)
    //

    const wrapperHeight = wrapper.clientHeight
    const wrapperWidth = wrapper.clientWidth

    // высота/ширина элементов в пикселях
    const columnSize = round(wrapperWidth * (columnPercent / 100))

    const firstRowSize = round(wrapperHeight * (firstRowPercent / 100))
    const secondRowSize = round(wrapperHeight * (secondRowPercent / 100))
    const thirdRowSize = round(wrapperHeight * (thirdRowPercent / 100))

    const halfTopSize = round(wrapperHeight * (halfTopPercent / 100))
    const rightTopSize = round(wrapperHeight * (rightTopPercent / 100))
    // 

    // 
    const gapSize = 4
    // 

    const getKeyframes = () => {
        const keyFrames3 = `
        @keyframes keyFrames3 {
            from {
                width: ${columnSize}px;
                height: ${halfTopSize}px;
                background-color: ${pc};
                transform: translateX(${columnSize + gapSize}px);
            }
        
            28% {
                width: ${columnSize}px;
                height: ${halfTopSize}px;
                background-color: ${pc};
                transform: translateX(${columnSize + gapSize}px);
            }
        
            43% {
                height: ${secondRowSize}px;
                transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
            }

            72% {
                height: ${secondRowSize}px;
                transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
            }
        
            86% {
                height: ${halfTopSize}px;
                transform: translate(${columnSize + gapSize}px, 0);
            }
        
            to {
                height: ${halfTopSize}px;
                transform: translate(${columnSize + gapSize}px, 0);
            }
        }`

        const keyFrames4 = `
        @keyframes keyFrames4 {
            from {
                width: ${columnSize}px;
                height: ${firstRowSize + secondRowSize + gapSize}px;
                background-color: ${oc},
                transform: translateX(${2 * (columnSize + gapSize)}px);
            }
        
            43% {
                width: ${columnSize}px;
                height: ${firstRowSize + secondRowSize + gapSize}px;
                background-color: ${oc},
                transform: translateX(${2 * (columnSize + gapSize)}px);
            }
        
            57% {
                height: ${firstRowSize + secondRowSize + thirdRowSize + 2 * gapSize}px;
            }

            72% {
                height: ${firstRowSize + secondRowSize + thirdRowSize + 2 * gapSize}px;
            }
        
            86% {
                height: ${firstRowSize + secondRowSize + gapSize}px;
            }
        
            to {
                height: ${firstRowSize + secondRowSize + gapSize}px;
            }
        }`

        const keyFrames5 = `
        @keyframes keyFrames5 {
            from {
                width: ${2 * columnSize + gapSize}px;
                height: ${rightTopSize}px;
                background-color: ${oc};
                transform: translateX(${2 * (columnSize + gapSize)}px);
            }
        
            14% {
                width: ${columnSize}px;
                transform: translateX(${3 * (columnSize + gapSize)}px);
            }
        
            28% {
                height: ${secondRowSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + gapSize}px);
            }
        
            57% {
                height: ${secondRowSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + gapSize}px);
            }
        
            72% {
                height: ${firstRowSize + secondRowSize + gapSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, 0);
            }
        
            86% {
                width: ${columnSize}px;
                height: ${rightTopSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, 0);
            }
        
            to {
                width: ${2 * columnSize + gapSize}px;
                height: ${rightTopSize}px;
                transform: translate(${2 * (columnSize + gapSize)}px, 0);
            }
        }`

        const keyFrames6 = `
        @keyframes keyFrames6 {
            from {
                width: ${columnSize}px;
                height: ${secondRowSize}px;
                background-color: ${pc};
                transform: translateY(${firstRowSize + gapSize}px);
            }
        
            14% {
                height: ${firstRowSize + secondRowSize + gapSize}px;
                transform: translateY(0);
            }
        
            28% {
                height: ${firstRowSize}px;
            }
        
            43% {
                height: ${firstRowSize}px;
            }
        
            57% {
                height: ${halfTopSize}px;
                transform: translateY(0);
            }
        
            72% {
                height: ${halfTopSize}px;
                transform: translate(${columnSize + gapSize}px, 0);
            }
        
            86% {
                height: ${secondRowSize}px;
                transform: translate(0, ${firstRowSize + gapSize}px);
            }
        
            to {
                height: ${secondRowSize}px;
                transform: translate(0, ${firstRowSize + gapSize}px);
            }
        }`

        const keyFrames7 = `
        @keyframes keyFrames7 {
            from {
                width: ${2 * columnSize + gapSize}px;
                height: ${secondRowSize}px;
                background-color: ${sc};
                transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
            }
        
            14% {
                width: ${2 * columnSize + gapSize}px;
                transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
            }
        
            28% {
                width: ${3 * columnSize + 2 * gapSize}px;
                transform: translate(0, ${firstRowSize + gapSize}px);
            }
        
            43% {
                width: ${columnSize}px;
                height: ${secondRowSize}px;
                transform: translate(0, ${firstRowSize + gapSize}px);
            }
        
            57% {
                height: ${firstRowSize + secondRowSize + gapSize}px;
                transform: translate(0, 0);
            }
        
            72% {
                height: ${secondRowSize}px;
                transform: translate(0, ${firstRowSize + gapSize}px);
            }
        
            86% {
                width: ${columnSize}px;
                height: ${secondRowSize}px;
                transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
            }
        
            to {
                width: ${2 * columnSize + gapSize}px;
                height: ${secondRowSize}px;
                transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
            }
        }`

        const keyFrames8 = `
        @keyframes keyFrames8 {
            from {
                width: ${columnSize}px;
                height: ${rightTopSize}px;
                background-color: ${pc};
                transform: translate(${3 * (columnSize + gapSize)}px, ${rightTopSize + gapSize}px);
            }
        
            14% {
                height: ${rightTopSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, ${rightTopSize + gapSize}px);
            }
        
            28% {
                height: ${firstRowSize + secondRowSize + gapSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, 0);
            }
        
            43% {
                height: ${firstRowSize}px;
            }
        
            57% {
                height: ${firstRowSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, 0);
            }
        
            72% {
                height: ${secondRowSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + gapSize}px);
            }
        
            86% {
                height: ${secondRowSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + gapSize}px);
            }
        
            to {
                height: ${rightTopSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, ${rightTopSize + gapSize}px);
            }
        }`

        const keyFrames9 = `
        @keyframes keyFrames9 {
            from {
                width: ${2 * columnSize + gapSize}px;
                height: ${thirdRowSize}px;
                background-color: ${sc};
                transform: translate(0, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            14% {
                transform: translate(0, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            28% {
                transform: translate(${columnSize + gapSize}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            43% {
                transform: translate(${columnSize + gapSize}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            57% {
                transform: translate(${2 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            72% {
                transform: translate(${2 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            86% {
                transform: translate(0, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            to {
                transform: translate(0, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        }`

        const keyFrames10 = `
        @keyframes keyFrames10 {
            from {
                width: ${columnSize}px;
                height: ${thirdRowSize}px;
                background-color: ${pc};
                transform: translate(${2 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            14% {
                background-color: ${pc};
                transform: translate(${2 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            28% {
                background-color: ${sc};
                transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            43% {
                background-color: ${sc};
                transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            57% {
                background-color: ${pc};
                transform: translate(${columnSize + gapSize}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            72% {
                transform: translate(${columnSize + gapSize}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            86% {
                transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            to {
                transform: translate(${2 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        }`

        const keyFrames11 = `
        @keyframes keyFrames11 {
            from {
                width: ${columnSize}px;
                height: ${thirdRowSize}px;
                background-color: ${oc};
                transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            14% {
                width: ${3 * columnSize + 2 * gapSize}px;
                transform: translate(${columnSize + gapSize}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            28% {
                width: ${2 * columnSize + gapSize}px;
                transform: translate(0, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            43% {
                width: ${columnSize}px;
            }
        
            57% {
        
            }
        
            72% {
                transform: translate(0, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            86% {
                transform: translate(${2 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        
            to {
                transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
            }
        }`

        return keyFrames3 + keyFrames4 + keyFrames5 + keyFrames6 + keyFrames7 + keyFrames8 + keyFrames9 + keyFrames10 + keyFrames11
    }

    const constructWrapper = () => {
        const divs = []

        for (let i = 0; i <= 10; i++) {
            const div = document.createElement('div')
            wrapper.append(div)
        }

        wrapper.querySelectorAll('div').forEach((div, idx) => divs[idx] = div)

        const head = document.querySelector('head')
        const style = document.createElement('style')

        const keyframes = getKeyframes()

        style.innerHTML = keyframes
        head.append(style)

        divs[2].style.animation = 'keyFrames3 7s infinite ease-in-out 0s'
        divs[3].style.animation = 'keyFrames4 7s infinite ease-in-out 0s'
        divs[4].style.animation = 'keyFrames5 7s infinite ease-in-out 0s'
        divs[5].style.animation = 'keyFrames6 7s infinite ease-in-out 0s'
        divs[6].style.animation = 'keyFrames7 7s infinite ease-in-out 0s'
        divs[7].style.animation = 'keyFrames8 7s infinite ease-in-out 0s'
        divs[8].style.animation = 'keyFrames9 7s infinite ease-in-out 0s'
        divs[9].style.animation = 'keyFrames10 7s infinite ease-in-out 0s'
        divs[10].style.animation = 'keyFrames11 7s infinite ease-in-out 0s'

        $(divs[0]).css({
            width: columnSize + 'px',
            height: firstRowSize + 'px',
            backgroundColor: sc
        })

        $(divs[1]).css({
            width: columnSize + 'px',
            height: firstRowSize + 'px',
            backgroundColor: sc,
            transform: `translateX(${columnSize + gapSize}px)`
        })

        $(divs[2]).css({
            width: columnSize + 'px',
            height: halfTopSize + 'px',
            backgroundColor: pc,
            transform: `translateX(${columnSize + gapSize}px)`
        })

        $(divs[3]).css({
            width: columnSize + 'px',
            height: firstRowSize + secondRowSize + gapSize + 'px',
            backgroundColor: oc,
            transform: `translateX(${2 * (columnSize + gapSize)}px)`
        })

        $(divs[4]).css({
            width: 2 * columnSize + gapSize + 'px',
            height: rightTopSize + 'px',
            backgroundColor: oc,
            transform: `translateX(${2 * (columnSize + gapSize)}px)`
        })

        $(divs[5]).css({
            width: columnSize + 'px',
            height: secondRowSize + 'px',
            backgroundColor: pc,
            transform: `translateY(${firstRowSize + gapSize}px)`
        })

        $(divs[6]).css({
            width: 2 * columnSize + gapSize + 'px',
            height: secondRowSize + 'px',
            backgroundColor: sc,
            transform: `translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px)`
        })

        $(divs[7]).css({
            width: columnSize + 'px',
            height: rightTopSize + 'px',
            backgroundColor: pc,
            transform: `translate(${3 * (columnSize + gapSize)}px, ${rightTopSize + gapSize}px)`
        })

        $(divs[8]).css({
            width: 2 * columnSize + gapSize + 'px',
            height: thirdRowSize + 'px',
            backgroundColor: sc,
            transform: `translate(0, ${firstRowSize + secondRowSize + 2 * gapSize}px)`
        })

        $(divs[9]).css({
            width: columnSize + 'px',
            height: thirdRowSize + 'px',
            backgroundColor: pc,
            transform: `translate(${2 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px)`
        })

        $(divs[10]).css({
            width: columnSize + 'px',
            height: thirdRowSize + 'px',
            backgroundColor: oc,
            transform: `translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px)`
        })
    }

    constructWrapper()
}

// анимация на стартовом экране страницы благодарности
animateTy(primaryColor, secondaryColor)
function animateTy(pc, sc, oc = opacityPrimaryColor) {
    const wrapper = document.querySelector('.ty-form__img')
    const inner = document.querySelector('.ty-form__img-inner')
    if (!wrapper) return

    const { round } = Math

    // высота/ширина элементов в процентах
    const columnPercent = ((157 / 640) * 100).toFixed(1)

    const firstRowPercent = ((237 / 534) * 100).toFixed(1)
    const secondRowPercent = ((167 / 534) * 100).toFixed(1)
    const thirdRowPercent = ((122 / 534) * 100).toFixed(1)

    const halfTopPercent = ((135 / 534) * 100).toFixed(1)
    const rightTopPercent = ((202 / 534) * 100).toFixed(1)
    //

    const wrapperHeight = wrapper.clientHeight
    const wrapperWidth = wrapper.clientWidth

    // высота/ширина элементов в пикселях
    const columnSize = round(wrapperWidth * (columnPercent / 100))

    const firstRowSize = round(wrapperHeight * (firstRowPercent / 100))
    const secondRowSize = round(wrapperHeight * (secondRowPercent / 100))
    const thirdRowSize = round(wrapperHeight * (thirdRowPercent / 100))

    const halfTopSize = round(wrapperHeight * (halfTopPercent / 100))
    const rightTopSize = round(wrapperHeight * (rightTopPercent / 100))
    // 

    // 
    const gapSize = 4
    // 

    const getKeyframes = () => {
        const keyFrames5 = `
            @keyframes keyFrames5 {
                from {
                    width: ${2 * columnSize + gapSize}px;
                    height: ${rightTopSize}px;
                    background-color: ${oc};
                    transform: translateX(${2 * (columnSize + gapSize)}px);
                }
            
                14% {
                    width: ${columnSize + gapSize}px;
                    transform: translateX(${3 * (columnSize + gapSize)}px);
                }

                43% {
                    width: ${columnSize + gapSize}px;
                    background-color: ${oc};
                    transform: translateX(${3 * (columnSize + gapSize)}px);
                }
            
                58% {
                    width: ${columnSize}px;
                    height: ${rightTopSize}px;
                    background-color: ${pc};
                    transform: translate(${3 * (columnSize + gapSize)}px, ${rightTopSize + gapSize}px);
                }
            
                72% {
                    width: ${columnSize}px;
                    height: ${secondRowSize}px;
                    transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
                    background-color: ${sc};
                }

                to {
                    width: ${columnSize}px;
                    height: ${secondRowSize}px;
                    transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
                    background-color: ${sc};
                }
            }`
        const keyFrames9 = `
            @keyframes keyFrames9 {
                from {
                    width: ${2 * columnSize + gapSize}px;
                    height: ${thirdRowSize}px;
                    background-color: ${sc};
                    transform: translate(0, ${firstRowSize + secondRowSize + 2 * gapSize}px);
                }
            
                14% {
                    width: ${columnSize}px;
                    transform: translate(0, ${firstRowSize + secondRowSize + 2 * gapSize}px);
                    opacity: 1;
                }
            
                29% {
                    transform: translate(0, ${firstRowSize + gapSize}px);
                    opacity: 0;
                }

                to {
                    width: ${columnSize}px;
                    height: ${thirdRowSize}px;
                    transform: translate(0, ${firstRowSize + gapSize}px);
                    opacity: 0;
                }
            }`
        const keyFrames10 = `
            @keyframes keyFrames10 {
                from {
                    width: ${columnSize}px;
                    height: ${thirdRowSize}px;
                    background-color: ${pc};
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
                    opacity: 1;
                }
            
                14% {
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstRowSize + gapSize}px);
                    opacity: 0;
                }

                to {
                    width: ${columnSize}px;
                    height: ${thirdRowSize}px;
                    background-color: ${pc};
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstRowSize + gapSize}px);
                    opacity: 0;
                }
            }`
        const keyFrames3 = `
            @keyframes keyFrames3 {
                from {
                    width: ${columnSize}px;
                    height: ${halfTopSize}px;
                    background-color: ${pc};
                    transform: translateX(${columnSize + gapSize}px);
                }
            
                14% {
                    transform: translateX(${columnSize + gapSize}px);
                    opacity: 1;
                }
            
                29% {
                    transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
                    opacity: 0;
                }

                to {
                    width: ${columnSize}px;
                    height: ${halfTopSize}px;
                    background-color: ${pc};
                    transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
                    opacity: 0;
                }
            }`
        const keyFrames4 = `
            @keyframes keyFrames4 {
                from {
                    width: ${columnSize}px;
                    height: ${firstRowSize + secondRowSize + gapSize}px;
                    background-color: ${oc};
                    transform: translateX(${2 * (columnSize + gapSize)}px);
                }
            
                14% {
                    height: ${firstRowSize + secondRowSize + gapSize}px;
                    transform: translateX(${2 * (columnSize + gapSize)}px);
                    opacity: 1;
                }
            
                29% {
                    height: ${secondRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstRowSize + gapSize}px);
                    opacity: 0;
                }

                to {
                    width: ${columnSize}px;
                    height: ${secondRowSize}px;
                    transform: translate(${2 * (columnSize + gapSize)}px, ${firstRowSize + gapSize}px);
                    background-color: ${oc};
                    opacity: 0;
                }
            }`
        const keyFrames1 = `
            @keyframes keyFrames1 {
                from {
                    width: ${columnSize}px;
                    height: ${firstRowSize}px;
                    background-color: ${sc};
                }
            
                29% {
                    transform: translateX(0);
                }

                43% {
                    transform: translateX(${columnSize + gapSize}px);
                    opacity: 1;
                }

                58% {
                    opacity: 0;
                }

                to {
                    width: ${columnSize}px;
                    height: ${firstRowSize}px;
                    background-color: ${sc};
                    transform: translateX(${columnSize + gapSize}px);
                    opacity: 0;
                }
            }`
        const keyFrames11 = `
            @keyframes keyFrames11 {
                from {
                    width: ${columnSize}px;
                    height: ${thirdRowSize}px;
                    background-color: ${oc};
                    transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
                }
            
                29% {
                    background-color: ${oc};
                    transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + secondRowSize + 2 * gapSize}px);
                }

                43% {
                    background-color: ${pc};
                    transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + gapSize}px);
                    opacity: 1;
                }
            
                58% {
                    opacity: 0;
                }

                to {
                    width: ${columnSize}px;
                    height: ${thirdRowSize}px;
                    background-color: ${pc};
                    transform: translate(${3 * (columnSize + gapSize)}px, ${firstRowSize + gapSize}px);
                    opacity: 0;
                }
            }`
        const keyFrames6 = `
            @keyframes keyFrames6 {
                from {
                    width: ${columnSize}px;
                    height: ${secondRowSize}px;
                    background-color: ${pc};
                    transform: translateY(${firstRowSize + gapSize}px);
                }

                43% {
                    background-color: ${pc};
                    transform: translateY(${firstRowSize + gapSize}px);
                }
            
                58% {
                    background-color: ${sc};
                    transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
                }

                to {
                    width: ${columnSize}px;
                    height: ${secondRowSize}px;
                    background-color: ${sc};
                    transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
                }
            }`
        const keyFrames2 = `
            @keyframes keyFrames2 {
                from {
                    width: ${columnSize}px;
                    height: ${firstRowSize}px;
                    background-color: ${sc};
                    transform: translateX(${columnSize + gapSize}px);
                }
            
                58% {
                    height: ${firstRowSize}px;
                    transform: translateX(${columnSize + gapSize}px);
                }
            
                72% {
                    height: ${secondRowSize}px;
                    transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
                }

                to {
                    width: ${columnSize}px;
                    height: ${secondRowSize}px;
                    background-color: ${sc};
                    transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
                }
            }`
        const keyFrames8 = `
            @keyframes keyFrames8 {
                from {
                    width: ${columnSize}px;
                    height: ${rightTopSize}px;
                    background-color: ${pc};
                    transform: translate(${3 * (columnSize + gapSize)}px, ${rightTopSize + gapSize}px);
                }
            
                58% {
                    height: ${rightTopSize}px;
                    transform: translate(${3 * (columnSize + gapSize)}px, ${rightTopSize + gapSize}px);
                    background-color: ${pc};
                }
            
                72% {
                    height: ${secondRowSize}px;
                    transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
                    background-color: ${sc};
                }

                to {
                    width: ${columnSize}px;
                    height: ${secondRowSize}px;
                    transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
                    background-color: ${sc};
                }
            }`
        const keyFrames7 = `
            @keyframes keyFrames7 {
                from {
                    width: ${2 * columnSize + gapSize}px;
                    height: ${secondRowSize}px;
                    background-color: ${sc};
                    transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
                }
            
                58% {
                    width: ${2 * columnSize + gapSize}px;
                }
            
                72% {
                    width: ${columnSize}px;
                }

                to {
                    width: ${columnSize}px;
                    height: ${secondRowSize}px;
                    background-color: ${sc};
                    transform: translate(${columnSize + gapSize}px, ${firstRowSize + gapSize}px);
                }
            }`
        const keyFramesInner = `
            @keyframes keyFramesInner {
                from {
                    transform: scale(1);
                }
            
                72% {
                    transform: scale(1);
                }

                86% {
                    transform: scale(0);
                }

                to {
                    transform: scale(0);
                }
            }`
        const keyFramesImg = `
            @keyframes keyFramesImg {
                from {
                    transform: scale(0);
                }

                86% {
                    transform: scale(0);
                }

                to {
                    transform: scale(1);
                }
            }`

        return keyFrames5 + keyFrames9 + keyFrames10 + keyFrames3 + keyFrames4 + keyFrames1 + keyFrames11 + keyFrames6 + keyFrames2 + keyFrames8 + keyFrames7 + keyFramesInner + keyFramesImg
    }

    for (let i = 0; i <= 10; i++) {
        const div = document.createElement('div')
        inner.append(div)
    }

    const img = wrapper.querySelector('svg')

    const head = document.querySelector('head')
    const style = document.createElement('style')

    const keyframes = getKeyframes()

    style.innerHTML = keyframes
    head.append(style)

    inner.querySelectorAll('div').forEach((div, idx) => {
        div.style.animation = `keyFrames${idx + 1} 3.5s ease-in-out 0s forwards`
    })

    inner.style.animation = 'keyFramesInner 3.5s ease-in-out 0s forwards'
    img.style.animation = 'keyFramesImg 3.5s ease-in-out 0s forwards'
}

// анимация чисел в секции stats на странице "О нас"
digits()
function digits() {
    const observerTarget = document.querySelector('.about-stats__item')

    if (!observerTarget) return

    const observerOptions = {
        threshold: 0.2
    }

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            const elem = entry.target

            if (entry.isIntersecting && !elem.classList.contains('_intersected')) {
                elem.classList.add('_intersected')

                const digits = $('.about-stats__item-digit span')

                $(digits).spincrement({
                    thousandSeparator: " ",
                    duration: 2000
                });
            }
        })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    observer.observe(observerTarget)
}

// задание равной высоты всем элементами в секции stats на странице "О нас"
statsCalcHeight()
function statsCalcHeight() {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    if (width > 480) return

    let max = 0

    const stats = document.querySelectorAll('.about-stats__item')

    if (stats.length === 0) return

    stats.forEach(stat => {
        const height = stat.clientHeight

        max = height > max ? height : max
    })

    stats.forEach(stat => stat.style.height = max + 'px')
}

// слайдер на странице "О нас"
teamSlider()
function teamSlider() {
    const section = document.querySelector('.about-team')
    if (!section) return

    const sliderCards = document.querySelectorAll('.about-team__card')
    const isLoop = sliderCards.length > 4

    const teamSlider = new Swiper('.about-team__slider', {
        loop: isLoop,
        spaceBetween: 10,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
            el: '.about-team__slider-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            960: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 20,
            },
            700: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 20,
            }
        }
    })
}

// слайдер на странице "Отзывы"
reviewsVideoSlider()
function reviewsVideoSlider() {
    const section = document.querySelector('.reviews-video')
    if (!section) return

    const sliderCards = document.querySelectorAll('.reviews-video__slider-item')
    const isLoop = sliderCards.length > 2

    const reviewsVideoSlider = new Swiper('.reviews-video__slider', {
        loop: isLoop,
        spaceBetween: 20,
        slidesPerView: 'auto',
        centeredSlides: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        pagination: {
            el: '.reviews-video__slider-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            960: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 20,
            }
        }
    })
}

// клик по бургеру в моб. версии
function showMenu() {
    const nav = document.querySelector('.nav-wrapper')

    nav.classList.add('_active')
    document.addEventListener('click', closeMenuListener)
    document.body.classList.add('_modal')
}

// закрытие меню в моб. версии
function closeMenu() {
    const nav = document.querySelector('.nav-wrapper')

    nav.classList.remove('_active')
    document.removeEventListener('click', closeMenuListener)
    document.body.classList.remove('_modal')
}

// клик вне меню в моб. версии
function closeMenuListener(e) {
    if (!e.target.closest('.nav') && !e.target.closest('.header__burger')) {
        closeMenu()
    }
}

// адаптация анимаций при изменении ширины страницы
let t;
window.addEventListener('resize', adaptStartImg)
function adaptStartImg(e) {
    clearTimeout(t)
    t = setTimeout(() => {
        animateAbout(primaryColor, secondaryColor)
        animateBfl(primaryColor, secondaryColor)
        animatePractice(primaryColor, secondaryColor)
        animateTy(primaryColor, secondaryColor)
    }, 300)
}

// адаптив навбара
navAdapt()
function navAdapt() {
    const desktopMenu = document.querySelector('.header__menu')
    const desktopNav = document.querySelector('.header__nav')
    const mobileNav = document.querySelector('.nav')

    const mql = window.matchMedia('(max-width: 1180px)')
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    if (viewportWidth <= 1180) {
        mobileNav.children[0].append(desktopNav)
        desktopNav.classList.add('_done')
    }

    try {
        mql.addEventListener('change', toggleNav)
    } catch (e) {
        mql.addListener(toggleNav)
    }

    function toggleNav() {
        if (!desktopNav.classList.contains('_done')) {
            mobileNav.children[0].append(desktopNav)
            desktopNav.classList.add('_done')
        } else {
            desktopMenu.children[0].after(desktopNav)
            desktopNav.classList.remove('_done')
        }
    }
}

// адаптив секции why на странице "О нас" (добавление слайдера)
whyAdapt()
function whyAdapt() {
    const section = document.querySelector('.about-why')

    if (!section) return

    const cards = section.querySelectorAll('.about-why__card')
    const slider = section.querySelector('.about-why__slider-inner')
    const grid = section.querySelector('.about-why__grid')

    const mql = window.matchMedia('(max-width: 780px)')
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    let whySlider;

    if (viewportWidth <= 780) {
        if (!section.classList.contains('_done')) {
            section.classList.add('_done')

            Array.from(cards).reverse().forEach(card => {
                slider.append(card)
                card.classList.add('swiper-slide')
            })

            whySlider = new Swiper('.about-why__slider', {
                loop: true,
                spaceBetween: 10,
                slidesPerView: 'auto',
                centeredSlides: true,
                pagination: {
                    el: '.about-why__slider-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            })
        }
    }

    try {
        mql.addEventListener('change', toggleWhy)
    } catch (e) {
        mql.addListener(toggleWhy)
    }

    function toggleWhy() {
        if (!section.classList.contains('_done')) {
            section.classList.add('_done')

            Array.from(cards).reverse().forEach(card => {
                slider.append(card)
                card.classList.add('swiper-slide')
            })

            whySlider = new Swiper('.about-why__slider', {
                loop: true,
                spaceBetween: 10,
                slidesPerView: 'auto',
                centeredSlides: true,
                pagination: {
                    el: '.about-why__slider-pagination',
                    type: 'bullets',
                    clickable: true
                },
            })
        } else {
            section.classList.remove('_done')

            Array.from(cards).reverse().forEach(card => {
                grid.children[0].after(card)
                card.classList.remove('swiper-slide')
            })

            whySlider.destroy(true, true)
        }
    }
}

// адаптив секции team там где он присутствует
teamAdapt()
function teamAdapt() {
    const section = document.querySelector('.about-team') || document.querySelector('.contacts-team')

    if (!section) return

    const cards = section.querySelectorAll('.about-team__card-inner')

    const mql = window.matchMedia('(max-width:960px)')
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    if (viewportWidth <= 960) {
        if (!section.classList.contains('_done')) {
            section.classList.add('_done')

            cards.forEach(card => {
                const link = card.querySelector('.about-team__card-link')
                const info = card.querySelector('.about-team__card-info')

                info.append(link)
            })
        }
    }

    try {
        mql.addEventListener('change', toggleTeam)
    } catch (e) {
        mql.addListener(toggleTeam)
    }

    function toggleTeam() {
        if (!section.classList.contains('_done')) {
            section.classList.add('_done')

            cards.forEach(card => {
                const link = card.querySelector('.about-team__card-link')
                const info = card.querySelector('.about-team__card-info')

                info.append(link)
            })
        } else {
            section.classList.remove('_done')

            cards.forEach(card => {
                const link = card.querySelector('.about-team__card-link')
                const img = card.querySelector('.about-team__card-img')

                img.append(link)
            })
        }
    }
}

// адаптив отзывов на странице "Отзывы"
reviewsAdapt()
function reviewsAdapt() {
    const section = document.querySelector('.reviews-examples')
    if (!section) return

    const items = document.querySelectorAll('.reviews-examples__user')

    const mql = window.matchMedia('(max-width:560px)')
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    if (viewportWidth <= 560) {
        if (!section.classList.contains('_done')) {
            section.classList.add('_done')

            items.forEach(item => {
                reviewsShowMoreClass(item, true)
                const rate = item.querySelector('.reviews-examples__user-rate')
                item.append(rate)
            })
        }
    }

    try {
        mql.addEventListener('change', toggleRate)
    } catch (e) {
        mql.addListener(toggleRate)
    }

    function toggleRate() {
        if (!section.classList.contains('_done')) {
            section.classList.add('_done')

            items.forEach(item => {
                reviewsShowMoreClass(item, true)
                const rate = item.querySelector('.reviews-examples__user-rate')
                item.append(rate)
            })
        } else {
            section.classList.remove('_done')

            items.forEach(item => {
                reviewsShowMoreClass(item, false)
                const info = item.querySelector('.reviews-examples__user-info')
                const rate = item.querySelector('.reviews-examples__user-rate')

                info.append(rate)
            })
        }
    }
}

// инициализация показа кнопки "Читать подробнее..." на отзывах на странице "Отзывы"
function reviewsShowMoreClass(user, mobile) {
    const item = user.closest('.reviews-examples__item')

    if (mobile) {
        const textWrapper = item.querySelector('.reviews-examples__item-text')
        const text = textWrapper.children[0]

        const textWrapperHeight = textWrapper.clientHeight
        const textHeight = text.clientHeight

        if (textHeight > textWrapperHeight) {
            item.classList.add('_show_more')
        }
    } else {
        item.classList.remove('_show_more')
    }
}

// клик по кнопке "Читать подробнее..." на отзывах на странице "Отзывы"
function reviewsShowMore(btn) {
    const item = btn.closest('.reviews-examples__item')

    item.classList.add('_showing')
    item.classList.remove('_show_more')
}

bflForTitle()
function bflForTitle() {
    const sections = document.querySelectorAll('.bfl-for')

    if (!sections.length) return

    sections.forEach(section => {
        const titles = section.querySelectorAll('.bfl-for__item-title')

        let max = 0
        titles.forEach(title => {
            const height = title.clientHeight

            max = height > max ? height : max
        })

        titles.forEach(title => {
            title.style.height = max + 'px'
        })
    })
}

function faq(el) {
    el.classList.toggle('_active')

    $(el).next().slideToggle(200)
}

rateAll()
function rateAll() {
    const rates = document.querySelectorAll('._rate')
    rates.forEach(el => {
        const rating = el.textContent
        if (!rating) return

        const stars = document.createElement('div')
        stars.className = 'reviews-start__rate-stars'
        stars.innerHTML = `
            <div class="reviews-start__rate-star"><span></span></div>
            <div class="reviews-start__rate-star"><span></span></div>
            <div class="reviews-start__rate-star"><span></span></div>
            <div class="reviews-start__rate-star"><span></span></div>
            <div class="reviews-start__rate-star"><span></span></div>`
        el.after(stars)

        rate(stars, rating)
    })
}

function rate(el, rating) {
    const integer = +rating.split('.')[0]
    const float = +rating.split('.')[1]

    const stars = el.querySelectorAll('.reviews-start__rate-star')

    for (let i = 0; i < integer; i++) {
        stars[i].classList.add('_active')
    }

    if (integer < 5) {
        stars[integer].children[0].style.background = `linear-gradient(to right, #FCBF47 ${float * 10}%, #D5D5D6 ${float * 10}%, #D5D5D6 ${100 - float * 10}%)`
    }
}

function confirm(btn) {
    const wrapper = btn.closest('.next')

    wrapper.classList.add('_done')

    let next = wrapper.nextElementSibling
    next.classList.remove('_blur')
    next.scrollIntoView({ block: 'start', behavior: 'smooth' })


    while (next && !next.classList.contains('next')) {
        next.classList.remove('_hide')
        next = next.nextElementSibling
    }

    if (!next) return

    next.classList.remove('_hide')
    next.nextElementSibling.classList.remove('_hide')
    next.nextElementSibling.classList.add('_blur')
}

formInit()
function formInit() {
    const btn = document.querySelector('.next')
    if (!btn) return

    const next = btn.nextElementSibling

    if (next) next.classList.add('_blur')

    let afterNext = next.nextElementSibling

    while (afterNext) {
        afterNext.classList.add('_hide')
        afterNext = afterNext.nextElementSibling
    }
}

stagesIntersectionObserver()
function stagesIntersectionObserver() {
    const stages = document.querySelectorAll('.bfl-stages__item')

    if (stages.length > 0) {
        const intersectionObserver = new IntersectionObserver(f, { rootMargin: '-30%' })

        stages.forEach(stage => intersectionObserver.observe(stage))

        function f(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const item = entry.target

                    item.classList.add('_ready')

                    observer.unobserve(item)
                }
            })
        }
    }
}

stagesMutationObserver()
function stagesMutationObserver() {
    const list = document.querySelector('.bfl-stages__main-list')
    if (!list) return

    const mutationObserver = new MutationObserver(f)
    const options = { attributeFilter: ['class'], subtree: true }

    mutationObserver.observe(list, options)

    function f(entries, observer) {
        entries.forEach(entry => {
            observer.disconnect()
            const item = entry.target
            const prev = item.previousElementSibling
            const next = item.nextElementSibling

            if (item.classList.contains('_first')) {
                if (item.classList.contains('_ready')) {
                    if (!item.classList.contains('_active')) item.classList.add('_active')
                    setTimeout(() => {
                        if (!item.classList.contains('_loaded')) item.classList.add('_loaded')
                        if (next) {
                            if (!next.classList.contains('_go')) next.classList.add('_go')
                        }
                    }, 2000)
                }
            } else {
                if (prev.classList.contains('_loaded')) {
                    if (item.classList.contains('_ready') && item.classList.contains('_go')) {
                        if (!item.classList.contains('_active')) item.classList.add('_active')
                        setTimeout(() => {
                            if (!item.classList.contains('_loaded')) item.classList.add('_loaded')
                            if (next) {
                                if (!next.classList.contains('_go')) next.classList.add('_go')
                            } else {
                                observer.disconnect()
                                return
                            }
                        }, 2000)
                    }
                }
            }

            observer.observe(list, options)
        })
    }
}

reviewsVideoInit()
function reviewsVideoInit() {
    const reviews = document.querySelectorAll('.reviews-video__slider-item')
    if (reviews.length === 0) return

    reviews.forEach(review => {
        const link = review.href
        const img = getYoutubeImage(link)

        review.style.backgroundImage = `url("${img}")`
    })
}

function getYoutubeImage(url, quality) {
    if (url) {
        let videoId, result;

        if (result = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)) {
            videoId = result.pop()
        } else if (result = url.match(/youtu.be\/(.{11})/)) {
            videoId = result.pop()
        }

        if (videoId) {
            if (!quality) quality = 'high'

            let qualityKey = 'maxresdefault'

            if (quality == 'low') {
                qualityKey = 'sddefault'
            } else if (quality == 'medium') {
                qualityKey = 'mqdefault'
            } else if (quality == 'high') {
                qualityKey = 'hqdefault'
            }

            return `https://img.youtube.com/vi/${videoId}/${qualityKey}.jpg`
        }
    }

    return false
}

function openPopup(btn) {
    const type = btn.getAttribute('data-type')
    const popupWrapper = document.querySelector('.popup__wrapper')
    const popup = popupWrapper.querySelector(`.popup[data-type="${type}"]`)

    document.body.style.paddingRight = scrollbarWidth() + 'px'
    document.body.classList.add('_modal')
    setTimeout(() => {
        popupWrapper.classList.add('_active')
        popup.classList.add('_active')
    }, 0)
}

function closePopup(el) {
    const e = window.event
    const activePopup = el.querySelector('.popup._active')
    const privacyPopup = el.querySelector('.privacy._active')

    if (!e.target.closest('.popup') && !e.target.closest('.privacy')) {
        if (activePopup && privacyPopup) {
            privacyPopup.classList.remove('_active')

            return
        }

        el.classList.remove('_active')
        activePopup && activePopup.classList.remove('_active')
        privacyPopup && privacyPopup.classList.remove('_active')

        setTimeout(() => {
            document.body.style.paddingRight = 'unset'
            document.body.classList.remove('_modal')
        }, 200)
    }
}

function closeFromBtn(btn) {
    const wrapper = btn.closest('.popup__wrapper')
    const active = wrapper.querySelector('.popup._active') || wrapper.querySelector('.privacy._active')

    wrapper.classList.remove('_active')
    active.classList.remove('_active')
    setTimeout(() => {
        document.body.style.paddingRight = 'unset'
        document.body.classList.remove('_modal')
    }, 200)
}

function privacy() {
    const e = window.event
    const eType = e.type
    e.stopPropagation()

    if (eType === 'click') {
        const wrapper = e.target.parentNode
        const input = wrapper.previousElementSibling
        const checked = input.checked

        input.checked = !checked
    }

    const popupWrapper = document.querySelector('.popup__wrapper')
    const popup = popupWrapper.querySelector('.privacy')

    document.body.style.paddingRight = scrollbarWidth() + 'px'
    document.body.classList.add('_modal')
    setTimeout(() => {
        popupWrapper.classList.add('_active')
        popup.classList.add('_active')
    }, 0)

    return false
}

function scrollbarWidth() {
    const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )
    const windowHeight = window.innerHeight

    if (scrollHeight > windowHeight) {
        const inner = document.createElement('p'),
            outer = document.createElement('div')

        inner.style.width = "100%"
        inner.style.height = "200px"
        outer.style.position = "absolute"
        outer.style.top = "0px"
        outer.style.left = "0px"
        outer.style.visibility = "hidden"
        outer.style.width = "200px"
        outer.style.height = "150px"
        outer.style.overflow = "hidden"
        outer.appendChild(inner)
        document.body.appendChild(outer)

        let w1 = inner.offsetWidth

        outer.style.overflow = 'scroll'

        let w2 = inner.offsetWidth

        if (w1 == w2) w2 = outer.clientWidth
        document.body.removeChild(outer)

        return (w1 - w2)
    }

    return 0
}

function goTo(btn) {
    const link = btn.getAttribute('data-link')

    const anchor = document.querySelector(`section[data-link="${link}"]`)
    anchor.scrollIntoView({ block: 'start', behavior: 'smooth' })
}

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

function validatePhone(value) {
    const result = value.replace(/[\(\)\+\s\-\_]/g, '')

    return result.length === 11
}

const tel = document.querySelectorAll('[name="phone"]')
Inputmask({
    'mask': '+7 (999) 999-99-99',
    showMaskOnHover: false,
}).mask(tel)

function clearError(input) {
    input.classList.remove('_error')
}

function checkName(input) {
    const name = input.value.trim()

    if (!name) input.classList.add('_error')
}

function checkEmail(input) {
    const mail = input.value.trim()
    if (!mail) return

    // const isValid = validateEmail(mail)
    // if (!isValid) input.classList.add('_error')
}

function checkPhone(input) {
    const phone = input.value

    const isValid = validatePhone(phone)
    if (!isValid) input.classList.add('_error')
}


function closepopup2() {
    const wrapper = document.querySelector('.popup__wrapper')
    const active = wrapper.querySelector('.popup._active')
    
    wrapper.classList.remove('_active')
    active.classList.remove('_active')

    setTimeout(() => {
        document.body.style.paddingRight = 'unset'
        document.body.classList.remove('_modal')

        const inputs = active.querySelectorAll('.popup__form-input')
        inputs.forEach(input => {
            input.value = ''
            input.classList.remove('_error')
        })
    }, 200)
}
