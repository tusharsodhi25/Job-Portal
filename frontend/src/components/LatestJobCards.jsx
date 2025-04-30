// import React from 'react'
// import { Badge } from './ui/badge'
// import { useNavigate } from 'react-router-dom'

// const LatestJobCards = ({job}) => {
//     const navigate = useNavigate();
//     return (
//         <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
//             <div>
//                 <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
//                 <p className='text-sm text-gray-500'>India</p>
//             </div>
//             <div>
//                 <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
//                 <p className='text-sm text-gray-600'>{job?.description}</p>
//             </div>
//             <div className='flex items-center gap-2 mt-4'>
//                 <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
//                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
//                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
//             </div>

//         </div>
//     )
// }

// export default LatestJobCards

import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();
    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='p-5 rounded-md shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 cursor-pointer transition-all hover:shadow-xl'
        >
            <div>
                <h1 className='font-semibold text-lg text-gray-900 dark:text-white'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500 dark:text-gray-400'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2 text-gray-900 dark:text-white'>{job?.title}</h1>
                <p className='text-sm text-gray-600 dark:text-gray-300'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className='bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-blue-400'>{job?.position} Positions</Badge>
                <Badge className='bg-red-100 text-[#F83002] dark:bg-gray-700 dark:text-red-400'>{job?.jobType}</Badge>
                <Badge className='bg-purple-100 text-[#7209b7] dark:bg-gray-700 dark:text-purple-400'>{job?.salary} LPA</Badge>
            </div>
        </div>
    );
};

export default LatestJobCards;
