import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
             <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" 
              alt="" />   
              <div className="home__row">
                  <Product 
                  title="Rich Dad Poor Dad"
                  price="29.99"
                  rating={4}
                  image="https://m.media-amazon.com/images/I/51u8ZRDCVoL._AC_SY200_.jpg"
                  />
                  <Product
                  title="PS 5 Controller"
                  price="59.99"
                  rating={5}
                  image="https://m.media-amazon.com/images/I/41McnBJl0FL._AC_SY200_.jpg"
                  />
                  
              </div>
              <div className="home__row" >
                  <Product
                   title="Nike Boost"
                  price="49.99"
                  rating={5}
                  image="https://m.media-amazon.com/images/I/41-1qBK2E3L._AC_SY200_.jpg"
                  />
                  <Product
                   title="Roku TV Ultra"
                  price="74.99"
                  rating={5}
                  image="https://m.media-amazon.com/images/I/41LOLsICjpL._AC_SY200_.jpg"
                  />
                  <Product
                   title="Anne Klien Watch Set"
                  price="159.99"
                  rating={5}
                  image="https://m.media-amazon.com/images/I/41PQOlZ00eL._AC_SY200_.jpg"
                  />
                  
              </div>
              <div className="home__row">
                  <Product
                   title="LG HD Monitor 32inches"
                  price="129.99"
                  rating={5}
                  image="https://m.media-amazon.com/images/I/31PTviHMeUL._AC_SY200_.jpg"
                  />
                  
              </div>
            </div>
        </div>
    )
}

export default Home;
