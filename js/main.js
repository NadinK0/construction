const tabs_btn = document.querySelectorAll('.tabs_nav-btn');
const tabs = document.querySelectorAll('.tab');

const images = document.querySelectorAll('.tab__item_img img');

tabs_btn.forEach(t => {
  t.addEventListener('click', e => {
    let tabId = t.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    tabs_btn.forEach(item => {
      item.classList.remove('active');
    })

    tabs.forEach(tab => {
      setTimeout(function(){
        tab.classList.add('unshow')}, 400);
      tab.classList.add('unfade');
      tab.classList.remove('fade');
    })

    t.classList.add('active');
    setTimeout(function(){
      currentTab.classList.remove('unshow')}, 400);
      currentTab.classList.remove('unfade');
      currentTab.classList.add('fade');
  })
})

images.forEach(i => {
  i.addEventListener('click', e => {

  });
});

let buttonFireSafe = document.querySelector(".more");
const body = document.body;
let modalWindowFireSafe = document.getElementById("modalWindowFireSafe");
let close = document.querySelector(".close");

buttonFireSafe.onclick = () => {
  body.classList.add('body_fixed');
  modalWindowFireSafe.classList.add('modal-show');
}

close.onclick = () => {
  body.classList.remove('body_fixed');
  modalWindowFireSafe.classList.remove('modal-show');
}