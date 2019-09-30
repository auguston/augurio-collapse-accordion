window.addEventListener('DOMContentLoaded', () => {

  // 寫入各 .content-box 的高，然後高度設成 0
  const contents = document.querySelectorAll('.augurio-collapse .contents-box');
  Array.prototype.forEach.call(contents, c => {
    c.dataset.height = c.offsetHeight;
    c.setAttribute('style', 'height: 0');
  });

  // .title-box 被點擊時，加入 .active， .content-box的高度抓 data-height 的
  const titles = document.querySelectorAll('.title-box');
  Array.prototype.forEach.call(titles, t => {
    t.addEventListener('click', e => {
      e.target.classList.toggle('active'); // 加入/移除 .active

      // .title-box 同一層的 .contents-box
      const content = e.target.parentNode.querySelector('.contents-box');
      const height = content.dataset.height; // 從 dat-height 抓原本高度

      // 判斷 .title-box 有沒有 .active
      if(e.target.classList.contains('active')) {
        // 有 .active，就設高
        content.setAttribute('style', 'height: ' + height + 'px');
      } else {
        // 沒有，高度歸 0
        content.setAttribute('style', 'height: 0');
      }
    });
  });

});