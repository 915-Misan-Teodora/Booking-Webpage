// DOM selector for autocomplete
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');

    var instances = M.Autocomplete.init(elems,
      {    data: {
              "Aruba": null,
              "Cancun Mexico": null,
              "Hawaii": null,
              "Florida": null,
              "California": null,
              "Jamaica": null,
              "Europe": null,
              "The Bahamas": null,
            }});
  });
