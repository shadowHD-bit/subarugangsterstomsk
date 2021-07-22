
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
                                Оригинальные запчасти и заменители
                                </Heading>
                                
                                <Subtitle>Вы никогда не задумывались, как выглядит генератор переменного тока или водяной насос в автомобилях? К сожалению, многие владельцы транспортных средств не знакомы с устройством автомобилей, не говоря уже о его обслуживании и ремонте. Да, намного удобнее обслуживать автомобиль в технических дилерских центрах, в которых вам даже нет необходимости самостоятельно приобретать запчасти.

Но мы считаем, что каждый водитель должен знать из чего состоит транспортное средство, как работают те или иные компоненты. Благодаря этому каждый из вас может самостоятельно покупать запчасти, не переплачивая дилеру.</Subtitle>
                             
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