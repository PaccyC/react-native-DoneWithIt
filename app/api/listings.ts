import client from './client';

const endpoint = "/listings"
import { Listing } from '../types';
const getListings = ()=> client.get(endpoint)

const addListing = (listing: Listing) => {
    const data = new FormData();
    data.append("title", listing.title);
    data.append("price", listing.price);
    data.append("categoryId", listing.category.value);
    data.append("description", listing.description);
  
    listing.images.forEach((image, index) => {
      data.append(`images[${index}]`, {
        name: `image_${index}.jpg`,
        uri: image.url, 
        type: "image/jpeg",
      });
    });
  
    if (listing.location) {
      data.append("location", JSON.stringify(listing.location));
    }
  
    return client.post(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress(progress) {
          console.log(progress);
          
      },
    });
  };
  
export default {
    getListings,
   addListing
}