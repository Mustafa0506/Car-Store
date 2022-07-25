let a = confirm('Желаете посмотреть на машины')

let carOne = 'malibu'
let carTwo = 'gentra'
let carThree = 'captiva'

let engineOne = 1.6
let engineTwo = 1.5
let engineThree = 1.7


let colorOne = 'black'
let colorTwo = 'gray'
let colorThree = 'red'
let colorFour = 'green'


let carOnePrice = 30000
let carTwoPrice = 15000
let carThreePrice = 40000

if (a === true) {
    let b = prompt(`Выберите машину; ${carOne}, ${carTwo}, ${carThree}`)

    // carOne

    if (b.toLowerCase() === carOne) {
        alert(`Базовая ${carOne} выглядит так:
Двигатель: ${engineOne}
Цвет: Белый
Цена: ${carOnePrice}
        `)
        let c = confirm(`Желаете дополнить что-то в ${carOne} `)
        if (c === true) {
            let d = prompt(`Желаете ли поменять цвет в ${carOne}
доступно: ${colorOne}, ${colorTwo}, ${colorThree}, ${colorFour}
            `)
            if (d === colorOne || d === colorTwo || d === colorThree || d === colorFour) {
                let e = confirm(`Вы выбрали цвет ${d}
желаете продолжить настройку комплектации? 
                `)
                if (e === true) {
                    let toningOne = confirm('Хорошо,  может вы бы хотели тонировку?')
                    if (toningOne === true) {
                        let wantKeepGoing = confirm('Желаете продолжить настройку комплектации? ')
                        if (wantKeepGoing === true) {
                            let hatchTwo = confirm('Хотите ли вы люк на свою машину')
                            if (hatchTwo === true) {
                                alert(`Коплектация завершина стоимость ${carOne} вместе со всем стоит ${carOnePrice + ((carOnePrice * 15 / 100) + (carOnePrice * 5 / 100) + (carOnePrice * 2 / 100))} `)
                            } else {
                                alert(`Ваша машина стоит ${carOnePrice + ((carOnePrice * 5 / 100) + (carOnePrice * 2 / 100))}`)
                            }
                        } else {
                            alert(`Прекрасно ваш ${carOne} стоит ${carOnePrice + ((carOnePrice * 5 / 100) + (carOnePrice * 2 / 100))}`)
                        }
                    } else if (toningOne === false) {
                        let hatchOne = confirm('Ну может вы хотите люк')
                        if (hatchOne === true) {
                            alert(`Прекрасно ваш ${carOne} стоит ${carOnePrice + ((carOnePrice * 15 / 100) + (carOnePrice * 2 / 100))}`)
                        } else {
                            alert(`Ваш ${carOne} стоит ${carOnePrice + (carOnePrice * 2 / 100)}`)
                        }
                    }
                } else {
                    alert(`Ваш ${carOne} стоит ${carOnePrice + (carOnePrice * 2 / 100)}`)
                }
            } else if (d === '' || d === false) {
                let toning = confirm('Хорошо, тогда может вы бы хотели тонировку?')
                if (toning === true) {
                    let keepGoing = confirm('Прекрасно,теперь у вас есть тонировка, продолжаем?')
                    if (keepGoing === true) {
                        let lastQuetion = confirm('И на последок хотители вы люк')
                        if (lastQuetion === true) {
                            alert(`Чудно ваш ${carOne} стоит ${carOnePrice + ((carOnePrice * 15 / 100) + (carOnePrice * 5 / 100))}`)
                        } else {
                            alert(`Чудно ваш ${carOne} стоит ${carOnePrice + (carOnePrice * 5 / 100)}`)
                        }
                    } else {
                        alert(`Ваш ${carOne} стоит ${carOnePrice + (carOnePrice * 5 / 100)}`)
                    }
                } else if (toning === false) {
                    let hatch = confirm('Ну может вы хотите люк')
                    if (hatch === true) {
                        alert(`Коплектация завершина стоимость ${carOne} вместе со всем стоит ${carOnePrice + (carOnePrice * 15 / 100)} `)
                    } else {
                        alert(`С вас ${carOnePrice}`)
                    }
                }
            }
        } else if (c === false) {
            let wantBuy = confirm(`Хотите ли купить ${carOne}`)
            if (wantBuy === true) {
                alert(`С вас ${carOnePrice}`)
            } else {
                alert('Приходите еще')
            }
        }
    }

    // carTwo

    if (b.toLowerCase() === carTwo) {
        alert(`Базовая ${carTwo} выглядит так:
Двигатель: ${engineTwo}
Цвет: Белый
Цена: ${carTwoPrice}
        `)
        let c = confirm(`Желаете дополнить что-то в ${carTwo} `)
        if (c === true) {
            let d = prompt(`Желаете ли поменять цвет в ${carTwo}
доступно: ${colorOne}, ${colorTwo}, ${colorThree}, ${colorFour}
            `)
            if (d === colorOne || d === colorTwo || d === colorThree || d === colorFour) {
                let e = confirm(`Вы выбрали цвет ${d}
желаете продолжить настройку комплектации? 
                `)
                if (e === true) {
                    let toningOne = confirm('Хорошо,  может вы бы хотели тонировку?')
                    if (toningOne === true) {
                        let wantKeepGoing = confirm('Желаете продолжить настройку комплектации? ')
                        if (wantKeepGoing === true) {
                            let hatchTwo = confirm('Хотите ли вы люк на свою машину')
                            if (hatchTwo === true) {
                                alert(`Коплектация завершина стоимость ${carTwo} вместе со всем стоит ${carTwoPrice + ((carTwoPrice * 15 / 100) + (carTwoPrice * 5 / 100) + (carTwoPrice * 2 / 100))} `)
                            } else {
                                alert(`Ваша машина стоит ${carTwoPrice + ((carTwoPrice * 5 / 100) + (carTwoPrice * 2 / 100))}`)
                            }
                        } else {
                            alert(`Прекрасно ваш ${carTwo} стоит ${carTwoPrice + ((carTwoPrice * 5 / 100) + (carTwoPrice * 2 / 100))}`)
                        }
                    } else if (toningOne === false) {
                        let hatchOne = confirm('Ну может вы хотите люк')
                        if (hatchOne === true) {
                            alert(`Прекрасно ваш ${carTwo} стоит ${carTwoPrice + ((carTwoPrice * 15 / 100) + (carTwoPrice * 2 / 100))}`)
                        } else {
                            alert(`Ваш ${carTwo} стоит ${carTwoPrice + (carTwoPrice * 2 / 100)}`)
                        }
                    }
                } else {
                    alert(`Ваш ${carTwo} стоит ${carTwoPrice + (carTwoPrice * 2 / 100)}`)
                }
            } else if (d === '' || d === false) {
                let toning = confirm('Хорошо, тогда может вы бы хотели тонировку?')
                if (toning === true) {
                    let keepGoing = confirm('Прекрасно,теперь у вас есть тонировка, продолжаем?')
                    if (keepGoing === true) {
                        let lastQuetion = confirm('И на последок хотители вы люк')
                        if (lastQuetion === true) {
                            alert(`Чудно ваш ${carTwo} стоит ${carTwoPrice + ((carTwoPrice * 15 / 100) + (carTwoPrice * 5 / 100))}`)
                        } else {
                            alert(`Чудно ваш ${carTwo} стоит ${carTwoPrice + (carTwoPrice * 5 / 100)}`)
                        }
                    } else {
                        alert(`Ваш ${carTwo} стоит ${carTwoPrice + (carTwoPrice * 5 / 100)}`)
                    }
                } else if (toning === false) {
                    let hatch = confirm('Ну может вы хотите люк')
                    if (hatch === true) {
                        alert(`Коплектация завершина стоимость ${carTwo} вместе со всем стоит ${carTwoPrice + (carTwoPrice * 15 / 100)} `)
                    } else {
                        alert(`С вас ${carTwoPrice}`)
                    }
                }
            }
        } else if (c === false) {
            let wantBuy = confirm(`Хотите ли купить ${carOne}`)
            if (wantBuy === true) {
                alert(`С вас ${carOnePrice}`)
            } else {
                alert('Приходите еще')
            }
        }
    }
}