import { ModalContent, Overlay } from './Modal.styled';
import { useEffect } from 'react';

export const Modal = ({ largeImageURL, alt, onCloseModal }) => {
  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onCloseModal]);

  return (
    <Overlay className="overlay" onClick={handleBackdropClick}>
      <ModalContent className="modal">
        <img src={largeImageURL} alt={alt} width={700} height={400} />
      </ModalContent>
    </Overlay>
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeydown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeydown);
//   }

//   handleKeydown = e => {
//     if (e.code === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };

//   handleBackdropClick = ({ target, currentTarget }) => {
//     if (currentTarget === target) {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     const { largeImageURL, alt } = this.props;

//     return (
//       <Overlay className="overlay" onClick={this.handleBackdropClick}>
//         <ModalContent className="modal">
//           <img src={largeImageURL} alt={alt} width={700} height={400} />
//         </ModalContent>
//       </Overlay>
//     );
//   }
// }
