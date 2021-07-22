import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroBtnWrapper,HeroContent,HeroH1,HeroP,ArrowForward,ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement';
import logo from '../images/datatime.svg';


const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    
  

    return (
        
        <HeroContainer id="record">
           
            <HeroBg>
                <VideoBg autoPlay loop muted src="../videos/video.mp4" type='video/mp4' />
            </HeroBg>
            
            <HeroContent>
                
                <HeroH1>АВТОКОМПЛЕКС SUBARU GANGSTER`S</HeroH1>
                
                <HeroP>
                Автосервис SUBARU GANGSTER`S выполнит ремонт 
                Субару любых моделей в короткие сроки. Качество гарантированно! 
                Все работы выполняются специалистами высокого класса с большим 
                опытом и отличными знаниями устройства автомобилей этого 
                производителя. Техническое обслуживание и ремонт Subaru 
                производится с использованием запчастей и расходных материалов 
                высокого качества. По вашему пожеланию могут быть подобраны 
                аналоги оригинальных деталей или контрактных запчастей с небольшим 
                пробегом.
                </HeroP>
                <HeroP> </HeroP>
                <HeroP> </HeroP>
            <img src={logo} 
              alt="logo" 
              width =' 400px '
              height =' 150px '
              
              />
              
                <HeroBtnWrapper>
                    
                    <Button to="consultation" onMouseEnter={onHover} onMouseLeave = {onHover}
                    primary ='true'
                    dark = 'true'
                    smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                    >
                        Узнать подробнее... {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    
                </HeroBtnWrapper>
                
            </HeroContent>
            
        </HeroContainer>
        
        
        
    )
}

export default HeroSection
