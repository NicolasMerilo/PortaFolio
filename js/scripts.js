
var hr = document.querySelector("#hr");
var elements = document.querySelectorAll("#text");
var links = document.querySelectorAll(".nav-link");
var btn = document.getElementById('navbarNav');

document.addEventListener('DOMContentLoaded', function() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.onclick = function() {
      var prev = document.getElementsByClassName("active");
      if (prev && prev[0]) {
        prev[0].classList.remove("active");
      }
      this.classList.add("active");
    };
  }

  setTimeout(() => { 
  for (i = 0; i < elements.length; i++) {
      elements[i].classList.remove('hidden');
  }
  hr.classList.remove('hrh');
  }, 1500);

})

 

btn.addEventListener("click", function () {
  btn.className ="navbar-collapse justify-content-end collapse";
})

