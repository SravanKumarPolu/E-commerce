import React from 'react';
import buyme from '/src/assets/svges/BuyMe.svg'; // Vite uses this relative import
import Home from '../pages/Home';
import About from '../pages/About';
import Collection from '../pages/Collection';

import Search from '../pages/Search';
import user from '/src/assets/svges/User.svg';
import Cart from '../pages/Cart';
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      {/* Logo Section */}
      <section className="flex-shrink-0">
        <img src={buyme} alt="BuyMe Logo" className="w-24 h-auto" />
      </section>

      {/* Navigation Links Section */}
      <section className="flex space-x-8 coursor-ponter">
        <Home />
        <About />
        <Collection />
      </section>

      {/* Cart Section */}
      <section className="flex-shrink-0 flex space-x-8 ">
        <Search />
        <Cart />
        <div>
          <img src={user} alt="User" className="w-10 h-auto" />
        </div>
      </section>
    </div>
  );
};

export default Navbar;

