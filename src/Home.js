import React from 'react'
import "./Home.css"
import Product from './Product'


function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
      <img className="home_img"src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/Changestore/SMP_Desktop_2x_2._CB669743293_.jpg' ></img>   
      
      <div className='home_row'>
      <Product
            id="23445930"
            title="Marshall Uxbridge Home Voice Speaker with Amazon Alexa Built-in,White"
            price={21999.00}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81WIcjaGp2L._SL1500_.jpg"
          />
      <Product
            id="4903810"
            title="New Apple Watch Series 6 (GPS + Cellular, 44mm) - Blue Aluminium Case with Deep Navy Sport Band"
            price={50000.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71j12hyvEVL._SL1500_.jpg"
      />

      <Product
                id="12321"
                title="
                Apple iPhone 11 Pro (64GB, Midnight Green) [Locked] + Carrier Subscription"
                price={87999.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/81mxun+6pEL.jpg"
      />



      </div>

      
      <div className='home_row'>
          <Product
            id="21538094"
            title="Amazon Brand - Solimo XXXL Bean Bag Filled With Beans (Green with Yellow Piping)"
            price={2099.00}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/81WoYTStgAL._SL1500_.jpg"
          />

          <Product
                  id="12321"
                  title="RUNMUS Stereo Gaming Headset"
                  price={7000}
                  rating={3}
                  image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SX679_.jpg"
          />

          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={59999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
      <Product
                  id="12321"
                  title="USB 3.0 Universal Laptop Docking Station, Acodot Dual Monitor Dock Support Windows Equipped with Dual HDMI and DVI/VGA, Gigabit Ethernet, Audio, 6 USB Ports 
              "
                  price={4000}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/616Vux27VAL._AC_SL1500_.jpg
              "
                />
        
          
      </div>
      
      
      <div className='home_row'>
      <Product
            id="12321341"
            title="The Theory of Everything: The Origin and Fate of the Universe"
            price={300.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203,200_.jpg"
      />
      <Product
                  id="12321"
                  title="Samsung 860 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-76E500B/AM)"
                  price={7000}
                  rating={3}
                  image="https://images-na.ssl-images-amazon.com/images/I/814poe%2BIDsL._AC_SX679_.jpg"
                />
     <Product
                  id="12321"
                  title="AMD Ryzen 5 3600X 6-Core, 12-Thread Unlocked Desktop Processor "
                  price={21999}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/616i5Il16qL._AC_SL1000_.jpg"
                />
      </div>
      <div className='home_row'>
  
                <Product
                  id="12321"
                  title="Digital alarm clock with a 0.7-inch green LED display for easily checking the time at a glance
              "
                  price={219}
                  rating={2}
                  image="https://images-na.ssl-images-amazon.com/images/I/61j17FjPhtL._AC_SL1500_.jpg"
                />
             <Product
                  id="12321"
                  title="boAt Rockerz 510 Super Extra Bass Bluetooth Headset  (Raging Red, On the Ear)"
                  price={1500}
                  rating={1}
                  image="https://rukminim1.flixcart.com/image/416/416/k51cpe80pkrrdj/headphone-refurbished/y/b/c/c-rockerz-on-ear-510-boat-original-imafn6u7ec8cmk8y.jpeg?q=70"
                />



      </div>
      
      </div> 

    </div>
  )
}

export default Home