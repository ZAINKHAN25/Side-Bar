// var bar = document.querySelector('.barimg')
// var openClose = document.querySelector('.openClose')
// var sidebar = document.querySelector('.sidebar')

// bar.addEventListener("click", ()=>{
//     sidebar.classList.toggle 
// })

var bar = document.querySelector('.barimg');
var openClose = document.querySelector('.openClose');
var sidebar = document.querySelector('.sidebar');
var x = document.querySelector('.x')

bar.addEventListener("click", () => {
  sidebar.classList.toggle('openClose')
});

x.addEventListener("click", () => {
    sidebar.classList.add('openClose')
})

