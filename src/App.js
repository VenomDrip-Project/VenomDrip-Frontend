import "./styles/index.css";
import "./styles/App.css";
import Header from "./widgets/Header.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="main-offer-wrapper">
          <h1 className="main-offer-title">Широкий ассортимент Одежды</h1>
          <p className="main-offer-desc">
            Одежда от известные брендов у нас в каталоге. Только качественные
            вещи.
          </p>
          <div className="main-offer-link">
            <a href="/">Перейти в каталог</a>
          </div>
          <div className="main-offer-button-scroller">
            <button>l</button>
            <button>r</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
