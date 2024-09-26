import { Outlet, ScrollRestoration } from 'react-router-dom';
import './app.scss';
import { Heading } from '../heading/heading';

export function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <Heading>Site about cats and more...</Heading>
      </header>
      <ScrollRestoration />
      <main className='app__content'>
        <Outlet />
      </main>
      <footer className='app__footer'></footer>
    </div>
  );
}
