let inputSec = document.getElementById("userInput");
inputSec.style.display = "none";

function addImages() {
    for (var i = 1; i <= 5; i++) {
        var image = document.createElement("img");
        image.setAttribute("src", "images/" + "pic" + i + ".jpg");
        image.setAttribute("alt", "pic" + i + ".jpg");
        image.setAttribute("title", "pic" + i + ".jpg");
        document.getElementById("thumb-bar").appendChild(image);
   }
}

addImages()

let smallPics = document.getElementById("thumb-bar").childNodes;

function enlargeImg() {
    let largeImg = document.createElement("img");
    largeImg.setAttribute("src", "images/" + smallPics);
    fullSize = document.getElementsByClassName("displayed-img");
    fullSize.append(largeImg);
    inputSec.style.display = "block";

}



let bigImg = enlargeImg();
smallPics.addEventListener("onmouseover", bigImg);
