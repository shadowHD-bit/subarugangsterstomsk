import React, {useState, useEffect} from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >=80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    const toggleHome = () => {
        scroll.scrollToTop()
    }

    

    return (
      <>
      <IconContext.Provider value={{color: '#4b9abf'}}>
      <Nav scrollNav ={scrollNav}>
          <NavbarContainer>
              <NavLogo to='/' onClick={toggleHome}
               smooth={true}
               duration={500}
               spy={true}
               exact='true'
               offset={-80}>
                  SubaruGangster
              </NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to="/" 
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}>Главная</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="service"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      
                      >Услуги</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="photo"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}>Фото</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="record"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}>Запись</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="consultation"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}>Консультация</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="contact"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}>Контакты</NavLinks>
                  </NavItem>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink 
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  
                  >
                        8-983-232-86-86
                  </NavBtnLink>
                  
              </NavBtn>
              
          </NavbarContainer>
          
      </Nav>
      
      </IconContext.Provider>
      
      </>
      
    )
}

export default Navbar;
