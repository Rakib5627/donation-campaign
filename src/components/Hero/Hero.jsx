import heroImage from '../../assets/111044315-team-of-teen-volunteers-collecting-donations-in-cardboard-boxes-indoors.jpg'

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <img className='h-96 w-full opacity-10' src={heroImage} alt="" />
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-10 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>

                        <div className='flex justify-center'>
                        <div className="form-control">
                            <label className="input-group input-group-md">
                                <input type="text" placeholder="Type here" className="input input-bordered input-md" />
                            </label>
                        </div>
                        <button className="py-1 px-4 bg-red-500">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;