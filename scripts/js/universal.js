// Detect request animation frame
var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
  elementsToShow.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('red-or-ded');
    } else {
      element.classList.remove('red-or-ded');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  let offset = 50;
  var bounding = el.getBoundingClientRect();
  return (
    bounding.top >= offset &&
    bounding.bottom <=
      (window.innerHeight - offset ||
        document.documentElement.clientHeight - offset)
  );
}

// Get the H1 heading
var h1 = document.querySelector('h1');

// Get it's position in the viewport
var bounding = h1.getBoundingClientRect();

// Log the results
console.log(bounding);
