# Описание индексного файла index.js

## Создание «информационной системы для предварительного бронирования билетов».

- [Файл](../js/index.js)

## Переменные

- dayWeekList - массив с днями недели
- dayNumberElements - селектор поиска числа недели в шапке
- dayWeekElements - селектор поиска дня в шапке
- url - ссылка для запроса командой fetch
- headers - заголовок для запроса командой fetch
- body - тело запроса
- movieSeances - получение времени фильма
- dayLinks - получение даты фильма
- selectSeanse - объект для сохраниеня в сессионное хранилице данных о выбранном фильме

## Сущности

- слушатель "DOMContentLoaded" - запускает скрипты после загрузки основного дерева сайта html
- dayNumberElements.forEach - заполняет шапку с датами от текущей даты и плюс неделя
- fetch - запрос на удаленный сервер БД для получения json файла с полной информацией о расписании на работы кинотеатра
- data.halls.forEach - заполнение index.html фильмами с описанием из файла полученного из удаленной БД
- getTimeStampDay - формирование TimeStamp для фильма
- updateSeances - блокировка выбора фильма прошедвего времени
- dayLinks.forEach - выбор в шапке дня для заказа
- movieSeances.forEach - слушатель клика выбора времени фильма
- window.sessionStorage.setItem - запись в сессионно хранилище браузера переменной с ключом  selectSeanse
- .catch(error => console.error(error)); - обработка ошибки для запроса серверу.
