const mainElement = document.querySelector('main');
let hall = localStorage.getItem('hall');
let hallHall_config = localStorage.getItem('hall.hall_config');



// hall.forEach((result,index,) => {
       
        const selectionElement = document.createElement('SECTION');
        selectionElement.className = 'buying';
            //Добавляем в MAIN элемент SECTION
        mainElement.append(selectionElement);
        
            // Создаем элемент div для Заголовка
        const divElementHead1 = document.createElement('div');
        divElementHead1.className = 'buying__info';
        const divElementHead2 = document.createElement('div');
        divElementHead2.className = 'buying__info-description';
        const divElementHead2H2 = document.createElement('h2');
        divElementHead2H2.className = 'buying__info-title';
        // divElementHead2H2.innerHTML = result.hall_name;

        selectionElement.append(divElementHead1);
        divElementHead1.append(divElementHead2);
        divElementHead2.append(divElementHead2H2);

        
        // Ищем buying__info-title
        // const FilmElementHead = document.querySelector('buying__info-title');
        const divFilmElement = document.createElement('div');
        divFilmElement.className = 'buying__info-title';
        // let v= data.films.result.film_name
        // console.log(v);
        // divElementHead2H2.innerHTML = data.films.result.film_name;

        const divBuyingInfoHint = document.createElement('div');
        divFilmElement.className = 'buying__info-hint';
        divElementHead1.append(divFilmElement);

        // divElementHead1.className = result.hall_name;
        // console.log(result.hall_name);

            // Создаем элемент div для кресел
        const divElementArmchair = document.createElement('div');
            // Устанавливаем атрибуты элемента
        divElementArmchair.className = 'conf-step__wrapper';
            // Устанавливаем содержимое элемента

        divElementArmchair.innerHTML = localStorage.getItem('hall.hall_config');;
            // Добавляем в SECTION элемент DIV 
        selectionElement.append(divElementArmchair);
    // });
