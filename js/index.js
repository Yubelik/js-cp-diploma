let dataSave;
const url = 'https://jscp-diplom.netoserver.ru/';
const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded'
});
const body = new URLSearchParams({
  'event': 'update'
});
//для удаленного сервер
fetch(url, {
    method: 'POST',
    headers: headers,
    body: body
  })
  .then(response => response.json())
  .then(data => {
      //ответ от сервера = объект 
      console.log(data);
      console.log(data.films.result);
    dataSave 
    data.films.result.forEach((result,index,arr) => {
            // Ищем main
        const mainElement = document.querySelector('main');
            // Создаем элемент selection
            const movieSection = document.createElement("section");
            movieSection.classList.add("movie");
            mainElement.appendChild(movieSection);

            let movieInfoDiv = document.createElement('div');
            movieInfoDiv.classList.add('movie__info');
            movieSection.append(movieInfoDiv);
            
            let moviePosterDiv = document.createElement('div');
            moviePosterDiv.classList.add('movie__poster');
            movieInfoDiv.append(moviePosterDiv);
            
            let moviePosterImg = document.createElement('img');
            moviePosterImg.classList.add('movie__poster-image');
            moviePosterImg.src = 'i/poster2.jpg';
            moviePosterImg.alt = 'Альфа постер';
            moviePosterDiv.append(moviePosterImg);
            
            let movieDescriptionDiv = document.createElement('div');
            movieDescriptionDiv.classList.add('movie__description');
            movieInfoDiv.append(movieDescriptionDiv);
            
            let movieTitle = document.createElement('h2');
            movieTitle.classList.add('movie__title');
            movieTitle.textContent = result.film_name;
            localStorage.setItem(`film_name, film_id`, `${result.id}, ${result.film_name}`);
            
            
            movieDescriptionDiv.append(movieTitle);
            
            let movie__synopsis = document.createElement('p');
            movie__synopsis.classList.add('movie__synopsis');
            movie__synopsis.textContent = result.film_description;
            movieDescriptionDiv.append(movie__synopsis);

            let movieData = document.createElement('p');
            movieData.classList.add('movie__data');
            movieDescriptionDiv.append(movieData);

            let movieDataDuration = document.createElement('span');
            movieDataDuration.classList.add('movie__data-duration');
            movieDataDuration.textContent = result.film_duration;
            movieData.append(movieDataDuration);

            let movieDataOrigin = document.createElement('span');
            movieDataOrigin.classList.add('movie__data');
            movieDataOrigin.textContent = result.film_origin;
            movieData.append(movieDataOrigin);

            let movieSeancesHall = document.createElement('div');
            movieSeancesHall.classList.add('movie-seances__hall');
            movieSection.append(movieSeancesHall);

                    let hallName = null;
                    // перебираем все залы
                    
                    data.halls.result.forEach((hall, index, arr) => {
                        //сохраняем с сторадж 
                        localStorage.setItem('hall', hall);
                        dataSave = localStorage.setItem('hall.hall_config', hall.hall_config);

                        data.seances.result.forEach((seance) => {
                            
                          if (seance.seance_hallid === hall.hall_id && seance.seance_filmid === result.film_id) {

                             let movieSeancesHallTitle = document.createElement('h3');
                             const seancesList = document.createElement('ul');
                             
                            if (hallName === null) {
                                hallName = hall.hall_name;
                               
                              movieSeancesHallTitle.classList.add('movie-seances__hall-title');
                              movieSeancesHallTitle.textContent = hall.hall_name;
                              movieSeancesHall.append(movieSeancesHallTitle);
                              // добавляем время сеансов
                            seancesList.classList.add('movie-seances__list');
                            movieSeancesHall.appendChild(seancesList);
                            let timeBlock1 = document.createElement('li');
                            timeBlock1.classList.add('movie-seances__time-block');
                            let timeLink1 = document.createElement('a');
                            timeLink1.classList.add('movie-seances__time');
                            timeLink1.setAttribute('href', 'hall.html');
                            timeLink1.textContent = seance.seance_time;
                            timeBlock1.appendChild(timeLink1);
                            seancesList.appendChild(timeBlock1);
                              } else if (hall.hall_name !== hallName) {
                                hallName = hall.hall_name;
                                movieSeancesHallTitle.classList.add('movie-seances__hall-title');
                                movieSeancesHallTitle.textContent = hall.hall_name;
                                movieSeancesHall.append(movieSeancesHallTitle);
                                seancesList.classList.add('movie-seances__list');
                                movieSeancesHall.appendChild(seancesList);
                        
                                let timeBlock1 = document.createElement('li');
                                timeBlock1.classList.add('movie-seances__time-block');
                                let timeLink1 = document.createElement('a');
                                timeLink1.classList.add('movie-seances__time');
                                timeLink1.setAttribute('href', 'hall.html');
                                timeLink1.textContent = seance.seance_time;
                                timeBlock1.appendChild(timeLink1);
                                seancesList.appendChild(timeBlock1);
                              } else {
                                console.log(`seance_time: ${seance.seance_time}`);
                                const seancesList = document.createElement('ul');
                                seancesList.classList.add('movie-seances__list');
                                movieSeancesHall.appendChild(seancesList);
                                let timeBlock1 = document.createElement('li');
                                timeBlock1.classList.add('movie-seances__time-block');
                                let timeLink1 = document.createElement('a');
                                timeLink1.classList.add('movie-seances__time');
                                timeLink1.setAttribute('href', 'hall.html');
                                timeLink1.textContent = seance.seance_time;
                                timeBlock1.appendChild(timeLink1);
                                seancesList.append(timeBlock1);
                                }
                          }
                        });
                      });
                })  
            })
.catch(error => console.error(error));


const movieSeancesTime = document.querySelector('.movie-seances__time');
const movieSelector = document.querySelector('.movie');

movieSeancesTime.addEventListener('click', function(event) {
    event.preventDefault();
    const timeValue = event.target.innerHTML;
    const movieNameSelector = movieSelector.querySelector('.movie__title');
    const movieName = movieNameSelector.innerHTML;


    localStorage.setItem('timeFilm', timeValue);
    console.log("timeValue ="+localStorage.getItem('timeFilm', timeValue));

    localStorage.setItem('nameFilm', movieName);
    console.log("nameFilm ="+localStorage.getItem('nameFilm', movieName));
    
  
});