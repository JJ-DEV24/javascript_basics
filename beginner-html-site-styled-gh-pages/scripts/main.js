const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let firstButton = document.querySelector("button");
let firstHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name: ");
    if (!myName) {
      setUserName();
    } else {
    localStorage.setItem("name", myName);
    firstHeading.textContent = `Do you like pancakes, ${myName}?`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    firstHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  firstButton.onclick = () => {
    setUserName();
  };
