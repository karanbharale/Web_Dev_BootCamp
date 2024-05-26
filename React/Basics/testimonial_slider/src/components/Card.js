import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {

    let reviews = props.reviews;

    return (
        <div className='flex flex-col md:relative'>

            <div className='absolute top-[-7rem] z-[10]'>
                <img
                    className='aspect-squere rounded-full w-[140px] h-[140px] z-25'
                    src={reviews.image} alt=''>
                </img>
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
            </div>

            <div className='text-center mt-9'>
                <p className='font-bold text-2xl capitalize tracking-wider'>{reviews.name}</p>
                <p className='text-violet-300 uppercase text-sm'>{reviews.job}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>

            <div className='text-center mt-5 text-slate-500 '>
                {reviews.text}
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight />
            </div>

        </div>
    )
}

export default Card
