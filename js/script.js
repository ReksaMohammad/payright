// Anchor Tags
let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		let hashval = item.getAttribute('href');
		let target = document.querySelector(hashval);
		target.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
		history.pushState(null, null, hashval);
	});
}

// OnLoad Page
$(document).on('click', '.next', function (e) {
	e.preventDefault();
	var url = $(this).attr('href');

	$('body').fadeOut(function () {
		window.location.href = url;
	});
});

// Carousel Swipe
!function (t) { t.fn.bcSwipe = function (e) { var n = { threshold: 50 }; return e && t.extend(n, e), this.each(function () { function e(t) { 1 == t.touches.length && (u = t.touches[0].pageX, c = !0, this.addEventListener("touchmove", o, !1)) } function o(e) { if (c) { var o = e.touches[0].pageX, i = u - o; Math.abs(i) >= n.threshold && (h(), t(this).carousel(i > 0 ? "next" : "prev")) } } function h() { this.removeEventListener("touchmove", o), u = null, c = !1 } var u, c = !1; "ontouchstart" in document.documentElement && this.addEventListener("touchstart", e, !1) }), this } }(jQuery);

// Swipe functions for Bootstrap Carousel
$('.carousel').bcSwipe({ threshold: 50 });

// Database
$('#form_kontak').submit(function(e){
	e.preventDefault();
	var $form = $(this);
	if (document.forms["name"].value == "") {
		alert("Harap Masukan Nama Perusanaan Anda");
	} else if ($form.find("select[name='jenis_perusahaan']>option:selected").val() == "0") {
		alert("Harap Masukan Jenis Perusanaan Anda");
	} else if (document.forms["phone"].value == "") {
		alert("Harap Masukan No. Telp Anda");
	} else if (document.forms["email"].value == "") {
		alert("Harap Masukan Email Anda");
	} else if (document.forms["kota"].value == "") {
		alert("Harap Masukan Kota Asal Anda");
	} else if ($form.find("select[name='provinsi']>option:selected").val() == "34") {
		alert("Harap Masukan Provinsi Asal Anda");
	} else {
		name 						 = $form.find("input[name='name']").val();
		jenis_perusahaan = $form.find("select[name='jenis_perusahaan']>option:selected").val();
		phone 					 = $form.find("input[name='phone']").val();
		email 					 = $form.find("input[name='email']").val();
		kota 						 = $form.find("input[name='kota']").val();
		provinsi 				 = $form.find("select[name='provinsi']>option:selected").val();
		url 						 = $form.attr("action");

		var posting		 = $.post(url, {name: name, jenis_perusahaan: jenis_perusahaan, phone: phone, email: email, kota: kota, provinsi: provinsi});
		posting.done(function(data){
			if(data === "success"){
				$form.find('input[name="name"]').val("");
				$form.find('select[name="jenis_perusahaan"]>option[value="0"]').prop("selected", true);
				$form.find('input[name="phone"]').val("");
				$form.find('input[name="email"]').val("");
				$form.find('input[name="kota"]').val("");
				$form.find('select[name="provinsi"]>option[value="34"]').prop("selected", true);
				alert("Data Anda Telah Tersimpan. Terimakasih.");
			} else if (data === "connection_error"){
				alert("internal server error");
			}else{
				alert("unknown error");
			}
			console.log(data);
		});
	}

});