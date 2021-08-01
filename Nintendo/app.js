let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function
});

// following are the code to change sidebar button
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

function init() {
    const slides = document.querySelectorAll(".slide");
    const pages = document.querySelectorAll(".page");
    const backrounds = [
        'radial-gradient(#2B3760, #0B1023)',
        'radial-gradient(#4E3022, #161616)',
        'radial-gradient(#4E4322, #161616)'
    ];

    let current = 0;

    slides.forEach((slide,index) => {
        slide.addEventListener('click', function(){
            changeDots(this);
            nextSlide(index);
        });
    });

    function changeDots(dot){

        dot.classList.add("active");
    }

    function nextSlide(pageNumber){
        const nextPage = pages[pageNumber];
        const currentPage = pages[current];
        const nextLeft = nextPage.querySelector(".hero .model-left");
        const nextRight = nextPage.querySelector(".hero .model-right");
        const currentLeft = currentPage.querySelector(".hero .model-left");
        const currentRight = currentPage.querySelector(".hero .model-right");
        const nextText = nextPage.querySelector(".details");
        const portfolio = document.querySelector(".portfolio");

        const tl = new TimelineMax();

        tl.fromTo(currentLeft, 0.3, { y: '-10%' }, { y: '-100%' })
        .fromTo(currentRight, 0.3, { y: '10%'}, { y: '-100%' }, '-=0.2')
        .to(portfolio, 0.3, {backroundImage: backrounds[pageNumber]})
    }

    

}

init();