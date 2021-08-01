const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".svg", { y: "0%", duration: 0.1});
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("active");
  menuBtnChange();//calling the function
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("active");
  menuBtnChange(); //calling the function
});

// following are the code to change sidebar button
function menuBtnChange() {
 if(sidebar.classList.contains("active")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}
