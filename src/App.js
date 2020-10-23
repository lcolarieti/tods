import React, {useEffect} from 'react';
import './App.scss';
import MiniHeader from './components/MiniHeader';
import Header from './components/Header';
import Navbar from './components/Navbar';

import {fetchProduct, selectFetchedProduct} from './slices/product';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoading} from './slices/loading';
import Loading from './components/Loading';
import Carousel from './components/Carousel';
import Details from './components/Details';
import {selectCart} from './slices/cart';
import InfoPanel from './components/InfoPanel';
import Footer from './components/Footer';

const App = () => {
  const navbarItems = [
    {
      label: 'home',
      url: '#'
    },
    {
      label: 'men',
      url: '#'
    },
    {
      label: 'women',
      url: '#'
    },
    {
      label: 'lookbook',
      url: '#'
    },
    {
      label: 'about',
      url: '#'
    },
    {
      label: 'blog',
      url: '#'
    }
  ];
  const dispatch = useDispatch();
  const {data} = useSelector(selectFetchedProduct);
  const loading = useSelector(selectLoading);
  const cart = useSelector(selectCart);

  useEffect(() => {
    !data && dispatch(fetchProduct());

    // eslint-disable-next-line
  }, [cart]);



  return (
    <>
      <header>
        <MiniHeader />
        <Header />
        <Navbar items={navbarItems} />
      </header>
      {
        data && (
          <main className="main-container flex container">
            <Carousel />
            <Details  />
          </main>
        )
      }
      {
        cart.length > 0 && (
          <InfoPanel
            title="Cart"
            description={`${cart.slice(-1).pop().quantity} items added to cart!`}
            time={new Date().getTime()}
          />)
      }
      {loading && <Loading />}
      <Footer />
    </>
  );
}

export default App;
