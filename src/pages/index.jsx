// pages/index.jsx

import HeroWithImageTiles from '../components/HeroWithImageTiles';
import CenteredHeader from '../components/CenteredHeader';
import Testimonials from '../components/Testimonials';
import Steps from '../components/Steps';
import WhatSetsUsApart from '../components/WhatSetsUsApart';
import Logos from '../components/Logos';
import Outcomes from '../components/Outcomes';
import ScheduleMeeting from '../components/ScheduleMeeting';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroWithImageTiles />
      <Outcomes />
      <Testimonials />
      <WhatSetsUsApart />
      <Steps />
      <ScheduleMeeting />
      <Logos />
      <Footer />
    </>
  );
}
