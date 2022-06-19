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
                    return coun.name == el.value
                })
                getCountry.forEach(el => {
                    console.log(el.flag)
                    img.src = el.flag
                })
            })
        })
    })






