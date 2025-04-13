import React from 'react'
import { MdOutlineImageSearch } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';

import css from './SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
  
  const handleSubmit = (event) => { 
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (query === '') {
      toast.error('Please enter a search text');
      return;
    }
    onSearch(query);
    event.target.reset();
  }
  return (
      <>
        <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.inputContainer}>
            <input
              type="text"
              autoComplete="off"
              name="query"
                autoFocus
            placeholder="Search images and photos"
            className={css.input}
                />
            <button type="submit" className={css.button}>
              <MdOutlineImageSearch className={css.icon} />
                </button>
                </div>
            </form>
      </header>
      <Toaster position='top-right' toastOptions={{
        style: {
          background: 'red',
          color: 'white',
        },
      }}/>
      </>
  )
}

export default SearchBar