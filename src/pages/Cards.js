import {React} from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img from "../images/imgbg1.jpg"


function Cards() {

    return (
        
        <div className='cards'  style={{ backgroundImage: `url(${img})` }} id='service'>
            <h1>Наши услуги</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    
                    <ul className='cards__items'>
                        <CardItem
                        src="images/img12.jpg"
                        text="Сход/Развал 3D"
                        lable="Популярное"
                        path="/svod-razval"
                        />
                        
                        
                        <CardItem
                        src="images/img13.jpg"
                        text="Чип-Тюинг ECU"
                        lable="Новое"
                        path="/chiptuning"
                        />
                        </ul>
                        <ul className='cards__items'>
                        <CardItem
                        src="images/img14.jpg"
                        text="Оригинальные запчасти и заменители"
                        lable="Качество"
                        path='/originaldetails'
                        />
                        <CardItem
                        src="images/img15.jpg"
                        text="Всевозможные диагностики автомобиля"
                        lable="Популярное"
                        path='/diagnostic'
                        />
                        <CardItem
                        src="images/img16.jpg"
                        text="Турбокомпрессоры ARASHI"
                        lable="Ульра"
                        path='/compress'
                        />
                        </ul>
                        <ul className='cards__items'>
                        <CardItem
                        src="images/img17.jpg"
                        text="Диагностика и мойка форсунок в ультразвуковой ванне"
                        lable="Новое"
                        path='/fars'
                        />
                        <CardItem
                        src="images/img18.jpg"
                        text="Заправка автомобильных кондиционеров"
                        lable="Популярное"
                        path='/conditions'
                        />
                        </ul>
                        <ul className='cards__items'>
                        <CardItem
                        src="images/img19.jpg"
                        text="Сварочные работы в том числе в аргонной среде"
                        lable="Горячо!"
                        path='/fire'
                        />
                        <CardItem
                        src="images/img110.jpg"
                        text="Проточка тормозных дисков на автомобиле"
                        lable="Остро.."
                        path='/stopped'
                        />
                        <CardItem
                        src="images/img111.jpg"
                        text="Мойка автомобиля"
                        lable="Популярное"
                        path='/wash'
                        />
                        
                    </ul>
                    
                    
                </div>
                
                
            </div>
            
            
        </div>
         
    )
}

export default Cards
