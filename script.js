/***************************************************************
 * 1) DETECT USER THEME PREFERENCE FROM DEVICE + TIME
 ***************************************************************/
(function autoDetectTheme() {
  const now = new Date();
  const hour = now.getHours();
  // If hour >= 18 => user is evening => dark
  // else => light
  const isEvening = (hour >= 18);

  const savedTheme = localStorage.getItem("theme");

  if (!savedTheme) {
    if (isEvening) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  } else {
    if (savedTheme === "light") {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
  }
})();

/***************************************************************
 * 2) THEME TOGGLE (show reversed label)
 ***************************************************************/
const themeToggleBtn = document.getElementById("themeToggleBtn");
function updateToggleLabel() {
  // if in dark => show "Light", if in light => show "Dark"
  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "Light";
  } else {
    themeToggleBtn.textContent = "Dark";
  }
}

themeToggleBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
  updateToggleLabel();
});

/***************************************************************
 * 3) GREETING + DATE/TIME TOP-RIGHT
 *    Good morning / afternoon / evening
 ***************************************************************/
const dateTimeGreeting = document.getElementById("dateTimeGreeting");
function updateDateTimeGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "Good Evening";
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }
  const dateString = now.toLocaleString(); 
  dateTimeGreeting.textContent = greeting + " | " + dateString;
}
updateDateTimeGreeting();
setInterval(updateDateTimeGreeting, 60000);

/***************************************************************
 * 4) FUN FACTS MODAL
 ***************************************************************/
const funFactBtn = document.getElementById("funFactBtn");
const funFactModal = document.getElementById("funFactModal");
const closeModalBtn = document.getElementById("closeModalBtn");

funFactBtn.addEventListener("click", () => {
  funFactModal.style.display = "flex";
});
closeModalBtn.addEventListener("click", () => {
  funFactModal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === funFactModal) {
    funFactModal.style.display = "none";
  }
});

/***************************************************************
 * 5) TYPED.JS (3 lines)
 ***************************************************************/
const lines = [
  "Welcome to my professional portfolio!",
  "Currently pursuing a Bachelor's degree in Mechanical Engineering with Minor in Physics",
  "Eager to explore internship and co-op opportunities!"
];

function typeLine(elementId, text, callback) {
  new Typed(elementId, {
    strings: [text],
    typeSpeed: 40,
    showCursor: false,
    loop: false,
    onComplete: callback
  });
}

function startTyping() {
  typeLine("#typed1", lines[0], () => {
    typeLine("#typed2", lines[1], () => {
      typeLine("#typed3", lines[2], () => {});
    });
  });
}
startTyping();

/***************************************************************
 * 6) SCROLL INDICATOR
 ***************************************************************/
function moveIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  
  
  

/***************************************************************
 * 7) DATE in FOOTER
 ***************************************************************/
const footerYear = document.getElementById("footerYear");
const currentDateEl = document.getElementById("currentDate");
const dateObj = new Date();
footerYear.textContent = dateObj.getFullYear();
currentDateEl.textContent = dateObj.toDateString();

/***************************************************************
 * 8) INITIAL LABEL for THEME TOGGLE
 ***************************************************************/
updateToggleLabel();
