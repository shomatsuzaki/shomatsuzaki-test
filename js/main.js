/////////////////////////
// DIRECTION AWARE HOVER
/////////////////////////

document.querySelectorAll('button').forEach((elem) => {

  elem.onmouseenter =
  elem.onmouseleave = (e) => {

    const tolerance = 5

    const left = 0
    const right = elem.clientWidth

    let x = e.pageX - elem.offsetLeft

    if (x - tolerance < left) x = left
    if (x + tolerance > right) x = right

    elem.style.setProperty('--x', `${ x }px`)

  }

})

/////////////////////////
// ANIMATED URL AND TITLE
/////////////////////////

// function wavyurl() {
//     var i, n, s = '';

//     for (i = 0; i < 10; i++) {
//         n = Math.floor(Math.sin((Date.now()/200) + (i/2)) * 4) + 4;

//         s += String.fromCharCode(0x2581 + n);

//         // s += String.fromCharCode(0x2581 + n);
//     }

//     // window.location.hash = s;
//     document.title = s;

//     setTimeout(wavyurl, 20);
// }

// wavyurl();

// var f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];

// function animateUrl() {
//     location.hash = f[Math.floor((Date.now()/100)%f.length)];
//     document.title = 'Sho Matsuzaki ' + f[Math.floor((Date.now()/100)%f.length)];

//     setTimeout(animateUrl, 50);
// }

// animateUrl();

///////////////////////
// FILTER FUNCTIONALITY
///////////////////////

filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("project");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    myRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) myAddClass(x[i], "show");
  }
}

// Used to add "show" to classes
function myAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

// Used to remove "show" from classes
function myRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the button that has just been clicked
var btnContainer = document.getElementById("btncontainer");
if (btnContainer) {
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}
}
