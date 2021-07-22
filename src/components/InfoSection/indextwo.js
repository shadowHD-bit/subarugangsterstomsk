import React, {useState} from 'react'
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine,  Heading, Subtitle, BtnWrap, Column2, ImgWrap } from './InfoElementsTwo'
/*import imgb from "../images/imgbg2.jpg"*/
import { ReactComponent as ImageOne} from '../images/car-repair.svg'
import Modal from '../modal/modal'
import '../modal/modal.css'

const InfoSectionTwo = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, description1, description2, description3, description4, description5, description6, description7, description8, description9, description10,buttonLabel, alt}) => {

    const [modalActive, setModalActive] = useState(false)
    
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
                                
                                <Subtitle darkText ={darkText}>{description}</Subtitle>
                                <Subtitle darkText ={darkText}>{description1}</Subtitle>
                                <Subtitle darkText ={darkText}>{description2}</Subtitle>
                                <Subtitle darkText ={darkText}>{description3}</Subtitle>
                                <Subtitle darkText ={darkText}>{description4}</Subtitle>
                                <Subtitle darkText ={darkText}>{description5}</Subtitle>
                                <Subtitle darkText ={darkText}>{description6}</Subtitle>
                                <Subtitle darkText ={darkText}>{description7}</Subtitle>
                                <Subtitle darkText ={darkText}>{description8}</Subtitle>
                                <Subtitle darkText ={darkText}>{description9}</Subtitle>
                                <Subtitle darkText ={darkText}>{description10}</Subtitle>

                                <BtnWrap>
                                    <Button onClick={() => setModalActive(true)}
                                    >{buttonLabel}</Button>
                                    
                                </BtnWrap>
                                
                            </TextWrapper>
                            
                        </Column1>
                        
                        <Column2>
                            <ImgWrap>
                             <ImageOne width =' 500px 'height =' 500px '/>
                            </ImgWrap>
                            
                        </Column2>

                    </InfoRow>
                    
                </InfoWrapper>
                <Modal active ={modalActive} setActive={setModalActive}>
                    <form action=''>
                        <h1 class="form_title">Записаться на консультацию</h1>
                        <div class="form_grup">
                         <label class="form_label">Имя</label>
                         <input class="form_input" placeholder=" "/>
                            </div>
                            <div class="form_grup">
                         <label class="form_label">Номер телефона</label>
                         <input class="form_input" placeholder=" "/>
                         </div>

                        <button class="form_button">Оставить заявку</button>
                    </form>
                    

                </Modal>

            </InfoContainer>

        </>
    )
}

export default InfoSectionTwo
