
import Pictureset from "./Pictureset";
export default function Pictureframe() {
  const pics = [
    "/images/pic2.png",
    "/images/pic3.png",
    "/images/pic4.png",
    "/images/pic5.png",
    "/images/pic6.png",
    "/images/pic7.png",
    "/images/pic10.png",
    "/images/pic9.png",
  ];
  return (
    <div className="imageset">
      <div>
        <Pictureset pic={pics[0]} title="OBESSION" />
        <Pictureset pic={pics[1]} title="MANIAC" />

      </div>
      <div>
        <Pictureset pic={pics[2]} title="POSSESSED" />
        <Pictureset pic={pics[3]} title="MANIAC" />


      </div>
      <div>
        <Pictureset pic={pics[4]} title="REVENGE" />
        <Pictureset pic={pics[5]} title="INSANITY" />
      </div>

      <div>
        <Pictureset pic={pics[6]} title="MADNESS" />
        <Pictureset pic={pics[7]} title="MURDER" />
      </div>
    </div>
  );
}
