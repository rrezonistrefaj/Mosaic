import { Images } from './Components/Images';
import { useState } from 'react';
import axios from 'axios';



function App() {

  const [images, setImages] = useState([]);

const fetchAPI=async() => {
    const response = await axios.get ('https://api.unsplash.com/photos/?client_id=M89cfeC8vU-Y_NmfncajDE94NOZOxKpaz0fWZuuDmQc');
    const data = await response.data;
    setImages(data);
}
  return (
    <div className='container'>
      <button className="btn" onClick={fetchAPI}>FETCH</button>
      <div className='photos'>
        {images.length>0&&(
          <Images images= {images}/>
        )}
      </div>
    </div>
  );
}

export default App;
