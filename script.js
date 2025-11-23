// for Change Mode

const btn=document.getElementById("ChangeMode");
const themeLink=document.getElementById("theme-style");

btn.addEventListener("click", function () {
    
    if (themeLink.getAttribute("href") === "style.css") {
      themeLink.setAttribute("href", "style2.css");
    } else {
      themeLink.setAttribute("href", "style.css");
    }

  });

  ///////
  
  
  const track = document.querySelector('.slider-track');
  const carlists = document.querySelectorAll('.carlist');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  let index = 0;

  function updateSlider() {
    const slideWidth = carlists[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (index < carlists.length - 1) {
      index++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });



//profile

  let subMenu = document.getElementById("menu");
  let menuContent = document.getElementById("menuContent");

  function toggleMenu() {
    subMenu.classList.toggle("open-menu");
    updateMenu();
  }

  function updateMenu() {
    const username = localStorage.getItem("username");

    if (username) {
      menuContent.innerHTML = `
        <div class="user-info">
          <i class="fa-regular fa-user"></i>
          <h2>${username}</h2>
        </div>
        <hr>
        <a href="#" class="logout" onclick="logout()">
          <div class="logout-content">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <span>Log out</span>
          </div>
        </a>
      `;
    } else {
      menuContent.innerHTML = `
        <a href="register.html" class="login-link">
          <div class="login-content">
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
            <span>Sign In</span>
          </div>
        </a>
      `;
    }
  }

  function logout() {
    localStorage.removeItem("username");
    updateMenu();
    
  }
  document.addEventListener("DOMContentLoaded", updateMenu);
