import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List, ListContainer } from './ImageGallery.styles';

export const ImageGallery = ({ images }) => {
  return (
    <ListContainer>
      <List className="gallery">
        {images &&
          images.map((image, id) => (
            <ImageGalleryItem key={id} galleryItem={image} />
          ))}
      </List>
    </ListContainer>
  );
};
