// import React, { useEffect, useState } from "react";
// const loadImage = (setImageDimensions, imageUrl) => {
//   const img = new Image();
//   img.src = imageUrl;

//   img.onload = () => {
//     setImageDimensions({
//       height: img.height,
//       width: img.width
//     });
//   };
//   img.onerror = (err) => {
//     console.log("img error");
//     console.error(err);
//   };
// };

// const App = () => {
//   const [imageDimensions, setImageDimensions] = useState({});
//   const imageUrl = "https://static.wikia.nocookie.net/bleach/images/4/41/NBFHIchigo_profile.png/revision/latest?cb=20210809170351&path-prefix=en";

//   useEffect(() => {
//     loadImage(setImageDimensions, imageUrl);
//     console.log(imageDimensions);
//   }, [imageDimensions]);

//   return (
//     <div>
//       {Object.keys(imageDimensions).length === 0 ? (
//         <b>Calculating...</b>
//       ) : (
//         <>
//           <p>
//             <b>Height:</b> {imageDimensions.height}{" "}
//           </p>
//           <p>
//             <b>Width:</b> {imageDimensions.width}{" "}
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;













// import React, { Component } from 'react'
// class App extends Component{
//   constructor(props){ 
//     super(props) 
  
//     // Initialize count state 
//     this.state = {show : false}
//     // Bind context of 'this'
//     this.handleClick = this.handleClick.bind(this)
//     // Create reference of DOM object
//     this.imgRef = React.createRef()
//   } 
  
//   renderDetails() {
//     return this.state.show ? 
//       // Accessing image details using imgRef
//       <div>
          
// <p><strong>Height : </strong> 
//         {this.imgRef.current.clientHeight}px</p>
  
//         <p><strong>Width : </strong> 
//         {this.imgRef.current.clientWidth}px</p>
  
//       </div> : null
//   }
  
//   handleClick(){
  
//     // Update state value
//     this.setState({
//       show : true
//     })
//   }
  
//   render(){
//     return( 
//       <div> 
        
//         {/* Assign reference to DOM element     */}
//         <img ref={this.imgRef} src=
// 'https://static.wikia.nocookie.net/bleach/images/4/41/NBFHIchigo_profile.png/revision/latest?cb=20210809170351&path-prefix=en' alt='gfg' />
//         <div>
//           <button onClick={this.handleClick}>Get image details</button>
//         </div>
//         {this.renderDetails()}
//       </div>    
//     )  
//   } 
// }
// export default App