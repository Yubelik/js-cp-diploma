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

console.log('selectSeanse2',seanceString().filmName)




  const buttonAcceptin = document.querySelector('.acceptin-button');
  const buyingInfoTitle = document.querySelector('.buying__info-title');
  const buyingInfoStart = document.querySelector('.buying__info-start');
  const buyingInfoHall = document.querySelector('.buying__info-hall');
  const priceStandart = document.querySelector('.price-standart');
  const confStepWrapper = document.querySelector('.conf-step__wrapper');

  buyingInfoTitle.innerHTML = seanceString().filmName;
  buyingInfoStart.innerHTML = `Начало сеанса ${seanceString().seanceTime}`;
  buyingInfoHall.innerHTML = seanceString().hallName;
  priceStandart.innerHTML = seanceString().priceStandart;

  const params = `event=get_hallConfig&timestamp=${seanceString().seanceTimeStamp}&hallId=${seanceString().hallId}&seanceId=${seanceString().seanceId}`;

  
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
  })