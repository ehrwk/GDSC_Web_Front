import React, {useRef} from "react";
import styled from "styled-components";
import Slider from "react-slick";

import SliderBoard from "./components/SliderBoard";
import SliderCareer from "./components/SliderCareer";
import SliderPrompotion from "./components/SliderPromotion";

//import "slick-carousel/slick/slick-theme.css";


import BottomNavigation from "../../layout/BottomNavigation";



const MainWrapper = styled.div`

  width: 100%;
  height: 100%;
  overflow: hidden;
  
  .slider-wrapper{
    width: 100%,
    height: calc(100% - 96px);
    margin-top: 48px;
  }
  .slider-item{
    width: 100%;
    height:100%;
  }
  .top-naviagation{
    height: 48px;
  }
  .slick-list{
    height: 100%;
    max-height: 100%;
  }

`;

const Index = () => {

  const [slider, setSliderId] = useState(0);

  const mySlider = useRef();

  const Settings = {
    className = "setting-wrapper",
    dots: false,
    infinite: false,
    slideToShow: 1,
    SlideToScroll: 1, 
    afterChange: (index) => setSliderId(index),
    ref: mySlider,
  }

  const moveSlider = (index) => {
    setSliderId(index);

  }
  
  

  return (
    <MainWrapper>
      <div className = "top-naviagation">
        <button onClick = {( => moveSlider(0))}>
          <UnderLine text = "게시판" isActive = {sliderId === 0}/>

        </button>
        <button onClick = {( => moveSlider(1))}> 
          <UnderLine text = "진로" isActive = {sliderId === 1}/>

        </button>
        <button onClick = {( => moveSlider(2))}>
          <UnderLine text = "홍보" isActive = {sliderId === 2}/>
          
        </button>
      </div>
      <Slider {...Settings} edgeFriction = {0}>
        <div className = "slider-item"> </div>
          <SliderBoard></SliderBoard>
        <div className = "slider-item"> </div>
          <SliderCareer></SliderCareer>
        <div className = "slider-item"> </div>
          <SliderPrompotion></SliderPrompotion>
      </Slider>
      <div className="bottom-navigation">
        <BottomNavigation activeNum={2} />
      </div>
    </MainWrapper>
  );
};

export default Index;
