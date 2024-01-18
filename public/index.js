// AOS.init();


threedot = document.querySelector('.threedot');
navbar = document.querySelector('.navbar')

threedot.addEventListener('click',()=>{
    navbar.classList.toggle('navbar');
})

//              IMAGE   SLIDER FOR SECTION 2
// let section2index=0;


// section2imageslider(section2index);
// function fun1(){
//     section2index+=1;
//     section2imageslider(section2index);
// }
// function fun2(){
//     section2index-=1;
//     section2imageslider(section2index);
// }

// function section2imageslider(section2num){
//     let section2images=document.getElementsByClassName("section2img");
    
//     if(section2index==section2images.length){
//         section2index=0;
//         section2num=0;
//     }
//     if(section2index<0){
//         section2index=section2images.length-1;
//         section2num=section2images.length-1;
//     }
//     for(let y of section2images){
//         y.style.display="none";
//     }
//     // section2images[section2num].style.display="block";
//     section2images[section2num].style.display="block";
// }
// //              IMAGE   SLIDER FOR SECTION 3
// let section3index=0;
// section3imageslider(section3index);
// function fun3(){
//     section3index+=1;
//     section3imageslider(section3index);
// }
// function fun4(){
//     section3index-=1;
//     section3imageslider(section3index);
// }

// function section3imageslider(section3num){
//     let section3images=document.getElementsByClassName("section3img");
    
//     if(section3index==section3images.length){
//         section3index=0;
//         section3num=0;
//     }
//     if(section3index<0){
//         section3index=section3images.length-1;
//         section3num=section3images.length-1;
//     }
//     for(let y of section3images){
//         y.style.display="none";
//     }
//     section3images[section3num].style.display="block";

// }


// SECTION 2 PARA
// let p1=document.getElementById("p1");
// let section2div3p1btn2=document.getElementById("section2div3p1btn2");
// let section2div3p1btn1=document.getElementById("section2div3p1btn1");
// let section2=document.getElementById("section2");
// let section2=documemt.getElementById("section2");
// p1.style.display="none";
// section2div3p1btn2.style.display="none";


// function fun5(){
//     let p1=document.getElementById("p1");
//     p1.style.display="block";
//     section2div3p1btn2.style.display="block";
//     section2div3p1btn1.style.display="none";
//     section2.style.height='265rem';
// }
// function fun6(){
//     let p1=document.getElementById("p1");
//     p1.style.display="none";
//     section2div3p1btn2.style.display="none";
//     section2div3p1btn1.style.display="block";
//     section2.style.height='185rem';
// }
// // SECTION 3 PARA
// let p2=document.getElementById("p2");
// let section3div3p1btn2=document.getElementById("section3div3p1btn2");
// let section3div3p1btn1=document.getElementById("section3div3p1btn1");
// let section3=document.getElementById("section3");
// // let section2=documemt.getElementById("section2");
// p2.style.display="none";
// section3div3p1btn2.style.display="none";


// function fun7(){
//     let p2=document.getElementById("p2");
//     p2.style.display="block";
//     section3div3p1btn2.style.display="block";
//     section3div3p1btn1.style.display="none";
//     section3.style.height='265rem';
// }
// function fun8(){
//     let p2=document.getElementById("p2");
//     p2.style.display="none";
//     section3div3p1btn2.style.display="none";
//     section3div3p1btn1.style.display="block";
//     section3.style.height='185rem';
// }



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      // document.getElementById('myDropdown').style.transition;
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          
          openDropdown.classList.remove('show');
        }
      }
    }
  }