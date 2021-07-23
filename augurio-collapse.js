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
      
      // 如果需要開啟一個就關閉前一個，就加入以下：
      const active = document.querySelectorAll('.active');
      Array.prototype.forEach.call(active, act => {
        act.classList.remove('active');
        act.parentNode.querySelector('.contents-box').setAttribute('style', 'height: 0');
      })
      
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

    // 如果 .title-box 有 data-expanded="true"，就預設開啟
    if(t.dataset.expanded === 'true') {
      t.click()
    }
  });

});
