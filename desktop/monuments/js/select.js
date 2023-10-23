const selectRoute = document.getElementById('select_route'); // получаем элемент select

// получаем все popup элементы
const popups = document.querySelectorAll('.popup2');

// добавляем обработчик события change на select элемент
selectRoute.addEventListener('change', () => {
  // получаем data-popup-id выбранного элемента
  const selectedPopupId = selectRoute.options[selectRoute.selectedIndex].getAttribute('data-popup-id');

  // перебираем все popup элементы и скрываем их
  popups.forEach(popup => {
    popup.style.display = 'none';
  });

  // отображаем popup с соответствующим id
  const selectedPopup = document.getElementById(selectedPopupId);
  selectedPopup.style.display = 'block';
});