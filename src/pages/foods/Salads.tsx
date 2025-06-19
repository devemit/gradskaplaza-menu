import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Salads() {
  return (
    <>
      <div className='table'>
        <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
          <ButtonBack link={'/foods'} />
          <DrinktsTitle label={'Салати/Salads'} />
        </div>
        <table>
          <tr>
            <th>Производ/Product</th>
            <th>Цена/Price</th>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                Цезар 0.400кг
                <br />
                <span style={{ fontSize: '.7rem' }}>
                  марула, шери, пченка, пилешко, пармезан, дресинг,кубети, маслиново масло
                </span>
              </td>
            </div>
            <td>220ден/3.8€</td>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                Туна 0.425кг
                <br />
                <span style={{ fontSize: '.7rem' }}>
                  марула,туна, маслинки, домат, кромид, пченка, лимон, дресинг, маслиново
                  масло
                </span>
              </td>
            </div>
            <td>220ден/3.8€</td>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                Грчка 0.285кг
                <br />
                <span style={{ fontSize: '.7rem' }}>
                  домат,краставица, млад кормид, сирење, маслиново масло, оригано
                </span>
              </td>
            </div>
            <td>150ден/2.5€</td>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                Шопска 0.345кг
                <br />
                <span style={{ fontSize: '.7rem' }}>
                  домат, краставица, млад кормид, сирење, маслиново масло
                </span>
              </td>
            </div>
            <td>150ден/2.5€</td>
          </tr>
        </table>
      </div>
    </>
  );
}
