import './ImageList.css'; 
import ImageShow from "./ImageShow";

function ImageList({images, query}) {
    //const renderedImages = images.map((image) => {
      //  return <div key={image.id}>
        //<ImageShow image={image} /> 
        //</div>
    //});
    if(!images.length) {
        return (
           <div className='empty-state'>
            <p>Nothing here yet</p>
            <span>Type something above to begin</span>
</div>    
        );
      }

  return ( 
  <div className="image-list">
    {images.map((image) => (
        <div key={image.id} className='image-list-item'>
        <ImageShow image={image} />
        </div>
    ))}
    </div>
  );
  }

export default ImageList; 