//Записываем, сколько проскроллено по вертикали
let scrollpos = window.scrollY

const header = document.querySelector(".flex-row")

//Сколько пикселей нужно проскролить, чтобы добавить класс. Можете изменить значение
const scrollChange = 5

//Функция, которая будет добавлять класс
const add_class_on_scroll = () => header.classList.add("container-1-scroll")
const remove_class_on_scroll = () => header.classList.remove("container-1-scroll")

//Отслеживаем событие "скролл"
window.addEventListener('scroll', function () {
   scrollpos = window.scrollY;

   //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса
   if (scrollpos >= scrollChange) { add_class_on_scroll() }
   else { remove_class_on_scroll() }
})