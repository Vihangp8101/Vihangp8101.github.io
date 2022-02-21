import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';

function App() {
  let title = "CPI/SPI/CGPA to Percentange(%) Converter"
  return (
    <>
      <Header title={title}/>
      <Body title={title}/>
    </>
  );
}

export default App;
