import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine,  Heading, Column2, ImgWrap } from './InfoElementsTree'
import { ReactComponent as ImageTwo} from '../images/contact.svg'



const logo = require('../images/map.svg').default;
const InfoSectionTree = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, description1, description2, description3, description4, description5, description6, description7, description8, description9, description10,buttonLabel, alt}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                {topLine}
                                </TopLine>
                                <Heading lightText={lightText}> 
                                    {headline}
                                </Heading>
                                <ImgWrap>
                             <ImageTwo width =' 500px 'height =' 500px '/>
                            </ImgWrap>
                             
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                             <img src={logo} width='450px' height='500px' border=' 5px '/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSectionTree
