// DOM selector for autocomplete
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.autocomplete');

  var instances = M.Autocomplete.init(elems, {
    data: {
      "Romania": null,
      "Italy": null,
      "The Netherlands": null,
      "Spain": null,
      "California": null,
      "France": null,
      "Lithuania": null,
      "The Bahamas": null,
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const sideNav = document.querySelector('.sidenav');
  var instace = M.Sidenav.init(sideNav, {});

});


// Scrollspy

document.addEventListener('DOMContentLoaded', function() {
  const ss = document.querySelectorAll('.scrollspy');
  var instace = M.ScrollSpy.init(ss, {});
});


// Material Boxed
document.addEventListener('DOMContentLoaded', function() {
  const mb = document.querySelectorAll('.materialboxed');
  var instace = M.Materialbox.init(mb, {});
});
