/ Задача 1.
window.addEventListener('load', () =>
    console.log('страница загрузилась'));
// Задача 2
document.addEventListener('click', checkedTag => {
    const findTag = checkedTag.target.classList.contains('super_element')
    ? 'существует' : 'не существует';
    console.log(`Класс "super_element" ${findTag} в элементе "${checkedTag.target.tagName.toLowerCase()}"`);
});
// Задача 3
document.querySelector('textarea').addEventListener('mouseover', () =>
    console.log("Вы указали на textarea."));
// Задача 4
document.querySelector('ul').addEventListener('click', findEl => {
    if (findEl.target.tagName !== "BUTTON") {
        return;
    }
    console.log(findEl.target.textContent);
});
// Задание 5
document.querySelectorAll('li:nth-child(2n)').forEach(elem => elem.style.backgroundColor = 'gray');