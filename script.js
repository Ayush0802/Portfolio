const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);
          const yOffset = -45; // Adjust for fixed header height or other offset
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
      });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  function updateActiveLink() {
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const windowScroll = window.scrollY;

          if (windowScroll >= sectionTop - 100 && windowScroll < sectionTop + sectionHeight - 100) {
              const targetId = "#" + section.id;
              navLinks.forEach(link => link.classList.remove("active"));
              document.querySelector(`nav a[href='${targetId}']`).classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // Call the function initially to set the active link on page load
});


const headings = document.querySelectorAll('.animate-heading');

function checkScroll() {
  headings.forEach(heading => {
    const boundingRect = heading.getBoundingClientRect();
    if (boundingRect.top < window.innerHeight * 0.85) {
      heading.classList.add('active'); // Add animation classes
    } else {
      heading.classList.remove('active'); // Remove animation classes
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);


const scriptURL = 'https://script.google.com/macros/s/AKfycbxyKAXCxQp0gNCw4lSzgK_EqlWN34WJ3a2GFHXxRmKlLVyRt5pjCBSprivAZgGN7OdB/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { mode: 'no-cors',method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully !!!"
            setTimeout(function(){
                msg.innerHTML = ""
                },3000)
            form.reset()
        })
    .catch(error => console.error('Error!', error.message))
})







