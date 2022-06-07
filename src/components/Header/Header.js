function Item(props) {

    return (
      <div className={`item ${props.className}`} >
        <div className="item-image">
          <img
            src={props.img}
            alt="logo"
          />
        </div>
        <div className="item-footer">
          <img
            src={props.avatar}
            alt="" className="item-avatar"
          />
          <div className="item-info">
            <h3  className="item-title">{props.title || "this is a title" }</h3>
            <h4 className="item-author">{props.author || "this is a author"}</h4>
          </div>
        </div>
      </div>
    );
  }

  export default Item;