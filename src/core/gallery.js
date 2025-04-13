export const getGallery = (query, page) => {
    return `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=aFcwwcPK4TxrHvt7sJyZVrHeWsAURh8tQkf3XXiHVkE`;
}

export default getGallery;