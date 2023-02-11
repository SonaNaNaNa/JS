/*1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
[]()
2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
[]()
3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
[]()
4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
[]()
5. Выведите содержимое тега title в консоль.
[]()
6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
[]()
7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

8. Удалите тег h6 на странице.*/

//1
/*const element = document.getElementById('super_link');
console.log(element);*/

//2
/*const Text = document.querySelectorAll('.card-link');
Text.forEach(element => {
    element.textContent = 'ссылка'
});*/

//3
/*const elements = document.querySelectorAll('.card-body .card-link');
    console.log(elements);*/

//4
/*const firstElem = document.querySelector('[data-number = "50"]');
console.log(firstElem);*/

//5
//console.log(document.title);

//6
/*const elem = document.querySelector('.card-title');
const parElem = elem.parentNode;
console.log(parElem);*/

//7
/*const teg = document.createElement('p');
teg.textContent = 'Привет';
const cardElem = document.querySelector('.card');
cardElem.prepend(teg);*/

//8
/*const delet = document.querySelector('h6');
delet.remove();*/
