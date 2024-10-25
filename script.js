  // 画像切り替え

  const main = document.querySelector('#main-image');
  const thumbs = document.querySelectorAll('.thumb');
  
  // 確認
  // console.log(main);
  // console.log(thumbs);
  
  const text = document.querySelector('#caption');
  
  thumbs.forEach(function(item, index) {
      item.onclick = function() {
      //   console.log(this.dataset.image);
        main.src = this.dataset.image;
        text.textContent = this.title;
      }
    });



// 背景画面切り替え
// JavaScript

// console.log('Hello world!');

const btn = document.querySelector('#btn');
const items = document.querySelectorAll('.item-img');


if(document.body.classList.contains('black') == false){
    btn.addEventListener('click', () => {
        document.body.classList.add('black');
        items.forEach((item) => {
          item.src = item.dataset.night;
        });
      });
} else {
    btn.addEventListener('click', () => {
        document.body.classList.remove('black');
        items.forEach((item) => {
          item.src = item.dataset.day;
        });
      });

}

//functionを使った書き方
// function change() {
//   document.body.classList.toggle('black');
// }
// btn.addEventListener('click', change);