const countriesApi = fetch('api.json') // api

let options = '' // сюда будем записовать html выпадающий список
let arr = [] // обьект с названиями стран и ссылкой на флаги

// получаем данные с api
countriesApi
    .then(data => data.json())
    .then(data => {
        data.forEach(el => {

            // делаем выпадающий список
            options += `
                <option>${el.name}</option>
            `
            let selectTouch = document.querySelector('select')
            selectTouch.innerHTML = options

            // заносим в массив данные с api
            let mass = {
                name: el.name,
                flag: el.media.flag
            }
            arr.push(mass)

        })

        // console.log(arr)
    })










