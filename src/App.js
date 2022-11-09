import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a
            className="App-link"
            href="https://www.site.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <a
            className="hamburguer-menu"
            href="https://www.site.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={menu} className="hamburguer-menu" alt="menu" />
          </a>
        </nav>
        <section className="banner">
          <h1 classname="banner-title">Say Hello to ReactJS</h1>
          <p className="banner-text">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <a 
            className="cta-banner"
            href="https://www.site.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awesome!
          </a> 
        </section>
      </header>
      <article>
        <ul>
          <li>
            <img src={icon1} className="icons" alt="icons" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </li>
          <li>
            <img src={icon2} className="icons" alt="icons" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </li>
          <li>
            <img src={icon3} className="icons" alt="icons" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </li>
          <li>
            <img src={icon4} className="icons" alt="icons" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default App;
