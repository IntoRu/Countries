const countriesApi = fetch('api.json') // api

let arr = []// обьект с названиями стран и ссылкой на флаги

// получаем данные с api
countriesApi
    .then(data => data.json())
    .then(data => {
        data.forEach(el => {
            // заносим в массив данные с api
            let mass = {
                name: el.name,
                flag: el.media.flag
            }
            arr.push(mass)

        })

        // сдесь будет проводится работа непосредственно с созданным обьектом
        // console.log(arr)
    })






