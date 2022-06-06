import logo from "./logo.svg";
import "./App.css";

function Feature() {
  return (
    <div className="feature">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Item img="https://curiokids.net/wp-content/uploads/2019/12/UNE_Panda_couleur_curiokids-678x381.jpg"></Item>
      <Item img="https://play-lh.googleusercontent.com/ClqAhefKAgT8Luz9Z2-G77ojr_Q78uADdEqgy9JR1-oJmkv0Ds_ibEQz449ob1XKpcI"></Item>
    </div>
  );
}

function Item(props) {
  console.log(props)
  return (
    <div className="item">
      <div className="item-image">
        <img
          src={props.img}
          alt="logo"
        />
      </div>
      <div className="item-footer">
        <img
          src="https://image.thanhnien.vn/660x370/Uploaded/2022/wsxrxqeiod/2022_06_05/tau-thuyen-1073.jpg"
          alt="" className="item-avatar"
        />
        <div className="item-info">
          <h3 className="item-title">Learning React</h3>
          <h4 className="item-author">Daehyeu</h4>
        </div>
      </div>
    </div>
  );
}
export default App;
