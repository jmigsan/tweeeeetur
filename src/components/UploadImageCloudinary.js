import { useEffect } from "react";

// const UploadImageCloudinary = () => {

//   <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"/> 

//   var myWidget = cloudinary.createUploadWidget({
//     cloudName: 'jmigsan', 
//     uploadPreset: 'dooadbzq'}, (error, result) => { 
//       if (!error && result && result.event === "success") { 
//         console.log('Done! Here is the image info: ', result.info); 
//       }
//     }
//   )

//   document.getElementById("upload_widget").addEventListener("click", function(){
//       myWidget.open();
//     }, false);


//   return (
//     <button id="upload_widget" class="cloudinary-button">Upload files</button>
//   )
// }

// export default UploadImageCloudinary


const UploadImageCloudinary = () => {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://upload-widget.cloudinary.com/global/all.js";
    script.async = true;

    document.body.appendChild(script);
  
  }, []);

  function showUploadWidget() {
    window.cloudinary.openUploadWidget({ cloud_name: 'CLOUDNAME', sources: [ 'local' ], upload_preset: 'PRESETNAME'}, function(error, result) { console.log( result) });
  }
   
  return (
    <button onClick={showUploadWidget}>Upload files</button>
  )
}

export default UploadImageCloudinary