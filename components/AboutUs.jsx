import Image from 'next/image';

// Asset
import AboutImage from "../public/images/about-us.jpg";

const Badget = ({ number, text, additionalClass }) => {
    return (
        <p className={`bg-white py-4 px-3 rounded-2xl shadow-badget inline-flex flex-col items-center absolute leading-5 ${additionalClass}`}>
            <span className="text-xl font-semibold text-light-blue-100">{number}+</span>
            <span className="font-light text-md uppercase">{text}</span>
        </p>
    )
}

const AboutUs = () => {
    return (
        <div className="about-us mt-12">
            <div className="about-us-image">
                <Image src={AboutImage} alt="about us image" />
                <Badget
                    number={300}
                    text="destinations"
                    additionalClass="top-6 right-6"
                />
                <Badget
                    number={5000}
                    text="tourist"
                    additionalClass="bottom-6 right-6"
                />
                <Badget
                    number={150}
                    text="hotels"
                    additionalClass="left-6 top-44"
                />
            </div>
            <div className="about-us-text mt-6">
                <h2 className="text-3xl font-semibold mb-4">Travel Any Corner of The World With Us</h2>
                <p className="text-md font-light my-4 text-gray-400">Would you explore nature paradise in the world, lets find the best destination in world with us, Would you explore nature paradise in the world, lets find the best destination in world with us. Would you explore nature paradise in the world, lets find the best destination in world with us.</p>
                <p className="text-md font-light my-4 text-gray-400">Would you explore nature paradise in the world, lets find the best destination in world with us.</p>
                <a href="#" className="bg-light-blue-100 text-white inline-block px-8 py-4 rounded-lg">Contact Us</a>
            </div>
        </div>
    )
}

export default AboutUs;
