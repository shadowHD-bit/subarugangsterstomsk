import React, {useState, useEffect} from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'


const NavbarSpecial = ({toggle}) => {
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

export default NavbarSpecial;
