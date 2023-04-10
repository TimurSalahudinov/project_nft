function ImageDetails({ image }) {
  return (
    <div className="image-details">
      <img src={image.image_url} alt={image.name} />
      <div className="image-details-info">
        <p>Description: {image.description || 'No description available.'}</p>
        {/* <p>Owner: {image.owner.user?.username || 'Unknown'}</p> */}
        <p>Collection: {image.collection.name}</p>
        {/* <p>Creator: {image.creator.user?.username || 'Unknown'}</p> */}
        <p>Token ID: {image.token_id}</p>
        <p>
          External Link: <a href={image.external_link}>{image.external_link}</a>
        </p>
      </div>
    </div>
  );
}

export default ImageDetails;
