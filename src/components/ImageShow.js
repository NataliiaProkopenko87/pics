import './ImageShow.css'; 

function ImageShow({ image }) {
  return (
  <div className='image-card'>
    <img src={image.urls.small} alt={image.alt_description} />
    <div className='image-card-overlay'>
{image.user?.name && (
  <span className='image-card-autor'>{image.user.name}</span>
)}
{image.alt_description && (
  <p className="image-card-desc">{image.alt_description}</p>
)}
</div>
  </div>
  );
}

export default ImageShow; 