import sleepingCat from '/src/assets/sleeping-cat.jpg';
import paintedCat from '/src/assets/painted-cat.jpg';

export function HomePage() {
  return (
    <div>
      <img width={300} height={370} src={sleepingCat} alt='cat is sleeping' />
      <img width={300} height={370} src={paintedCat} alt='painted cat' />
    </div>
  );
}
