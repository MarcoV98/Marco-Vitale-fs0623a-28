import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImgComponent from './components/ImgComponent';

function App() {
  return (
    <div className="App">
      <ButtonComponent text="Click here" />
      <ImgComponent src="cano.png" alt="cano"/>
    </div>
  );
}

export default App;
