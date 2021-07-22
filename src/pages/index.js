import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTree, homeObjTwo } from '../components/InfoSection/Data';
import Cards from './Cards';
import './Cards.css'
import Gallery from '../Gallery';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';
import InfoSectionTwo from '../components/InfoSection/indextwo';
import InfoSectionTree from '../components/InfoSection/indextree';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} /> 
           <Navbar toggle={toggle} />
           <HeroSection />
           <InfoSection {...homeObjOne} />
           <Cards />
           <Gallery />
           <InfoSectionTwo {...homeObjTwo} />
           <InfoSectionTree {...homeObjTree} />
           <Footer />
        </>
    );
};

export default Home
