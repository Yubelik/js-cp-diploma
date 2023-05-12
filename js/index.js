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
    // debugger;
  
});


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
    //   console.log(data.films.result);


    data.films.result.forEach((result,index,) => {
        //сохраним с localStorg id фильма
        // localStorage.setItem('hall_id', result.hall_id);
        // localStorage.setItem('film_id', data.films.result[index].film_id);
        // console.log(localStorage.getItem('hall_id', result.hall_id));
        // console.log(localStorage.getItem('film_id', data.films.result[index].film_id));
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

            data.seances.result.forEach((resultSeance,index,) => {

            let movieSeancesHallTitle = document.createElement('h3');
            movieSeancesHallTitle.classList.add('movie-seances__hall-title');

            const idSeans = [resultSeance.seance_filmid];

            const resultData = idSeans.filter((idSeans) => idSeans == result.film_id );
            console.log("resultData = ",resultData);
            
            
            movieSeancesHallTitle.textContent = resultData 
                
                
            movieSeancesHall.append(movieSeancesHallTitle);
            })
    })




})
.catch(error => console.error(error));



