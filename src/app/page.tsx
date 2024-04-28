import React from 'react';
import { GoogleGeminiEffectDemo} from './../components/HeroSection/HeroScrollDemo';
import { AnimatedPinDemo } from './../components/MainSection';
import { CardHoverEffectDemo } from './../components/CardSection';
import { HeroParallaxDemo } from './../components/parallax';





const Page = () => {
  return (
    <div>
      <HeroParallaxDemo/>
      <div className="flex items-center justify-evenly bgColor-red-500 flex-col sm:flex-row " >
        <AnimatedPinDemo/>
        <AnimatedPinDemo/>
        <AnimatedPinDemo/>
      </div>
      {/* <GoogleGeminiEffectDemo/>  */}
      <CardHoverEffectDemo/>
    </div>
  );
};

export default Page;
