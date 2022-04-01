'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const findBtn = document.querySelector('.findBtn');
const inputCreate = document.querySelector('.inputCreate');

///////////////////////////////////////
let search = '';
const getCountyInfo = function (country) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', () => {
    const dataArr = JSON.parse(request.responseText);
    console.log(dataArr);
    dataArr.forEach(data => {
      let html = `  <article class="country">
<img class="country__img" src="${data.flag}" />
<div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(
    1
  )} people</p>
  <p class="country__row"><span>🗣️</span>${data.demonym}</p>
  <p class="country__row"><span>💰</span>${
    data.currencies ? data.currencies[0].name : data.currencies
  }</p>
</div>
</article>`;
      countriesContainer.insertAdjacentHTML('afterbegin', html);
      countriesContainer.style.opacity = 1;
    });
  });
};
findBtn.addEventListener('click', searchFilm);
function searchFilm(evt) {
  evt.preventDefault();
  search = inputCreate.value;
  console.log(search);
  inputCreate.value = '';
  getCountyInfo(search);
}
