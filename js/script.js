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

$(document).on('click', '.next', function (e) {
  e.preventDefault()
  var url = $(this).attr('href')

  $('body').fadeOut(function() {
    window.location.href=url
  });
});

function validateForm() {
  if (document.forms["name"].value == "") {
    alert("Harap Masukan Nama Perusanaan Anda");
    return false;
  } else if (document.forms["phone"].value == "") {
    alert("Harap Masukan No. Telp Anda");
    return false;
  } else if (document.forms["email"].value == "" ) {
    alert("Harap Masukan Email Anda");
    return false;
  } else if (document.forms["kota"].value == "") {
    alert("Harap Masukan Kota Asal Anda");
    return false;
  } else {
    return alert("Thankyou");
  }
}