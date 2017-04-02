var items = [];
var currentLink;
var menuLinks = document.querySelectorAll('.menu a');
var nav = document.querySelector('.nav');

for (var i = 0; i < menuLinks.length; i++) {
  items.push({
    link: menuLinks[i],
    content: document.querySelector(menuLinks[i].hash)
  })
}

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 10) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var rect = item.content.getBoundingClientRect();
    if (rect.top <= 0 && rect.height + rect.top > 0) {
      if (currentLink === item.link) {
        return;
      }
      if (currentLink) {
        currentLink.classList.remove('active');
      }
      currentLink = item.link;
      currentLink.classList.add('active');
      return;
    }
  }
  if (currentLink) {
    currentLink.classList.remove('active');
    currentLink = null;
  }
});
