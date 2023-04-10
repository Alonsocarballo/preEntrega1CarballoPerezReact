import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';


function App() {
  return (
    <div className="App">

    <NavBar/>
    <ItemListContainer greeting={'Bienvenidos'} />
    </div>
  );
}

export default App;
