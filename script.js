const countriesApi = fetch('api.json') // api

let arr = []// обьект с названиями стран и ссылкой на флаги
let options = '' // сюда будем записовать html выпадающий список

let img = document.querySelector('img')

const select = document.querySelector('select')

// получаем данные с api
countriesApi
    .then(data => data.json())
    .then(data => {
        data.forEach(el => {
            // заносим в массив данные с api
            let mass = {
                name: el.name,
                flag: el.media.flag,
                id: el.id
            }
            arr.push(mass)
        })

        // сдесь будет проводится работа непосредственно с созданным обьектом

        arr.forEach(el => {
            // делаем выпадающий список
            options += `
                <option>${el.name}</option>
            `
            select.innerHTML = `<option selected = 'selected'>Выберите страну</option>` + options
        })

        // настраиваем события клика для выпадающего писка
        let optionTouch = document.querySelectorAll('.select')
        optionTouch.forEach(el => {
            el.addEventListener('click', () => {
                // console.log(el.value) // значение каждого выпадающего списка
                const getCountry = arr.filter(coun => {
                    if (el.value == 'Выберите страну') {
                        img.src = ''
                    }
                    else {
                        return coun.name == el.value
                    }
                })
                getCountry.forEach(el => {
                    // console.log(el.flag)
                    img.src = el.flag
                })
            })
        })

        // живой поиск

        let input = document.querySelector('input')
        let btn = document.querySelector('button')

        btn.addEventListener('click', function () {
            arr.forEach(el => {
                if (el.name.toUpperCase() === input.value.toUpperCase()) { // без учёта регистра
                    img.src = el.flag
                }
            })
            input.value = ''
        })
    })








