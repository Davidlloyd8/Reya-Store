import dressImage from "./image/winter clothes.jpg"

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <p>Reya<span>Store</span></p>
      </div>
      <div className="container">
        <div className="box-container">
          <div className="box1">
            <div className="imageBox">
            <img src={dressImage} alt="Winter Dress" className="dressImage" />
            <p>WINTER DRESS <br/> <s>N</s> 15,000:00</p>
            </div>
          </div>
          <div className="box2">
            <form method="post">
              <p>NAME</p>
              <input type="text" className="inputBox" id="nameField" placeholder="Fullname" required />
              <p>EMAIL</p>
              <input type="email" className="inputBox" id="emailField" placeholder="Email Address" required />
              <p>PHONE</p>
              <input type="text" className="inputBox" id="phoneField" placeholder="PhoneNumber" required />
              <input type="submit" className="inputBox btn" value="BUY NOW" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
