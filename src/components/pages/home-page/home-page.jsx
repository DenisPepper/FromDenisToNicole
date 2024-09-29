import './home-page.scss';

import sleepingCat from '/src/assets/sleeping-cat.jpg';
import paintedCat from '/src/assets/painted-cat.jpg';
import scaryCat from '/src/assets/scary-cat.jpg';
import cityColdMorning from '/src/assets/city-cold-morning.jpg';
import bigSkyIce from '/src/assets/big-sky-ice.jpg';
import watermalow from '/src/assets/watermalow.jpg';
import corn from '/src/assets/corn.jpg';
import oneCent from '/src/assets/one-cent.jpg';
import sunRise from '/src/assets/sunrise.jpg';
import giftFromNicole from '/src/assets/image-from-Nicole.jpg';
import treesOne from '/src/assets/nicole-trees-1.jpg';
import treesTwo from '/src/assets/nicole-trees-2.jpg';

export function HomePage() {
  return (
    <ul className='images'>
      <li>
        <img width={300} height={370} src={sleepingCat} alt='cat is sleeping' />
      </li>
      <li>
        <img width={300} height={370} src={paintedCat} alt='painted cat' />
      </li>
      <li>
        <img width={300} height={370} src={scaryCat} alt='scary cat' />
      </li>
      <li>
        <img width={300} height={370} src={cityColdMorning} alt='city cold morning' />
      </li>
      <li>
        <img width={300} height={370} src={bigSkyIce} alt='big sky ice' />
      </li>
      <li>
        <img width={300} height={370} src={watermalow} alt='watermalow' />
      </li>
      <li>
        <img width={300} height={370} src={corn} alt='corn' />
      </li>
      <li>
        <img width={300} height={370} src={oneCent} alt='oneCent' />
      </li>
      <li>
        <img width={300} height={370} src={sunRise} alt='sunRise' />
      </li>
      <li>
        <img width={300} height={370} src={giftFromNicole} alt='giftFromNicole' />
      </li>
      <li>
        <img width={300} height={370} src={treesOne} alt='treesOne' />
      </li>
      <li>
        <img width={300} height={370} src={treesTwo} alt='treesTwo' />
      </li>
    </ul>
  );
}
