import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="123123"
            title="The lean startup: How constant Innovation Creates Radically Successful Businesses Paperback"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            
            price={29.99}
            rating={5}
          />
          <Product
            id="547147"
            title="Kenwood kMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image=
              "https://m.media-amazon.com/images/I/71d-rb2c-7L._AC_UY218_.jpg"
            
          />
        </div>
        <div className="home__row">
          <Product
            id="550550"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/714Rq4k05UL._AC_UY218_.jpg"          
          />
          <Product 
            id="789550"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={"https://m.media-amazon.com/images/I/81MF389-9gS._AC_UY218_.jpg"}
            />
          <Product
            id="369874"
            title="(Refurbished) Apple Watch Series 3 (GPS + Cellular, 42MM) - Space Gray Aluminum Case with Pink Sport Band"
            price={208.99}
            rating={5}
            image={"https://m.media-amazon.com/images/I/61ohGh70oeL._AC_UY218_.jpg"}
           />
        </div>
        <div className="home__row">
          <Product
            id="490490"
            title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image={"https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_SL1000_.jpg"}  
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
