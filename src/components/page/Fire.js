

import React, {useState} from 'react'
import '../../App.css'
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine,  Heading, Subtitle, BtnWrap, Column2, ImgWrap } from '../page/ShodRazvalInfoElement'
/*import imgb from "../images/imgbg2.jpg"*/
import { ReactComponent as ImageOne} from '../images/contact.svg'
import Modal from '../modal/modal'
import '../modal/modal.css'
import Footer from '../Footer/Footer'
import NavbarSpecial from '../Navbar/indexspecial'


export default function ShodRazval() {

    const [modalActive, setModalActive] = useState(false)


    return (
        <>
        <NavbarSpecial />
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow >
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    Автосервис SubaruGangstar`s
                                </TopLine>
                                <Heading> 
                                Сварочные работы в том числе в аргонной среде
                                </Heading>
                                
                                <Subtitle>Сварочные работы автомобиля начинаются еще на стадии производства. В дальнейшем проведение таких работ понадобится при естественном износе деталей машины, недостаточно хорошем уходе за ней, повреждений после ДТП. Приведение автомобиля в хороший вид необходимо для проведения технического осмотра. Сварка для автомобиля на профессиональном уровне осуществляется работниками станции технического обслуживания. Также возможна сварка авто своими руками. Сваривать детали можно, как на легковом, так и на грузовом автомобиле.</Subtitle>
                             
                                <BtnWrap>
                                    <Button onClick={() => setModalActive(true)}>Записаться</Button>
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
            <Footer />
        </>
    )

}