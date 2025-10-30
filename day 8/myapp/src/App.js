import logo from './logo.svg';
import './App.css';

// Header Component
const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="logo-here" />
      <h2>Amazon Webpage</h2>
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

// Search Component
const Search = () => {
  return (
    <div className="search">
      <input type="text" name="search" id="" placeholder="Search..." />
    </div>
  );
};

// Product Component
const Product = () => {
  return (
    <div className="product">
      <img className="prod-img" src="https://tse2.mm.bing.net/th/id/OIP.x15zZiHrVRQ7olxjJv78vAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Product" />
      <h4>productobject.title</h4>
      <h2>productobject.price</h2>
    </div>
  );
};

// Body Component
const Body = () => {
  return (
    <div className="body-container">
      <Search />
      <div className="prod-container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

// Footer Component (added for completeness)
const Footer = () => {
  return (
    <div className="footer">
      <p>© 2025 Amazon Clone</p>
    </div>
  );
};


// App Component
const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
