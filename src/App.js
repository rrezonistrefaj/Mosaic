import React from "react";
 import ReactDOM from "react-dom";


let url = "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350";
 
 function App() {
   return (
     <img 
      src={url}
      alt="new"
      />
   );
   function getElementPosition(obj) {
    let curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}
function getEventLocation(element,event){
  let pos = getElementPosition(element);
  
  return {
    x: (event.pageX - pos.x),
      y: (event.pageY - pos.y)
  };
}
let canvas = document.getElementById("canvas");


function drawImageFromWebUrl(sourceurl){
    let img = new Image();

    img.addEventListener("load", function () {
        canvas.getContext("2d").drawImage(img, 0, 0, img.width,    img.height, 0, 0, canvas.width, canvas.height); 
    });

   img.setAttribute("src", sourceurl);
}
function rgbToHex(r,g,b){
    if()
}


 }

 const rootElement = document.getElementById("root");
 ReactDOM.render(<App />, rootElement);
 export default App