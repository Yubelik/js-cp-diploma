let seanceString = function seancesTake() {
  let selectSeanse = window.sessionStorage.getItem("selectSeanse");

  if (selectSeanse === null) {
    return undefined;
  }

  // Если вдруг в хранилище оказался невалидный JSON предохраняемся от этого
  try {
    return JSON.parse(selectSeanse);
  } catch (e) {
    sessionStorage.removeItem("selectSeanse");
    return undefined;
  }
};

const timeStampSeance = seanceString().timeStampSeance;
console.log("timeStampSeance",timeStampSeance);
// console.log("hallConfig",seanceString().hallConfig);

const hallId = seanceString().hallId;
const seanceId = seanceString().seanceId;
const body = `event=get_hallConfig&timestamp=${timeStampSeance}&hallId=${hallId}&seanceId=${seanceId}`;

const url = "https://jscp-diplom.netoserver.ru/";
const headers = new Headers({
  "Content-Type": "application/x-www-form-urlencoded",
});

fetch(url, {
  method: "POST",
  headers: headers,
  body: body,
})
  .then((response) => response.json())
  .then((data) => {
    const mainElement = document.querySelector("main");
    const selectionElement = document.createElement("buying");
    //Добавляем в MAIN элемент SECTION
    if (data === null) {
      // если null, то используем html разметку по умолчанию
      selectionElement.innerHTML += `
      <section class="buying">
      <div class="buying__info">
        <div class="buying__info-description">
          <h2 class="buying__info-title">${seanceString().filmName}</h2>
          <p class="buying__info-start">Начало сеанса: ${
            seanceString().seanceTime
          }</p>
          <p class="buying__info-hall">${
            seanceString().hallName
          }</p>          
        </div>
        <div class="buying__info-hint">
          <p>Тапните дважды,<br>чтобы увеличить</p>
        </div>
      </div>


      <div class="conf-step">
        <div class="conf-step__wrapper">
        ${seanceString().hallConfig}
        <div class="conf-step__legend">
            <div class="col">
              <p class="conf-step__legend-price"><span class="conf-step__chair conf-step__chair_standart"></span> Свободно (<span class="conf-step__legend-value price-standart">250</span>руб)</p>
              <p class="conf-step__legend-price"><span class="conf-step__chair conf-step__chair_vip"></span> Свободно VIP (<span class="conf-step__legend-value price-vip">350</span>руб)</p>            
            </div>
            <div class="col">
              <p class="conf-step__legend-price"><span class="conf-step__chair conf-step__chair_standart"></span> Занято</p>
              <p class="conf-step__legend-price"><span class="conf-step__chair conf-step__chair_selected"></span> Выбрано</p>                    
            </div>
          </div>
        </div>
        <button class="acceptin-button"  >Забронировать</button>
        </section>
        `;
    } else
    {
      selectionElement.innerHTML += `
        <section class="buying">
      <div class="buying__info">
        <div class="buying__info-description">
          <h2 class="buying__info-title">${seanceString().filmName}</h2>
          <p class="buying__info-start">Начало сеанса: ${
            seanceString().seanceTime
          }</p>
          <p class="buying__info-hall">${
            seanceString().hallName
          }</p>          
        </div>
        <div class="buying__info-hint">
          <p>Тапните дважды,<br>чтобы увеличить</p>
        </div>
      </div>


      <div class="conf-step">
        <div class="conf-step__wrapper"> 
        ${data}
        <div class="conf-step__legend">
            <div class="col">
              <p class="conf-step__legend-price"><span class="conf-step__chair conf-step__chair_standart"></span> Свободно (<span class="conf-step__legend-value price-standart">250</span>руб)</p>
              <p class="conf-step__legend-price"><span class="conf-step__chair conf-step__chair_vip"></span> Свободно VIP (<span class="conf-step__legend-value price-vip">350</span>руб)</p>            
            </div>
            <div class="col">
              <p class="conf-step__legend-price"><span class="conf-step__chair conf-step__chair_standart"></span> Занято</p>
              <p class="conf-step__legend-price"><span class="conf-step__chair conf-step__chair_selected"></span> Выбрано</p>                    
            </div>
          </div>
        </div>
        <button class="acceptin-button"  >Забронировать</button>
        </section>
        `;
    }
    mainElement.append(selectionElement);
  })
  
  .then(() => processing())
  .catch((error) => console.error(error));

  function processing(){   
      const rows = document.querySelectorAll(".conf-step__row");

      rows.forEach((row, index) => {
        row.setAttribute("data-row", index + 1);
        const seats = row.querySelectorAll(".conf-step__chair");
        seats.forEach((seat, seatIndex) => {
          seat.setAttribute("data-seat", seatIndex + 1);
        });
      });

      const acceptButton = document.querySelector('.acceptin-button');
      acceptButton.addEventListener('click', function() {
        event.preventDefault();
        
        const timeStampSeance = seanceString().timeStampSeance;
        const hallConfiguration = document.querySelector('.conf-step__wrapper');
        const cloneHallConf = hallConfiguration.cloneNode(true);
        const cloneS = cloneHallConf.querySelectorAll(".conf-step__legend");
          cloneS.forEach(legend => {
            legend.remove();
          });
        const hallConfigurationNew = cloneHallConf.innerHTML;
        const body = `event=sale_add&timestamp=${timeStampSeance}&hallId=${hallId}&seanceId=${seanceId}&hallConfiguration=${hallConfigurationNew}`;
        console.log('body:', body)
        
        fetch(url, {
          method: 'POST', 
          body: body,
          headers: headers         
        })
      .catch((error) => console.error(error));

      window.location.href = 'payment.html'; // переход на страницу ticket.html
      })
      

    function selectSpan(event) {
      const clickedSpan = event.target;
      const isSelected = clickedSpan.classList.contains(
        "conf-step__chair_selected"
      );

      if (isSelected) {
        clickedSpan.classList.remove("conf-step__chair_selected");
      } else {
        clickedSpan.classList.add("conf-step__chair_selected");
      }

      const standartSelected = document.querySelectorAll(
        ".conf-step__chair_standart.conf-step__chair_selected"
      );
      const vipSelected = document.querySelectorAll(
        ".conf-step__chair_vip.conf-step__chair_selected"
      );

      let selectedSeats = [];

      standartSelected.forEach((seat) => {
        const row = seat.closest(".conf-step__row");
        const rowNumber = row.getAttribute("data-row");
        const seatNumber = seat.getAttribute("data-seat");

        selectedSeats.push({
          row: rowNumber,
          seat: seatNumber,
          price: 250,
          type: "standart",
        });
      });

      vipSelected.forEach((seat) => {
        const row = seat.closest(".conf-step__row");
        const rowNumber = row.getAttribute("data-row");
        const seatNumber = seat.getAttribute("data-seat");

        selectedSeats.push({
          row: rowNumber,
          seat: seatNumber,
          price: 350,
          type: "vip",
        });
      });
      sessionStorage.setItem("selectedSeats", JSON.stringify(selectedSeats)); 
  }
  

    const allSpans = document.querySelectorAll('span.conf-step__chair[data-seat]');
    allSpans.forEach((span) => {
      span.addEventListener("click", selectSpan);
    });
}