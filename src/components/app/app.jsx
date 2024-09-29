import { Outlet, ScrollRestoration } from 'react-router-dom';
import './app.scss';
import { Heading } from '../heading/heading';
import logo from '/src/assets/logo.jpg';

export function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <img className='logo' src={logo} alt='app logo' />
        <Heading clss='app_title'>
          Site about cats and more...
        </Heading>
      </header>
      <ScrollRestoration />
      <main className='app__content'>
        <Outlet />
      </main>
      <footer className='app__footer'></footer>
    </div>
  );
}
