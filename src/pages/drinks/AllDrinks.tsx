import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';

const AllDrinks = () => {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/'} />
        <DrinktsTitle label={'Сите Пијалоци/All Drinks'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        {/* Sunbed Section */}
        <tr>
          <div style={{ maxWidth: '440px', margin: 'auto' }}>
            <td>
              Лежалка/Sunbed
              <br />
              <span style={{ fontSize: '.8rem' }}>
                со лежалката добивате по ваш избор кафе и вода, пиво или сок
              </span>
            </td>
          </div>
          <td>150ден/2.5€</td>
        </tr>

        {/* Separator */}
        <tr>
          <td
            colSpan={2}
            style={{ borderBottom: '2px solid var(--gold)', padding: '5px' }}
          ></td>
        </tr>

        {/* Waters Section */}
        <tr>
          <td>Роса/Rosa</td>
          <td>60ден/1€</td>
        </tr>
        <tr>
          <td>Газирана вода/Mineral Water</td>
          <td>60ден/1€</td>
        </tr>
        <tr>
          <td>Добра Вода/Dobra Voda</td>
          <td>70ден/1.2€</td>
        </tr>

        {/* Separator */}
        <tr>
          <td
            colSpan={2}
            style={{ borderBottom: '2px solid var(--gold)', padding: '5px' }}
          ></td>
        </tr>

        {/* Beers Section */}
        <tr>
          <td>Скопско/Skopsko</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Хајнекен/Heineken</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Скопско Смут/Smooth</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Точено мало/Pint small</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Точено големо/Pint big</td>
          <td>110ден/1.9€</td>
        </tr>

        {/* Separator */}
        <tr>
          <td
            colSpan={2}
            style={{ borderBottom: '2px solid var(--gold)', padding: '5px' }}
          ></td>
        </tr>

        {/* Cocktails Section - Ordered by price low to high */}
        <tr>
          <td>Пина Колада/Pina Colada</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Космополитан/Cosmopolitan</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Маргарита/Margarita</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Текила Санрајс/Tequila Sunrice</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Сандкастл/Sandcastle</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Секс он д'бич/Sex On The Beach</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Блу Лагун/Blue Lagoon</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Фламинго/Flamingo</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Куба Либре/Cuba Libre</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Мохито/Mojito</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>Строубери Колада/Strawberry Colada</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>Строубери маргарита/Strawberry Margarita</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>Блу Хаваи/Blue Hawai</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>А.М.Ф/A.M.F</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>Аризона Твистер/Arizona Twister</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>Лонг Ајланд/Long Island</td>
          <td>250ден/4.1€</td>
        </tr>
      </table>
    </div>
  );
};

export default AllDrinks;
