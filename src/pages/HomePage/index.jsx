import { Banner } from '../../components/Banner';
import { Footer } from '../../components/Footer';
import { Order } from '../../components/Order';
import { Rooms } from '../../components/Rooms';
import React, { useState, useEffect } from 'react';
import './style.css';

export const HomePage = () => {
  const [choosenRoom, setChoosenRoom] = useState({type: "Úkryt", cost: 450, text: "Strohý avšak pohodlný pokoj ideální pro hosty, kteří chtějí maximálně ušetřit a hledají cenově dostupné ubytování bez ztráty základního komfortu. Vhodné pro všechny, kdo chtějí v našem hotelu rychle přečkat nepřízeň počasí a vydat se rychle zase na cestu ať už pěší nebo po řece.", img: "/assets/img/pokoj01.jpg"})
  return (
    <>
    <Banner/>
    <Rooms onVote={setChoosenRoom}/>
    <Order choosenRoom={choosenRoom}/>
    <Footer/>
    </>
  );
};
