import React, { useEffect } from 'react';



import Banner from '../Components/Banner/Banner';
import TopScholarships from '../Components/TopScholarships/TopScholarships';
import Testimonials from '../Components/Testimonials/Testimonials';
import Contact from '../Components/Contact/Contact';


const Home = () => {

   
    useEffect(() => {
        document.title = "ScholarStream";
    }, []);
    return (
    <>
    <div className='bg-gradient-to-br from-[#0B0D17] via-[#1A1F3B] to-[#0B0D17]'>
 <Banner></Banner>
    <TopScholarships></TopScholarships>
    <Testimonials></Testimonials>
    <Contact></Contact>
    </div>
   
    
    </>
     
    );
};

export default Home;