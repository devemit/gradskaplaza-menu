import { NavLink } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu_container'>
      <div className='men'>
        <div
          className='blur-image'
          style={{ position: 'relative', height: '400px', overflow: 'hidden' }}
        >
          <ImageComponent src={'/ref.jpg'} />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              width: '100%',
              padding: '10px',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '20px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '10px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                Лежалка/Sunbed
              </div>
              <div
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '8px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                170ден/2.9€
              </div>
              <div
                style={{ fontSize: '0.8rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
              >
                со лежалката добивате по ваш избор кафе и вода, пиво или сок
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='men'>
        <div className='blur-image'>
          <ImageComponent src={'/cocc.jpg'} />
        </div>
        <NavLink className='link' to='/drinks'>
          <button className='btn_link'>Пиjалоци</button>
        </NavLink>
      </div>
      <div className='men'>
        <div className='blur-image'>
          <ImageComponent src={'/hamm.jpg'} />
        </div>
        <NavLink className='link' to='/foods'>
          <button className='btn_link'>Храна</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
