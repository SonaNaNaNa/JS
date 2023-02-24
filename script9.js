



// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

/*const spanElen = document.querySelector('span');
    document.querySelector('input').addEventListener('input', e => {
      spanElen.textContent = e.target.value;
    });*/

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

/*const message = document.querySelector('.message');
    document.querySelector('button').addEventListener('click', () => {
      message.style.visibility = 'visible';
      message.classList.add('animate_animated', 'animate_fadeInLeftBig');
    });*/
// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

/*const formElem = document.querySelector('form');
const formControlElems = formElem.querySelectorAll('input, select');
  formElem.addEventListener('submit', event => {
    formControlElems.forEach(formControlElem => {
      if (formControlElem.value === '') {
        formControlElem.classList.add('error');
        event.preventDefault();
      }
    });
  });

formElem.addEventListener('input', event => {
  if (!event.target.classList.contains('form-control')) {
    return;
  }
  event.target.value === '' ? event.target.classList.add('error') : event.target.classList.remove('error');
});*/
