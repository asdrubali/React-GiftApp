import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";


export const useFetchGifs = ( category ) => {

  const [newImage, setnewImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getGifts(category)
        .then((newImg) => {
            setnewImage(newImg)
            setIsLoading(false)  
        });
  }, []);
 
  return {
    images: newImage,
    isLoading,
  }
};
