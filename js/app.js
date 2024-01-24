// COUNTER STARTS HERE
let counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  let count = 0;
  let endingValue = counter.dataset.end;
  let duration = 5000;

  let counting = setInterval(function () {
    counter.innerHTML = count++;

    if (count > endingValue) {
      clearInterval(counting);
    }
  }, duration / endingValue);
});
// COUNTER STARTS HERE



let body = document.querySelector('body')
let backToTop = document.querySelector(".backToTop");
const scrollProgress = (event) => {
    
    let bodyHeight = body.clientHeight - window.innerHeight;
    let scrollTop = Math.round(window.scrollY);
    let percentage = Math.round((100 / bodyHeight) * scrollTop);
    
    backToTop.style.backgroundImage = `conic-gradient(black 0% ${percentage}%,white 0% ${percentage}% )`;
}

window.addEventListener("scroll", scrollProgress);

backToTop.addEventListener('click', () => {
    scroll({
        top: 0,
        behavior: 'smooth'
    })
})