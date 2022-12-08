let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar-main' })

function showGalleryCategoryImages() {

    if ( document.getElementById("tableselect").value == 1 ) {
      document.getElementById("2021").style.display = "block";
      document.getElementById("2020").style.display = "block";
      document.getElementById("2019").style.display = "block";
    }
    else if ( document.getElementById("tableselect").value == 2 ) {
      document.getElementById("2020").style.display = "none"
      document.getElementById("2019").style.display = "none"
      document.getElementById("2021").style.display = "block";
    }
    else if (document.getElementById("tableselect").value == 3 ) {
      document.getElementById("2021").style.display = "none"
      document.getElementById("2019").style.display = "none"
      document.getElementById("2020").style.display = "block";
    } 
    else {
        document.getElementById("2021").style.display = "none"
        document.getElementById("2020").style.display = "none"
        document.getElementById("2019").style.display = "block";
    }
}

const readMoreButton = document.querySelector('.read-more-btn');
const text = document.querySelector('.text')

readMoreButton.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
})

const readMoreButton2 = document.querySelector('.read-more-btn2')
const text2 = document.querySelector('.text2')

readMoreButton2.addEventListener('click', (e)=>{
    text2.classList.toggle('show-more2');
})