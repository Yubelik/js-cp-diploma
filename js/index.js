const dayWeekList = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

document.addEventListener("DOMContentLoaded", () => {
  const dayNumberElements = document.querySelectorAll(".page-nav__day-number");
  const dayWeekElements = document.querySelectorAll(".page-nav__day-week");

  const today = new Date();
  today.setHours(0, 0, 0);

  dayNumberElements.forEach((dayNumberElement, item) => {
    const day = new Date(today.getTime() + (item * 24 * 60 * 60 * 1000));
    const timestamp = Math.trunc(day / 1000);
    dayNumberElement.innerHTML = `${day.getDate()},`;
    dayWeekElements[item].innerHTML = dayWeekList[day.getDay()];
    const link = dayNumberElement.parentNode;
    link.dataset.timeStamp = timestamp;
    if (dayWeekElements[item].innerHTML === 'Вс' || dayWeekElements[item].innerHTML === 'Сб') {
      link.classList.add('page-nav__day_weekend');
    } else {
      link.classList.remove('page-nav__day_weekend');
    }
  });




const movieSeancesTime = document.querySelectorAll('.movie-seances__time-block');
const movieSelector = document.querySelector('.movie');

// console.log("movieSeancesTime ="+movieSeancesTime);
movieSeancesTime.forEach(movieSeancesTime => {
    // console.log("movieSeancesTime ="+movieSeancesTime)
    })

movieSeancesTime.forEach(movieSeancesTime => movieSeancesTime.addEventListener('click', function(event) {
    
    debugger;
    event.preventDefault();
    const timeValue = event.target.innerHTML;
    const movieNameSelector = movieSelector.querySelector('.movie__title');
    const movieName = movieNameSelector.innerHTML;


    localStorage.setItem('timeFilm', timeValue);
    console.log("timeValue ="+localStorage.getItem('timeFilm', timeValue));

    localStorage.setItem('nameFilm', movieName);
    console.log("nameFilm ="+localStorage.getItem('nameFilm', movieName));

    //сохраняем с сторадж 
    localStorage.setItem('hall', data.halls.result.hall_config);
    // dataSave = localStorage.setItem('hall.hall_config', hall.hall_config);


    localStorage.setItem(`film_name, film_id`, `${data.films.result.id}, ${data.films.result.film_name}`);    
    })
)

const url = 'https://jscp-diplom.netoserver.ru/';
const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded'
});
const body = new URLSearchParams({
  'event': 'update'
});





//запрос данных с сервера
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
    

      const main = document.querySelector("main");
      data.films.forEach((film) => {
        let seancesHTML = '';
        const filmId = film.film_id;
        data.halls.forEach((hall) => {
          const seances = data.seances.filter((seance) => ((seance.seance_hallid == hall.hall_id) && (seance.seance_filmid == filmId)));
          if (seances.length > 0) {
            seancesHTML += `
                   <div class="movie-seances__hall">
                     <h3 class="movie-seances__hall-title">${hall.hall_name}</h3>
                     <ul class="movie-seances__list">`;
            seances.forEach((seance) => {
              seancesHTML += `<li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html" data-film-name="${film.film_name}" data-film-id="${film.film_id}" data-hall-id="${hall.hall_id}" data-hall-name="${hall.hall_name}" data-price-vip="${hall.hall_price_vip}" data-price-standart="${hall.hall_price_standart}" data-seance-id="${seance.seance_id}" data-seance-start="${seance.seance_start}" data-seance-time="${seance.seance_time}">${seance.seance_time}</a></li>`;
            });
            seancesHTML += `
                     </ul>
                   </div>`;
          }
        });
        if (seancesHTML) {
          main.innerHTML += `
            <section class="movie">
              <div class="movie__info">
                <div class="movie__poster">
                  <img class="movie__poster-image" alt="Звёздные войны постер" src="${film.film_poster}">
                </div>
                <div class="movie__description">
                  <h2 class="movie__title">${film.film_name}</h2>
                  <p class="movie__synopsis">${film.film_description}</p>
                  <p class="movie__data">
                    <span class="movie__data-duration">${film.film_duration} мин.</span>
                    <span class="movie__data-origin">${film.film_origin}</span>
                  </p>
                </div>
              </div>
              ${seancesHTML}
            </section>
              `
        }
      })  

    
    // Ищем main
    const mainElement = document.querySelector('main');
    data.films.result.forEach((result,index,arr) => {
         
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

                    let hallName = null;
                    // перебираем все залы
                    
                    data.halls.result.forEach((hall, index, arr) => {
                        

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

});



"use strict";



const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method || "POST", options.url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(options.params);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            const response = JSON.parse(xhr.responseText);
            for (let key in response) {
              if (response[key].err) {
                alert(`Ошибка обращения к базе данных ${response[key].err}: ${response[key].errMessage}`);
                return;
              }
            }
            options.callback(response);
          } catch (err) {
            alert(`Ошибка разбора ответа сервера: ${err.message}`);
          }
        } else {
          alert(`Ошибка запроса к серверу: ${xhr.status} ${xhr.statusText}`);
        }
      }
    };
  };



  

const dayWeekList = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

document.addEventListener("DOMContentLoaded", () => {
  // Update navigation feed with date
  const dayNumberElements = document.querySelectorAll(".page-nav__day-number");
  const dayWeekElements = document.querySelectorAll(".page-nav__day-week");

  const today = new Date();
  today.setHours(0, 0, 0);

  dayNumberElements.forEach((dayNumberElement, i) => {
    const day = new Date(today.getTime() + (i * 24 * 60 * 60 * 1000));
    const timestamp = Math.trunc(day / 1000);
    dayNumberElement.innerHTML = `${day.getDate()},`;
    dayWeekElements[i].innerHTML = dayWeekList[day.getDay()];

    const link = dayNumberElement.parentNode;
    link.dataset.timeStamp = timestamp;

    if (dayWeekElements[i].innerHTML === 'Вс' || dayWeekElements[i].innerHTML === 'Сб') {
      link.classList.add('page-nav__day_weekend');
    } else {
      link.classList.remove('page-nav__day_weekend');
    }
  });



// Сайт где списал https://github.com/DeTovelli/js-cp-diploma-work/blob/main/js/createRequest.js  

//   createRequest({
//     url: `https://jscp-diplom.netoserver.ru/`,
//     params: "event=update",
//     callback: (resp) => {
//       const data = {};
//       data.seances = resp.seances.result; // Get a list of sessions
//       data.films = resp.films.result; // Get a list of movies
//       data.halls = resp.halls.result; // Get a list of halls
//       data.halls = data.halls.filter((hall) => hall.hall_open == 1);
//       console.log(data);


//       // Content rendering
//       const main = document.querySelector("main");
//       data.films.forEach((film) => {
//         let seancesHTML = '';
//         const filmId = film.film_id;
//         data.halls.forEach((hall) => {
//           const seances = data.seances.filter((seance) => ((seance.seance_hallid == hall.hall_id) && (seance.seance_filmid == filmId)));
//           if (seances.length > 0) {
//             seancesHTML += `
//                    <div class="movie-seances__hall">
//                      <h3 class="movie-seances__hall-title">${hall.hall_name}</h3>
//                      <ul class="movie-seances__list">`;
//             seances.forEach((seance) => {
//               seancesHTML += `<li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html" data-film-name="${film.film_name}" data-film-id="${film.film_id}" data-hall-id="${hall.hall_id}" data-hall-name="${hall.hall_name}" data-price-vip="${hall.hall_price_vip}" data-price-standart="${hall.hall_price_standart}" data-seance-id="${seance.seance_id}" data-seance-start="${seance.seance_start}" data-seance-time="${seance.seance_time}">${seance.seance_time}</a></li>`;
//             });
//             seancesHTML += `
//                      </ul>
//                    </div>`;
//           }
//         });
//         if (seancesHTML) {
//           main.innerHTML += `
//             <section class="movie">
//               <div class="movie__info">
//                 <div class="movie__poster">
//                   <img class="movie__poster-image" alt="Звёздные войны постер" src="${film.film_poster}">
//                 </div>
//                 <div class="movie__description">
//                   <h2 class="movie__title">${film.film_name}</h2>
//                   <p class="movie__synopsis">${film.film_description}</p>
//                   <p class="movie__data">
//                     <span class="movie__data-duration">${film.film_duration} мин.</span>
//                     <span class="movie__data-origin">${film.film_origin}</span>
//                   </p>
//                 </div>
//               </div>
//               ${seancesHTML}
//             </section>
//               `
//         }
//       })
      
//       const dayLinks = Array.from(document.querySelectorAll(".page-nav__day"));
//       const movieSeances = Array.from(document.querySelectorAll(".movie-seances__time"));
      
//       const getTimeStampDay = (event) => {
//         let timeStampDay = Number(event.target.dataset.timeStamp);
//         if (isNaN(timeStampDay)) {
//           timeStampDay = Number(event.target.closest(".page-nav__day").dataset.timeStamp);
//         }
//         return timeStampDay;
//       };
      
//       const updateSeances = (timeStampDay) => {
//         movieSeances.forEach((movieSeance) => {
//           const timeStampSeanceDay = Number(movieSeance.dataset.seanceStart) * 60;
//           const timeStampSeance = timeStampDay + timeStampSeanceDay;
//           const timeStampNow = Math.trunc(+new Date() / 1000);
//           movieSeance.dataset.seanceTimeStamp = timeStampSeance;
//           movieSeance.classList.toggle(
//             "acceptin-button-disabled",
//             timeStampSeance - timeStampNow <= 0
//           );
//         });
//       };
      
//       dayLinks.forEach((dayLink) =>
//         dayLink.addEventListener("click", (event) => {
//           event.preventDefault();
//           document.querySelector(".page-nav__day_chosen").classList.remove("page-nav__day_chosen");
//           dayLink.classList.add("page-nav__day_chosen");
//           const timeStampDay = getTimeStampDay(event);
//           updateSeances(timeStampDay);
//         })
//       );
      
//       dayLinks[0].click();
      
//       movieSeances.forEach((movieSeance) =>
//         movieSeance.addEventListener("click", (event) => {
//           const { hallId } = event.target.dataset;
//           const selectSeanse = {
//             ...event.target.dataset,
//             hallConfig: data.halls.find((hall) => hall.hall_id == hallId).hall_config,
//           };
//           localStorage.clear();
//           localStorage.setItem("selectSeanse", JSON.stringify(selectSeanse));
//         })
//       );


//     }
//   })
// });
