/* Midnight Rodeo survey app loader */
(function () {
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/vorlof69/midnight-rodeo-survey@main/js/app.js";
  s.async = false;
  s.onerror = function () {
    var t = document.getElementById("mode-pill");
    if (t) t.textContent = "App failed to load";
  };
  document.head.appendChild(s);
})();
