import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
