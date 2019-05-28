// Detect request animation frame
let scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };

let elementsToShow = document.querySelectorAll('.show-on-scroll');

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

  //Set how far the element 'peeks' into the viewport
  let offsetTop = 50; // Offset in pixels or bounding.height * 0.9 (fraction of elements height)
  let offsetBottom = 150; // Offset in pixels or bounding.height * 0.9 (fraction of elements height)

  let offsetFirst = offsetTop - bounding.height;
  let offsetSecond = bounding.height - offsetBottom;
  return (
    bounding.top >= offsetFirst &&
    bounding.bottom <=
      (window.innerHeight + offsetSecond ||
        document.documentElement.clientHeight + offsetSecond)
  );
}
