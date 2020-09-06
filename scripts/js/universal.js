const removeIt = document.querySelectorAll('div div');
// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function beGone(e) {
  const { currentTarget } = e;
  currentTarget.classList.add('animate');
  currentTarget.addEventListener('transitionend', () => {
    console.log(currentTarget);
    currentTarget.remove();
  });
}

removeIt.forEach(el => el.addEventListener('click', beGone));
