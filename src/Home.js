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
                  id="24555"
                  title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
                  price="29.99"
                  rating={4}
                  image="https://m.media-amazon.com/images/I/51u8ZRDCVoL._AC_SY200_.jpg"
                  />
                  <Product
                  id="24557"
                  title="Playstation DualSense Wireless Controller"
                  price="59.99"
                  rating={5}
                  image="https://m.media-amazon.com/images/I/41McnBJl0FL._AC_SY200_.jpg"
                  />
                  
              </div>
              <div className="home__row" >
                  <Product
                  id="24558"
                  title="2020 Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Gray (2nd Generation)"
                  price="749.99"
                  rating={5}
                  image="https://m.media-amazon.com/images/I/815ztYEEwYL._AC_UL320_.jpg"
                  />
                  <Product
                  id="24559"
                   title="Roku Ultra 2020 | Streaming Media Player HD/4K/HDR/Dolby Vision with Dolby Atmos, Bluetooth Streaming"
                  price="74.99"
                  rating={3}
                  image="https://m.media-amazon.com/images/I/41LOLsICjpL._AC_SY200_.jpg"
                  />
                  <Product
                  id="24560"
                   title=" Anne Klein Women's Swarovski Crystal Accented Watch and Bangle Set, AK/3288"
                  price="159.99"
                  rating={3}
                  image="https://m.media-amazon.com/images/I/41PQOlZ00eL._AC_SY200_.jpg"
                  />
                  
              </div>
              <div className="home__row">
                  <Product
                  id="24561"
                   title="LG 27GL83A-B 27 Inch Ultragear QHD IPS 1ms NVIDIA G-SYNC Compatible Gaming Monitor, Black"
                  price="129.99"
                  rating={5}
                  image="https://m.media-amazon.com/images/I/91lS5yEDH-L._AC_UY218_.jpg"
                  />
                  
              </div>
            </div>
        </div>
    )
}

export default Home;
