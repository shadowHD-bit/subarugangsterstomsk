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
                                Сход/Развал 3D
                                </Heading>
                                
                                <Subtitle>Сход-развал может проводиться с использованием нескольких типов оборудования. Традиционными считаются инфракрасные стенды. Для работы с ними необходимо наличие смотровой ямы или подъемника. Процедура регулировки углов положения колес на инфракрасном стенде требует установки датчиков на колеса, подключение проводов, приподнятие осей автомобиля, прокачивание его подвески спереди и ссади и выполнения других действий, которые занимают довольно много времени. В то же время, сход-развал с 3D системой Hanter HawkEaye не требует подъема автомобиля и всех описанных манипуляций. Вперед-назад машина автоматически прокачивается всего на 45 градусов, а вся процедура занимает не более 5 минут, гарантируя, при этом, результат намного точнее обычного.</Subtitle>
                               
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