
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
                                Всевозможные диагностики автомобиля
                                </Heading>
                                
                                <Subtitle>Диагностика автомобиля — процесс не простой. Доступный, но требующий подготовки. Помимо желания и возможности и даже склонности к технике, необходима определённая теоретическая и практическая опора. Кроме того, нужен опыт. От примитивной пайки контактов в проводке до ощущения и понимания двигателя во всех его тонкостях. В каждый момент работы. Со временем появляется интуиция. В ней — философия толкового человека. Его обнажённый нерв и спасение. Всё это — основы диагностики. Без их усвоения браться за дело не стоит. Не сможете! Мы вам поможем...</Subtitle>
                               
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