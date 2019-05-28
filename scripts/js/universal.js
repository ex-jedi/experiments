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
  var bounding = el.getBoundingClientRect();
  return (
    bounding.top >= 50 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight - 50 || document.documentElement.clientHeight - 50) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}
// function isElementInViewport(el) {
//   // special bonus for those using jQuery
//   if (typeof jQuery === 'function' && el instanceof jQuery) {
//     el = el[0];
//   }

//   let offset = 50;
//   var rect = el.getBoundingClientRect();
//   return (
//     (rect.top <= 0 && rect.bottom >= 0) ||
//     (rect.bottom >=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.top <=
//         (window.innerHeight - offset ||
//           document.documentElement.clientHeight - offset)) ||
//     (rect.top >= 0 &&
//       rect.bottom <=
//         (window.innerHeight - offset ||
//           document.documentElement.clientHeight - offset))
//   );
// }

// Get the H1 heading
var h1 = document.querySelector('h1');

// Get it's position in the viewport
var bounding = h1.getBoundingClientRect();

// Log the results
console.log(bounding);
