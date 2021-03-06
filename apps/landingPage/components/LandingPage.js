// @flow

import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Demo from './Demo';
import Info from './Info';
import Headline from './Headline';
import Playground from './Playground';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Headline />
      <Playground />
      <Info />
      <Demo />
      <Footer />
    </>
  );
}
