function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img src={image.image_url} alt={image.name} />
      <div className="image-card-info">
        <h2>{image.name}</h2>
        {/* <p>Owner: {image.owner.user?.username || 'Unknown'}</p> */}
      </div>
    </div>
  );
}

export default ImageCard;
