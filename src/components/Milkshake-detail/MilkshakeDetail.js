import { useState } from "react";
import { useParams } from "react-router-dom";
import './MilkshakeDetail.css'

const MilkshakeDetail = ({products}) => {
  const {id} = useParams()
  const selectedProduct = products.find(product => product.id == id);
  
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, { name, comment }]);
    setName("");
    setComment("");
    alert(`Your review: "${comment}" successfully added!`)
  };
  if (!selectedProduct) {
    return <div className="main-wrapper">Product not found</div>;
  }
  return(
    <div className="main-wrapper">
      <div className="container">
        <div className="product-div">
          <div className="product-div-left">
            <div className="img-container">
              <img src={selectedProduct.img} alt="milkshake" className="img-main"/>
            </div>
            <span className = "product-name">{selectedProduct.title}</span><br/>
            <span className="product-price">Price: 5$</span> 
          </div>
          <div className="product-div-right">
            <p className="product-description">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <div className="btn-groups">
              <button type="button" className="add-cart-btn">add to cart</button>
            </div>
            <div className="btn-groups">
              <button type="button" className="buy-now-btn">buy now</button>
            </div>
          </div>
        </div>

     <div className="comment-section">
        <h2>Comments</h2>
        <form onSubmit={handleCommentSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className="input-comment"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea
              className="input-comment"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index}>
              <p><strong>{comment.name}:</strong> {comment.comment}</p>
            </div>
          ))}
      </div>
        </div>
      </div>
    </div>

  )
}

export default MilkshakeDetail;
