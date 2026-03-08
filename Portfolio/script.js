document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if(this.hash !== "") {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function(){
const buttons = document.querySelectorAll(".skills-grid .skill")
const windows = document.querySelectorAll(".skills-grid .skillWindow")
buttons.forEach((button, index) => {
  const window = windows[index] 

  button.addEventListener("click", () => {
    window.classList.add("show")
  })
  
  const closeBtn = window.querySelector(".closeBtn")
  closeBtn.addEventListener("click", () => {
    window.classList.remove("show")
  })

window.addEventListener("click", (e) => {
  if(e.target === window){
      window.classList.remove("show")
    }
  })

})

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    windows.forEach(win => win.classList.remove("show"))
  }
})
})