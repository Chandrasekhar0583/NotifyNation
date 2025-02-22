import React from 'react'

const ImageSend = () => {
    const fun = () => {
        const data = document.getElementsByTagName("input")[0].files[0];
        const mydata = new FormData();
        mydata.append("file", data);
    
        axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND}/upload`, mydata)  // Updated the port here
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.error("Error uploading file:", err);
          });
      };
 

  return (
    <>
    <input type='file' />
      <button onClick={fun}>Send to backend</button>
      </>
  )
}

export default ImageSend