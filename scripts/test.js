function showGalleryCategoryImages() {

    if ( document.getElementById("tableselect").value == 1 ) {
      document.getElementById("2021").style.display = "block";
      document.getElementById("2020").style.display = "block";
    }
    else if ( document.getElementById("tableselect").value == 2 ) {
      document.getElementById("2020").style.display = "none"
      document.getElementById("2021").style.display = "block";
    }
    else {
      document.getElementById("2021").style.display = "none"
      document.getElementById("2020").style.display = "block";
    }
}