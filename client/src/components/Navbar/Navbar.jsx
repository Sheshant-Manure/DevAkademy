import React, { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import MenuLogo from '../../assets/menu.png';
import LogoSymbol from '../../assets/logosymbol.png';
import LogoText from '../../assets/logotext.png';
import { useDispatch, useSelector } from 'react-redux';
import { updateScreenWidth } from '../../redux/slices/screenWidthSlice';

const Navbar = () => {
  const scrnWidth = useSelector((state) => state.screenWidth.scrnWidth);
  const [activeMenuItem, setActiveMenuItem] = useState('Home');
  const dispatch = useDispatch();

  useEffect(() => { 
    const handleResize = () => dispatch(updateScreenWidth());
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const menuItems = ['Home', 'Courses', 'About', 'Blogs'];

  return (
    <>
    <div className={style.fillerDiv}></div>
    <nav className={style.container} style={{fontFamily: "Gilroy-Regular, sans-serif"}}>
      <ul className={style.desktop}>
        <li className={style.logos}>
          <img width={'50px'} src={LogoSymbol} alt='Logo Symbol' draggable='false' />
          <img width={'150px'} src={LogoText} alt='Logo Text' draggable='false' />
        </li>
        {scrnWidth > 810 ? (
          menuItems.map((menuItem) => (
            <li
              key={menuItem}
              className={`${style.desktopli} ${activeMenuItem === menuItem ? style.activeMenuItem : ''}`}
              onClick={() => setActiveMenuItem(menuItem)}
            >
              {menuItem}
            </li>
          ))
        ) : (
          <li className={style.MenuLogo}>
            <img src={MenuLogo} alt='Menu Logo' />
          </li>
        )}
      </ul>
    </nav>
    </>
  );
};

export default Navbar;