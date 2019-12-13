import React, {useState} from 'react'
import './App.css'
import SelectBreeds from './Components/SelectBreeds'
import ShowDog from './Components/ShowDog'

function App() {

  const [imgUrl,setImgUrl] = useState("https://images.dog.ceo/breeds/affenpinscher/n02110627_475.jpg")

  const callback = (url) =>{
    setImgUrl(url)
  }

  return (
    <div className="app-container">
      <div className="main-container">
        <SelectBreeds className="selectBreed-container" callback={callback}/>
        <ShowDog className="image-container" imgUrl={imgUrl}/>
      </div>
    </div>

  );
}

export default App;

