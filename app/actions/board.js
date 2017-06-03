export const ADD_IMAGE = 'ADD_IMAGE';
export const ADD_IMAGES = 'ADD_IMAGES';

export const addImage = image => ({
  type: 'ADD_IMAGE',
  image,
});

export const addImages = images => ({
  type: 'ADD_IMAGES',
  images,
});
