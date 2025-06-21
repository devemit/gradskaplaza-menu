import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';

const AllDrinks = () => {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/'} />
        <DrinktsTitle label={'Пијалоци/Drinks'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

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
          <td>170ден/2.9€</td>
        </tr>

        <tr>
          <td
            colSpan={2}
            style={{ borderBottom: '2px solid var(--gold)', padding: '5px' }}
          ></td>
        </tr>

        <tr>
          <td>Нес Кафе/Coffee</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Вода мала/Water small</td>
          <td>40ден/0.7€</td>
        </tr>
        <tr>
          <td>Вода голема/Water big</td>
          <td>50ден/0.9€</td>
        </tr>
        <tr>
          <td>Газирана вода/Mineral Water</td>
          <td>60ден/1€</td>
        </tr>
        <tr>
          <td>Добра Вода/Dobra Voda</td>
          <td>70ден/1.2€</td>
        </tr>
        <tr>
          <td
            colSpan={2}
            style={{ borderBottom: '2px solid var(--gold)', padding: '5px' }}
          ></td>
        </tr>
        <tr>
          <td>Кока кола/Coca Cola</td>
          <td>70ден/1.2€</td>
        </tr>
        <tr>
          <td>Фанта/Fanta</td>
          <td>70ден/1.2€</td>
        </tr>
        <tr>
          <td>Спрајт/Sprite</td>
          <td>70ден/1.2€</td>
        </tr>
        <tr>
          <td>Цеден Портокал/Fresh Orange Juice</td>
          <td>120ден/2€</td>
        </tr>

        <tr>
          <td
            colSpan={2}
            style={{ borderBottom: '2px solid var(--gold)', padding: '5px' }}
          ></td>
        </tr>

        <tr>
          <td>Скопско/Skopsko</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Скопско Смут/Smooth</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Хајнекен/Heineken</td>
          <td>120ден/2€</td>
        </tr>

        <tr>
          <td
            colSpan={2}
            style={{ borderBottom: '2px solid var(--gold)', padding: '5px' }}
          ></td>
        </tr>

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
