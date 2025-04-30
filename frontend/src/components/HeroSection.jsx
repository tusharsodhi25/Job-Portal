// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const searchJobHandler = () => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div className='text-center'>
//             <div className='flex flex-col gap-5 my-10'>
//                 <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
//                 <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
//                 <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type="text"
//                         placeholder='Find your dream jobs'
//                         onChange={(e) => setQuery(e.target.value)}
//                         className='outline-none border-none w-full'

//                     />
//                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
//                         <Search className='h-5 w-5' />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection


import { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className='text-center px-4 py-10 dark:bg-gray-900 dark:text-white'>
            <div className='flex flex-col gap-5 my-10 max-w-3xl mx-auto'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-4xl sm:text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p className='text-gray-600 dark:text-gray-300'>Find top job opportunities in leading companies.</p>
                <div className='flex w-full sm:w-[60%] shadow-md border border-gray-300 dark:border-gray-600 pl-3 rounded-full items-center gap-4 mx-auto bg-white dark:bg-gray-800'>
                    <input
                        type="text"
                        placeholder='Find your dream job'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full bg-transparent p-3 dark:text-white'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] hover:bg-[#5b30a6]">
                        <Search className='h-5 w-5 text-white' />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

