  let myImage = document.querySelector('img');

  myImage.onclick = function() {
      let mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/admiral.jpg') {
        myImage.setAttribute('src','images/flota.jpg');
      } else {
        myImage.setAttribute('src','images/admiral.jpg');
      }
  }
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'I see you want to try warcry, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I see you want to try warcry, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }