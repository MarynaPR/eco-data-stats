import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Software from '../Software';
import Contact from '../Contact';
import Signup from '../Signup';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about':
        return <About />;
      case 'software':
        return <Software />;
      case 'contact':
        return <Contact />;
      case 'signup':
        return <Signup />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;