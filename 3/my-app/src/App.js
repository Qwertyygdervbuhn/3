import React from "react";
import "./App.css"; 


import logo from "./components/logo.png";
import pointIcon from "./components/Point.png";
import peopleIcon from "./components/People.png";
import cardIcon from "./components/Card.png";
import favoriteIcon from "./components/Favorite.png";

const TopBar = () => {
  const texts = [
    "#buy now", "#вседлядому", "#швидкотазручно",
    "#buy now", "#вседлядому", "#buy now",
    "#вседлядому", "#швидкотазручно", "#buy now", "#вседлядому"
  ];

  return (
    <div id="up">
      <div className="scroll-content">
        {texts.map((text, index) => (
          <p className="textLine" key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

const NavBar = () => (
<nav>
  <div id="navLeft">
    <div id="divForBurgerMenu">
      <div id="burgerMenu">
        <hr className="lineInBurgerMenu" />
        <hr className="lineInBurgerMenu" />
        <hr className="lineInBurgerMenu" />
      </div>
      <h3 id="h3ForBurgerMenu">Menu</h3>
    </div>
    <img src={logo} alt="logo" id="logoInNav" />
    <div id="divForTegA">
      <a href="/products">Товари</a>
      <a href="/rooms">Кімнати</a> 
      <a href="/design">Дизайн</a>
    </div>
  </div>
  <div className="search-bar">
    <input type="text" placeholder="Пошук" />
  </div>
  <div id="navRight">
    <div id="kiev">
      <img src={pointIcon} alt="Location" />
      <p>Київ</p>
    </div>
    <div id="login-pass">
      <img src={peopleIcon} alt="User" />
      <p>Привіт! Увійдіть в систему</p>
    </div>
    <div id="card">
      <img src={cardIcon} alt="Card" />
    </div>
    <div id="favorite">
      <img src={favoriteIcon} alt="Favorite" />
    </div>
  </div>
</nav>

);

const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <TopBar /> 
      <NavBar />

      <div style={{ padding: '40px' }}>

        <section>
          <h2>ЗАТИШНІ НАБОРИ</h2>
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div style={{ width: '200px', height: '120px', backgroundColor: '#ddd', borderRadius: '8px' }} />
                <p style={{ marginTop: '10px' }}>Lorem ipsum dolor sit amet consectetur, gravida convallis id orci egestas non.</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '60px' }}>
          <h2>ТОВАРИ З ОДНОГО НАБОРУ</h2>
          <p style={{ maxWidth: '700px' }}>
            Lorem ipsum dolor sit amet consectetur, adipisci velit. Et tempora molestiae est, ut perspiciatis officia
            quia quasi necessitatibus dolor earum.
          </p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <div style={{ flex: 1, backgroundColor: '#ddd', height: '250px', borderRadius: '8px' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ backgroundColor: '#ddd', height: '115px', borderRadius: '8px' }} />
              <div style={{ backgroundColor: '#ddd', height: '115px', borderRadius: '8px' }} />
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '20px', gap: '20px' }}>
            <div style={{ backgroundColor: '#ddd', height: '100px', flex: 1, borderRadius: '8px' }} />
          </div>
        </section>

  
        <section style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          {['Доставка', 'Оплата', 'Оформлення', 'Повернення'].map((title, i) => (
            <div key={i} style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>📦</div>
              <strong>{title}</strong>
              <p style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet, tempora molestiae non.</p>
            </div>
          ))}
        </section>
        {[1, 2].map((_, i) => (
          <section key={i} style={{ marginTop: '60px' }}>
            <h2>НАЗВА РОЗДІЛУ</h2>
            <p style={{ maxWidth: '800px', fontSize: '14px', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia molestiae laboriosam consectetur
              aliquid iusto veniam error, distinctio eveniet rem necessitatibus exercitationem provident odio ratione
              corrupti repellendus at, nulla minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
              praesentium laudantium amet.
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default App;
