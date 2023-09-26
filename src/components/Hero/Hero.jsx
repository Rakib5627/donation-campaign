import { useState } from 'react';
import heroImage from '../../assets/111044315-team-of-teen-volunteers-collecting-donations-in-cardboard-boxes-indoors.jpg'

const Hero = () => {
    const [keyword, setKeyword] = useState('');
    // console.log(keyword)
    const searchHandler = (e) => {
        e.preventDefault();

        if (keyword == 'health') {
            console.log('abc')
        } else {
            console.log('ggg')
        }
    }


    return (
        <div>
            <div className="hero">
                <img className='h-96 w-full opacity-10' src={heroImage} alt="" />
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <form onSubmit={searchHandler} className="">
                        <h1 className="mb-10 text-lg md:text-3xl lg:text-5xl text-black font-bold">I Grow By Helping People In Need</h1>

                        <div className='flex justify-center'>
                        <div className="form-control">
                            <label className="input-group input-group-md">
                                <input type="text" placeholder="Type here"  onChange={(e) => setKeyword(e.target.value)} className="input input-bordered input-md" />
                            </label>
                        </div>
                        <button className="py-1 px-4 bg-red-500">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;