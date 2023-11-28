import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'API/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './Button/Button';
import Notiflix from 'notiflix';
import { Loader } from './Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isButtonShow, setIsButtonShow] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      if (query !== '') {
        try {
          setIsLoading(true);
          const data = await getImages(query, page);

          if (!data.totalHits || !query) {
            setIsButtonShow(false);
            setError(true);
            setIsLoading(false);
            Notiflix.Notify.failure(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          } else {
            const totalImages = page === 1 ? data.hits : [...data.hits];
            setImages(totalImages);
            setIsButtonShow(totalImages.length >= 12);
            setIsLoading(false);
            Notiflix.Notify.success('We found your query');
          }
        } catch (error) {
          setError(error.message);
          setIsLoading(false);
        }
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages(null);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setIsButtonShow(false);
    setIsLoading(true);
  };

  return (
    <>
      <Searchbar handleSearch={handleSubmit} />
      <ImageGallery images={images} />
      {isButtonShow && <LoadMoreButton onClick={onLoadMore} />}
      {isLoading && <Loader />}
    </>
  );
};

// export class App extends Component {
//   state = {
//     query: '',
//     images: null,
//     isLoading: false,
//     error: null,
//     page: 1,
//     isButtonShow: false,
//   };

//   componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;
//     if (query !== prevState.query || page !== prevState.page) {
//       if (query !== '') {
//         this.fetchImages(query, page);
//         Notiflix.Notify.success('We found your query');
//       }
//     }
//   }

//   fetchImages = async (query, page) => {
//     try {
//       this.setState({ isLoading: true });
//       const data = await getImages(query, page);

//       if (!data.totalHits || !query) {
//         this.setState({
//           isButtonShow: false,
//           error: true,
//           isLoading: false,
//         });
//         Notiflix.Notify.failure(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//       } else {
//         const { images: prevImages } = this.state;
//         const totalImages =
//           page === 1 ? data.hits : [...prevImages, ...data.hits];

//         this.setState({
//           images: totalImages,
//           isButtonShow: totalImages.length >= 12,
//           isLoading: false,
//         });
//       }
//     } catch (error) {
//       this.setState({ error: error.message, isLoading: false });
//     }
//   };

//   handleSubmit = query => {
//     this.setState(
//       {
//         query,
//         page: 1,
//         images: null,
//       },
//       () => {
//         this.fetchImages(query, this.state.page);
//       }
//     );
//   };

//   onLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//       isButtonShow: false,
//       isLoading: true,
//     }));
//   };
//   render() {
//     const { images, isButtonShow, isLoading } = this.state;
//     return (
//       <>
//         <Searchbar handleSearch={this.handleSubmit} />
//         <ImageGallery images={images} />
//         {isButtonShow && <LoadMoreButton onClick={this.onLoadMore} />}
//         {isLoading && <Loader />}
//       </>
//     );
//   }
// }
