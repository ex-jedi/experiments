const removeIt=document.querySelectorAll("div div");async function beGone(e){const{currentTarget:n}=e;n.classList.add("animate"),n.addEventListener("transitionend",()=>{console.log(n),n.remove()})}removeIt.forEach(e=>e.addEventListener("click",beGone));
//# sourceMappingURL=universal-min.js.map