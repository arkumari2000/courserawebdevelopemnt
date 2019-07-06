// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello ";
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
