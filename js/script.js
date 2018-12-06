let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) {
  item.addEventListener('click', (e) => {
    let hashval = item.getAttribute('href')
    let target = document.querySelector(hashval)
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    history.pushState(null, null, hashval)
    e.preventDefault()
  });
}

$(document).on('click', '#navbarNav a, .next', function (e) {
  e.preventDefault()
  var url = $(this).attr('href')

  $('body').fadeOut(function() {
    window.location.href=url
  });
});