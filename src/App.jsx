import SearchBar from "./components/SearchBar/SearchBar"
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import axios from "axios";

import { useState, useEffect } from 'react';
import { getGallery } from './core/gallery.js';
import ImageModal from "./components/ImageModal/ImageModal";

function App() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setLoading(true);
    setError('');

    const url = getGallery(query, page);
    axios.get(url)
      .then(response => {
        const { results, total_pages } = response.data;
        setItems(prevItems => [...prevItems, ...results]);
        setTotalPages(total_pages);
      })
      .catch(() => {
        setError('Error fetching data. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);
  
  const onSearch = (query) => { 
    setQuery(query);
    setPage(1);
    setItems([]);
    setTotalPages(0);
    setError('');
  }

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
   }

  const onOpenModal = (item) => { 
    setIsOpenModal(true);
    setSelectedItem(item);
  }

  const onCloseModal = () => { 
    setIsOpenModal(false);
    setSelectedItem(null);
  }

  const isShowLoadMoreBtn = items.length > 0 && !loading && page < totalPages;
  const isShowError = error !== '';

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {items.length > 0 && <ImageGallery items={items} onOpenModal={onOpenModal} />}
      {isShowLoadMoreBtn && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {loading && <Loader />}  
      {isShowError && <ErrorMessage message={error} />}
      {isOpenModal && <ImageModal item={selectedItem} onCloseModal={onCloseModal} />}
    </>
  )
}

export default App
