const url = 'https://jscp-diplom.tw1.ru/';
const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded'
});
const body = new URLSearchParams({
  'event': 'update'
});

fetch(url, {
  method: 'POST',
  headers: headers,
  body: body
})
.then(response => response.json())
.then(data => console.log("data =",data))
.catch(error => console.error("error =",error));