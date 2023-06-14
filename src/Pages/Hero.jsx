import img from '../Images/food.jpg'
const Hero = () => {
    return (
        <div className='relative' style={{background:`url(${img})`, height:'70vh', backgroundSize:'110%'}}>
            <div className=''>
                <h1 className='text-4xl font-black lg:ml-96 mt-56 absolute' style={{fontFamily:'Poppins'}}>Eat Your Favourite food from here</h1>
            </div>
        </div>
    );
};

export default Hero;