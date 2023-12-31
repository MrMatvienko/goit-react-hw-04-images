import { Modal } from 'components/Modal/Modal';
import { Item } from './ImageGalleryItem.styled';
import { useState } from 'react';

export const ImageGalleryItem = ({
  galleryItem: { webformatURL, largeImageURL, tags },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };
  return (
    <>
      <Item className="gallery-item" onClick={toggleModal}>
        <img src={webformatURL} alt={tags} width={300} height={200} />
      </Item>
      {isModalOpen && (
        <Modal
          largeImageURL={largeImageURL}
          alt={tags}
          onCloseModal={toggleModal}
        />
      )}
    </>
  );
};

// export class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   toggleModal = () => {
//     this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
//   };

//   render() {
//     const {
//       galleryItem: { webformatURL, largeImageURL, tags },
//     } = this.props;

//     return (
//       <>
//         <Item className="gallery-item" onClick={this.toggleModal}>
//           <img src={webformatURL} alt={tags} width={300} height={200} />
//         </Item>
//         {this.state.isModalOpen && (
//           <Modal
//             largeImageURL={largeImageURL}
//             alt={tags}
//             onCloseModal={this.toggleModal}
//           />
//         )}
//       </>
//     );
//   }
// }
