let hk = document.getElementById("hk");
let boss = document.getElementById("boss");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");


hk.addEventListener("click", () => {
  if(getComputedStyle(p1).display != "none"){
    p1.style.display = "none";
  } else {
    p1.style.display = "block";
  }
})
boss.addEventListener("click", () => {
  if(getComputedStyle(p2).display != "none"){
    p2.style.display = "none";
  } else {
    p2.style.display = "block";
  }
})

