import React, {useState} from 'react'
import './App.css'
import SelectBreeds from './Components/SelectBreeds'
import ShowDog from './Components/ShowDog'

function App() {

  const [imgUrl,setImgUrl] = useState("https://images.dog.ceo/breeds/beagle/n02088364_5716.jpg")

  const callback = (url) =>{
    setImgUrl(url)
  }

  return (
    <div className="App">
      <SelectBreeds callback={callback}/>
      <hr/>
      <ShowDog imgUrl={imgUrl}/>
    </div>
  );
}

export default App;

