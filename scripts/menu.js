function openCourse(evt, courseName) {
    var i, tabsection, tabheader;
    tabsection = document.getElementsByClassName("tabsection");
    for (i = 0; i < tabsection.length; i++) {
        tabsection[i].style.display = "none";
    }
    tabheader = document.getElementsByClassName("tabheader");
    for (i = 0; i < tabheader.length; i++) {
        tabheader[i].className = tabheader[i].className.replace(" active", "");
    }
    document.getElementById(courseName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();
