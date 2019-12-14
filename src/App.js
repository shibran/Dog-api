import React, {useState} from 'react'
import './App.css'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SelectBreeds from './Components/SelectBreeds'
import ShowDog from './Components/ShowDog'

function App() {

  const [imgUrl,setImgUrl] = useState("https://images.dog.ceo/breeds/affenpinscher/n02110627_475.jpg")

  const callback = (url) =>{
    setImgUrl(url)
  }

  return (
    <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#e0f2f1', height: '80vh' }}>
          <SelectBreeds callback={callback}/>
          <ShowDog imgUrl={imgUrl}/>
        </Typography>
      </Container>
  );
}

export default App;

