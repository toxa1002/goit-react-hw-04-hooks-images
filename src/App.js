import React, { useState, useEffect } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import fetchApi from './apiService/api';

function App() {
  const [page, setPage] = useState(0);
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState({});

  const toggleModal = largeImage => {
    const largeImgData = largeImage ? largeImage : {};
    setShowModal(!showModal);
    setLargeImageUrl(largeImgData);
  };

  useEffect(() => {
    if (page === 0) return;
    fetchApi(searchValue, page)
      .then(images => onPushImagesToState(images))
      .catch(error => console.log(error));
  }, [searchValue, page]);

  const onPushImagesToState = images => {
    setStatus('resolved');
    setImages(prevImages => {
      return [...prevImages, ...images.hits];
    });
  };

  const onSubmitForm = value => {
    if (value.trim() === '') return;
    if (value === searchValue) return;
    setStatus('pending');
    setImages([]);
    setSearchValue(value);
    setPage(1);
  };

  const onLoadMore = ref => {
    setStatus('pending');
    setPage(prevPage => {
      return prevPage + 1;
    });
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="App">
      {showModal && <Modal img={largeImageUrl} toggleModal={toggleModal} />}
      <Searchbar onSubmit={onSubmitForm} />
      {status === 'pending' && <Loader />}
      {searchValue.trim() === '' && (
        <h2 className="title">Введите запрос в поиск</h2>
      )}
      {images.length > 0 && (
        <ImageGallery hits={images} toggleModal={toggleModal} />
      )}
      {images.length > 0 && <Button incrementPage={onLoadMore} />}
    </div>
  );
}

export default App;
