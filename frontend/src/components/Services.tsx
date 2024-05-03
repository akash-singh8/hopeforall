import React from "react";
import styles from "../styles/Services.module.css"; // Import your CSS file
import img1 from "../assets/Donate.png"; // Correct the image import path
import img2 from "../assets/Fundraisingg.png"; // Correct the image import path

interface TileProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void; // Optional button click handler
}

const Tile: React.FC<TileProps> = ({
  image,
  title,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <div className={styles.tile}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className={styles.container}>
      <Tile
        image={img1} // Replace with your image path
        title="Donate"
        description="Stand with the needy. Show your humanity, lend your support"
        buttonText="Donate"
        onClick={() => console.log("Tile 1 button clicked!")} // Optional click handler
      />
      <Tile
        image={img2} // Replace with your image path
        title="FundRaiser"
        description="Empower change. Take the first step by supporting yourself, then extend your hand to others in need"
        buttonText="RaiseFund"
        onClick={() => console.log("Tile 2 button clicked!")} // Optional click handler
      />
    </div>
  );
};
export default Services;
