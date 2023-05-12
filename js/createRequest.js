


const url = 'https://jscp-diplom.netoserver.ru/';
const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded'
});
const body = new URLSearchParams({
  'event': 'update'
});

//для локальнойго файла
// fetch('data.json')
// //   .then(response => response.json())
// //   .then(data => {
// //     // Обработка данных
// //   })
// //   .catch(error => {
// //     console.error('Ошибка загрузки данных:', error);
// //   }); 

//для удаленного сервер
// fetch(url, {
//   method: 'POST',
//   headers: headers,
//   body: body
// })
// .then(response => response.json())
// .then(data => {
//     //ответ от сервера = объект 
//     console.log(data);
//     // console.log(data.films.result[0].film_name);
    

    data.halls.result.forEach((result,index,) => {
        //сохраним с localStorg id фильма
        localStorage.setItem('hall_id', result.hall_id);
        localStorage.setItem('film_id', data.films.result[index].film_id);
        console.log(localStorage.getItem('hall_id', result.hall_id));
        console.log(localStorage.getItem('film_id', data.films.result[index].film_id));
            // Ищем main
        const mainElement = document.querySelector('main');
            // Создаем элемент selection
            const section = document.createElement("section");
            section.classList.add("buying");
            mainElement.appendChild(section);

            const buyingInfo = document.createElement("div");
            buyingInfo.classList.add("buying__info");
            section.appendChild(buyingInfo);
            
            const buyingInfoDescription = document.createElement("div");
            buyingInfoDescription.classList.add("buying__info-description");
            buyingInfo.appendChild(buyingInfoDescription);
            
            const title = document.createElement("h2");
            title.classList.add("buying__info-title");
            title.textContent = data.films.result[index].film_name;
            buyingInfoDescription.appendChild(title);
            
            const start = document.createElement("p");
            start.classList.add("buying__info-start");
            start.textContent = "Начало сеанса: 18:30";
            buyingInfoDescription.appendChild(start);
            
            const hall = document.createElement("p");
            hall.classList.add("buying__info-hall");
            hall.textContent = result.hall_name;
            buyingInfoDescription.appendChild(hall);
            
            const buyingInfoHint = document.createElement("div");
            buyingInfoHint.classList.add("buying__info-hint");
            buyingInfo.appendChild(buyingInfoHint);
            
            const hint = document.createElement("p");
            hint.innerHTML = "Тапните дважды,чтобы увеличить";
            buyingInfoHint.appendChild(hint);


            
            







        // const selectionElement = document.createElement('SECTION');
        // selectionElement.className = 'buying';
        //     //Добавляем в MAIN элемент SECTION
        // mainElement.append(selectionElement);
        
        //     // Создаем элемент div для Заголовка
        // const divElementHead1 = document.createElement('div');
        // divElementHead1.className = 'buying__info';
        // const divElementHead2 = document.createElement('div');
        // divElementHead2.className = 'buying__info-description';
        // const divElementHead2H2 = document.createElement('h2');
        // divElementHead2H2.className = 'buying__info-title';
        // divElementHead2H2.innerHTML = result.hall_name;

        // selectionElement.append(divElementHead1);
        // divElementHead1.append(divElementHead2);
        // divElementHead2.append(divElementHead2H2);

        
        // // Ищем buying__info-title
        // // const FilmElementHead = document.querySelector('buying__info-title');
        // const divFilmElement = document.createElement('div');
        // divFilmElement.className = 'buying__info-title';
        // // let v= data.films.result.film_name
        // // console.log(v);
        // divElementHead2H2.innerHTML = data.films.result.film_name;

      


        // // divElementHead1.className = result.hall_name;
        // // console.log(result.hall_name);

        //     // Создаем элемент div для кресел
        // const divElementArmchair = document.createElement('div');
        //     // Устанавливаем атрибуты элемента
        // divElementArmchair.className = 'conf-step__wrapper';
        //     // Устанавливаем содержимое элемента
        // divElementArmchair.innerHTML = result.hall_config;
        //     // Добавляем в SECTION элемент DIV 
        // // selectionElement.append(divElementArmchair);
    });
// })
// .catch(error => console.error(error));