'use strict';
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  console.log('j');
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
