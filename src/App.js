import './App.css';
import { useSelector, useDispatch } from 'react-redux' 
import Meme from './components/Meme'
import MemeForm from './components/MemeForm'

function App() {

  // useSelector to get "memes" from Redux "store" 
  const memes = useSelector(store => store.memes) 
  // useDispatch to fire off action 
  const dispatch = useDispatch() 

  // addMeme() 
  const addMeme = (newMeme) => {
    dispatch({type: 'CREATE', meme: newMeme })
  }

  // deleteMeme() 
  const deleteMeme = (id) => {
    dispatch({type: 'DELETE', id})
  }
  
  const memeList = memes.map(meme => (
    <Meme
      key={meme.id}
      url={meme.url}
      topText={meme.topText}
      bottomText={meme.bottomText}
      // pass deleteMeme
      deleteMeme={() => deleteMeme(meme.id)}
    />
  ));

  return (
    <div className="App">
      <MemeForm addMeme={addMeme} /> 
      {memeList} 
    </div>
  );
}

export default App;
