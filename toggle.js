function changeStyles() {
    var link = document.getElementById("stylelink");
    var mylinks1div = document.getElementById("mylinks1");

    if (link.getAttribute("href") == "styles1.css") {
      link.setAttribute("href", "styles2.css");
      localStorage.setItem("stylelink", "styles2.css");
    } else {
      link.setAttribute("href", "styles1.css");
      localStorage.setItem("stylelink", "styles1.css");
    }
  }
  window.onload = function () {
      var savedStyle = localStorage.getItem("stylelink");
      if (savedStyle) {
        document.getElementById("stylelink").setAttribute("href", savedStyle);
      }
    };