import React from 'react';
import AssetTracker from './AssetTracker';
import ContactMe from './ContactMe';
import Home from './Home';
import MTGDB from './MTGDB/';
import Terminal from './Terminal';
import terminal from '../assets/terminal.png';
import tracker from '../assets/tracker.jpg';
import contactMe from '../assets/contactMe.png';
import mtg from '../assets/mtg.png';

export type PageType = {
  name: string;
  component: React.FC;
  link: string;
  img: string;
  description: string;
};

export const Pages: PageType[] = [
  {
    name: 'Home',
    component: Home,
    link: '/',
    img: '',
    description: 'This is just the home page. Nothing to see here',
  },
  {
    name: 'MTG Database',
    component: MTGDB,
    link: '/mtgdb',
    img: mtg,
    description:
      'Complete front-end application. OCR enabled collection tracker for Magic The Gathering Commander deck building. Using IndexedDB as a local storage.',
  },
  {
    name: 'Asset Tracker',
    component: AssetTracker,
    link: '/assettracker',
    img: tracker,
    description: 'DOGE COIN TO THE MOOOOOOOOOON!¡!¡!¡!¡!',
  },
  {
    name: 'Terminal',
    component: Terminal,
    link: '/terminal',
    img: terminal,
    description: 'This is a pseudo terminal that tells jokes.',
  },
  {
    name: 'Contact Me',
    component: ContactMe,
    link: '/contactme',
    img: contactMe,
    description: "Hijacked google forms' exposed api for a contact me page.",
  },
];
