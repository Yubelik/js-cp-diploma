document.addEventListener("DOMContentLoaded", () => {

let seanceString = function seancesTake() {
  let selectSeanse = window.sessionStorage.getItem('selectSeanse')
  
  if (selectSeanse === null) {
    return undefined
  }

  // Если вдруг в хранилище оказался невалидный JSON предохраняемся от этого
  try {
    return JSON.parse(selectSeanse)
  } catch (e) {
    sessionStorage.removeItem('selectSeanse')
    return undefined
  }
}
const timestamp = seancesTake().seanceStart; 
const hallId = seancesTake().hallId; 
const seanceId = seancesTake().seanceId;

    const url = 'https://jscp-diplom.netoserver.ru/';
    const headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams({
    'event': 'event=get_hallConfig&timestamp=${value1}&hallId=${value2}&seanceId=${value3}'
    });
//запрос данных с сервера
fetch(url, {
  method: 'POST',
  headers: headers,
  body: body
})
.then(response => response.json())
.then(data => {
  console.log(data);
  console.log(data.films);

})
.catch(error => console.error(error));

  // const buttonAcceptin = document.querySelector('.acceptin-button');
  // const buyingInfoTitle = document.querySelector('.buying__info-title');
  // const buyingInfoStart = document.querySelector('.buying__info-start');
  // const buyingInfoHall = document.querySelector('.buying__info-hall');
  // const priceStandart = document.querySelector('.price-standart');
  // const confStepWrapper = document.querySelector('.conf-step__wrapper');

  // buyingInfoTitle.innerHTML = seanceString().filmName;
  // buyingInfoStart.innerHTML = `Начало сеанса ${seanceString().seanceTime}`;
  // buyingInfoHall.innerHTML = seanceString().hallName;
  // priceStandart.innerHTML = seanceString().priceStandart;

  // const params = `event=get_hallConfig&timestamp=${seanceString().seanceTimeStamp}&hallId=${seanceString().hallId}&seanceId=${seanceString().seanceId}`;

  
      const mainElement = document.querySelector('main');
      const selectionElement = document.createElement('buying');
            //Добавляем в MAIN элемент SECTION
      {
        selectionElement.innerHTML += `
        <section class="buying">
      <div class="buying__info">
        <div class="buying__info-description">
          <h2 class="buying__info-title">${seanceString().filmName}</h2>
          <p class="buying__info-start">Начало сеанса: ${seanceString().seanceTime}</p>
          <p class="buying__info-hall">${seanceString().hallName}</p>          
        </div>
        <div class="buying__info-hint">
          <p>Тапните дважды,<br>чтобы увеличить</p>
        </div>
      </div>


      <div class="conf-step">
        <div class="conf-step__wrapper">
          <div class="conf-step__row">
            ${seanceString().hallConfig}

            <div class="conf-step__legend">
          <div class="col">
            <p class="conf-step__legend-price"><span class="conf-step__chair conf-step__chair_standart"></span> Свободно (<span class="conf-step__legend-value price-standart">250</span>руб)</p>
            <p class="conf-step__legend-price"><span class="conf-step__chair conf-step__chair_vip"></span> Свободно VIP (<span class="conf-step__legend-value price-vip">350</span>руб)</p>            
          </div>
          <div class="col">
            <p class="conf-step__legend-price"><span class="conf-step__chair conf-step__chair_taken"></span> Занято</p>
            <p class="conf-step__legend-price"><span class="conf-step__chair conf-step__chair_selected"></span> Выбрано</p>                    
          </div>
        </div>
      </div>
      <button class="acceptin-button"  >Забронировать</button>
      </section>
        `
      }
      mainElement.append(selectionElement);

      // function selectSpan(event) {
      //   const clickedSpan = event.target;
      //   const isSelected = clickedSpan.classList.contains('conf-step__chair_selected');
        
      //   if (isSelected) {
      //     clickedSpan.classList.remove('conf-step__chair_selected');
      //   } else {
      //     clickedSpan.classList.add('conf-step__chair_selected');
      //   }
        
      //   // Считываем количество выбранных элементов по группам классов
      //   const standartSelected = document.querySelectorAll('.conf-step__chair_standart.conf-step__chair_selected').length;
      //   const vipSelected = document.querySelectorAll('.conf-step__chair_vip.conf-step__chair_selected').length;
        
      //   // Сохраняем значения в sessionStorage
      //   window.sessionStorage.setItem('standartSelected', standartSelected);
      //   window.sessionStorage.setItem('vipSelected', vipSelected);
      //   console.log(window.sessionStorage.getItem('vipSelected'));
        
      //   // Считаем сумму выбранных мест
      //   const standartPrice = 250;
      //   const vipPrice = 350;
        
      //   const totalStandartPrice = standartSelected * standartPrice;
      //   const totalVipPrice = vipSelected * vipPrice;
        
      //   const totalPrice = totalStandartPrice + totalVipPrice;
        
      //   // Сохраняем значение в sessionStorage
      //   window.sessionStorage.setItem('totalPrice', totalPrice);
      // }
      
      // const allSpans = document.querySelectorAll('span.conf-step__chair:not(.conf-step__chair_disabled):not(.conf-step__legend-price span.conf-step__chair)');
      
      // allSpans.forEach(span => {
      //   span.addEventListener('click', selectSpan);
      // });


      // function selectSpan(event) {
      //   const clickedSpan = event.target;
      //   const isSelected = clickedSpan.classList.contains('conf-step__chair_selected');
        
      //   if (isSelected) {
      //     clickedSpan.classList.remove('conf-step__chair_selected');
      //   } else {
      //     clickedSpan.classList.add('conf-step__chair_selected');
      //   }
        
      //   const standartSelected = document.querySelectorAll('.conf-step__chair_standart.conf-step__chair_selected');
      //   const vipSelected = document.querySelectorAll('.conf-step__chair_vip.conf-step__chair_selected');
        
      //   let selectedSeats = [];
        
      //   standartSelected.forEach(seat => {
      //     const row = seat.getAttribute('data-row');
      //     const seatNumber = seat.getAttribute('data-seat');
          
      //     selectedSeats.push({
      //       row: row,
      //       seat: seatNumber,
      //       type: 'standart'
      //     });
      //   });
        
      //   vipSelected.forEach(seat => {
      //     const row = seat.getAttribute('data-row');
      //     const seatNumber = seat.getAttribute('data-seat');
          
      //     selectedSeats.push({
      //       row: row,
      //       seat: seatNumber,
      //       type: 'vip'
      //     });
      //   });
        
      //   sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
      // }
      
      // const allSpans = document.querySelectorAll('span.conf-step__chair:not(.conf-step__chair_disabled):not(.conf-step__legend-price span.conf-step__chair)');
      
      // allSpans.forEach(span => {
      //   span.addEventListener('click', selectSpan);
      // });

      // function selectSpan(event) {
      //   const clickedSpan = event.target;
      //   const isSelected = clickedSpan.classList.contains('conf-step__chair_selected');
        
      //   if (isSelected) {
      //     clickedSpan.classList.remove('conf-step__chair_selected');
      //   } else {
      //     clickedSpan.classList.add('conf-step__chair_selected');
      //   }
        
      //   const standartSelected = document.querySelectorAll('.conf-step__chair_standart.conf-step__chair_selected');
      //   const vipSelected = document.querySelectorAll('.conf-step__chair_vip.conf-step__chair_selected');
        
      //   let selectedSeats = [];
        
      //   standartSelected.forEach(seat => {
      //     const row = seat.getAttribute('data-row');
      //     const seatNumber = seat.getAttribute('data-seat');
          
      //     selectedSeats.push(`${row}-${seatNumber}`);
      //   });
        
      //   vipSelected.forEach(seat => {
      //     const row = seat.getAttribute('data-row');
      //     const seatNumber = seat.getAttribute('data-seat');
          
      //     selectedSeats.push(`${row}-${seatNumber}`);
      //   });
        
      //   sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
      // }
      
      // const allSpans = document.querySelectorAll('span.conf-step__chair:not(.conf-step__chair_disabled):not(.conf-step__legend-price span.conf-step__chair)');
      
      // allSpans.forEach(span => {
      //   span.addEventListener('click', selectSpan);
      // });


      function selectSpan(event) {
        const clickedSpan = event.target;
        const isSelected = clickedSpan.classList.contains('conf-step__chair_selected');
        
        if (isSelected) {
          clickedSpan.classList.remove('conf-step__chair_selected');
        } else {
          clickedSpan.classList.add('conf-step__chair_selected');
        }
        
        const standartSelected = document.querySelectorAll('.conf-step__chair_standart.conf-step__chair_selected');
        const vipSelected = document.querySelectorAll('.conf-step__chair_vip.conf-step__chair_selected');
        
        let selectedSeats = [];
        
        standartSelected.forEach(seat => {
          const row = seat.closest('.conf-step__row');
          const rowNumber = row.getAttribute('data-row');
          const seatNumber = seat.getAttribute('data-seat');
          
          selectedSeats.push({
            row: rowNumber,
            seat: seatNumber,
            type: 'standart'
          });
        });
        
        vipSelected.forEach(seat => {
          const row = seat.closest('.conf-step__row');
          const rowNumber = row.getAttribute('data-row');
          const seatNumber = seat.getAttribute('data-seat');
          
          selectedSeats.push({
            row: rowNumber,
            seat: seatNumber,
            type: 'vip'
          });
        });
        
        sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
      }
      
      const allSpans = document.querySelectorAll('span.conf-step__chair:not(.conf-step__chair_disabled):not(.conf-step__legend-price span.conf-step__chair)');
      
      allSpans.forEach(span => {
        span.addEventListener('click', selectSpan);
      });
      
      const rows = document.querySelectorAll('.conf-step__row');
      
      rows.forEach((row, index) => {
        row.setAttribute('data-row', index + 1);
        const seats = row.querySelectorAll('.conf-step__chair');
        seats.forEach((seat, seatIndex) => {
          seat.setAttribute('data-seat', seatIndex + 1);
        })
      });
  })