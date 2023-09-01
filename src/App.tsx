import "./css/App.css";
import "./css/glasscard.css";

function App() {
  return (
    <div className="background">
      <div className="card">
        <div className="card-container">
          <div className="label-container">
            <div className="icon-title"></div>
            <p className="label-name">SeongUk Moon</p>
            <p className="label-nickname">ANTEGRAL</p>
          </div>
          <div className="vertical-hr"></div>
          <div className="content-container"></div>
          <div className="social-buttons"></div>
          <p className="label-tip">
            document.onmousedown = (event) =&gt; filpCard();
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
