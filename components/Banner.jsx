import Image from 'next/image';
import Banner from "../public/images/banner.jpg";

const BannerComp = () => {
   return (
      <div className="banner">
         <div className="banner-text">
            <h2 className="font-base font-semibold text-2xl text-white text-center">Discover Your Life, Travel Where You Want</h2>
            <p className="font-base text-lg text-white text-center">Would you explore natur paradise in the world, let’s find the best destination in world with us.</p>
         </div>
         <Image
            src={Banner}
            alt="un fondo de montañas"
            layout="fill"
         />
      </div>
   );
}

export default BannerComp;
