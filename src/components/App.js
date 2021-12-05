import React, { useState } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import Loading from "./Loading";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const onSearchSubmit = async (term) => {
    setLoading(true)
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    if (response.status === 200) {
      setImages(response.data.results);
      console.log(loading);
      setLoading(false)
    } else {
      console.log("ERROR");
      console.log(loading);
      setLoading(false)
    }
  }
  return (
    <>
      {loading ? <Loading /> :
        <div className="ui container" style={{ marginTop: "20px" }}>
          {console.log(images.length)}
          <SearchBar onSubmit={onSearchSubmit} />
       
          {images.length === 0 ? <h1 style={{textAlign:"center"}}>Sorry didn't find any image...</h1> :
             <ImageList images={images} />
          }
          
        </div>

      }
    </>
  )
}

export default App

