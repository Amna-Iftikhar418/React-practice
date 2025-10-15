
import "./Picture.css"


export default function Pictureset({ pic, title }) {
  return (
    <div >
      <img className="img2" src={pic} alt="Product pic" />
      <p>{title}</p>
    </div>
  );
}
