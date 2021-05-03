const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchInput = document.querySelector("input");
const searchBox = document.querySelector(".search-box");

searchBtn.onclick = () => {
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
}

cancelBtn.onclick = () => {
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
}



const scrollBtn = document.querySelector('.scrolltop');


    
    window.addEventListener("scroll",( ) =>{
        if(window.pageYOffset > 100){
            scrollBtn.classList.add('active')
        }
        else{
            scrollBtn.classList.remove('active')
        }
    });
    scrollBtn.onclick = () =>{
    window.scrollTo(0,0)
}

