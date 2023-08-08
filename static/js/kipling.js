// Scroll to the top button:
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)  {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// Card font

card_h1 = document.querySelector('#thingstodo .card h5');
card_h1.classList.add("font-2");
card_p = document.querySelectorAll("#thingstodo .card p")
card_p.classList.add("font-4");

// Footer

width = screen.width;
icon = document.querySelectorAll("footer-fa");
if (width<640) {
    icon.classList.add("fa-xl")
    icon.classList.remove("fa-2xl")
}