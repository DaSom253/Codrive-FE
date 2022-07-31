import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-inner">
          <div className="global-menu-area">
            <div className="logo">
              <a href="/">
                <span id="title">Codrive</span>
              </a>
            </div>
            <div className="global-menu">
              <nav>
                <ul>
                  <li>
                    <a href="/">게시판</a>
                  </li>
                  <li>
                    <a href="/">example</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="sub-menu-area">
            <span>로그인 | 회원가입</span>
          </div>
        </div>
      </header>
      <summary className="summary">
        <div>
          <span className="summary-text">개발</span>
          할 때 무엇을 먼저 해야할지 고민되시나요?
          <br />
          다른 개발자는 어떻게 했는지,
          <br />
          <span className="summary-text">Codrive</span>
          에서 확인하세요.
        </div>
      </summary>
      <main className="main"></main>
    </div>
  );
}

export default App;
