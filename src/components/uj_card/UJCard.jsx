import "./UJCard.css";

const UJCard = ({ setIsPortalOpen, image, heading, description }) => {
  return (
    <div className="ujc_container">
      <img className="image-styling" src={image} alt="bali" />
      <h4 className="margin-tb-8px">{heading}</h4>
      <p className="grey-color margin-tb-8px">{description}</p>
      <button
        className="ujc_button"
        onClick={() => {
          setIsPortalOpen(true);
        }}
      >
        Know More
      </button>
    </div>
  );
};

export { UJCard };
