import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarRouter, SideBtnWrap } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onclick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>
                        Главная
                    </SidebarLink>
                    <SidebarLink to="service" onClick={toggle}>
                        Услуги
                    </SidebarLink>
                    <SidebarLink to="photo" onClick={toggle}>
                        Фото
                    </SidebarLink>
                    <SidebarLink to="record" onClick={toggle}>
                        Запись
                    </SidebarLink>
                    <SidebarLink to="consultation" onClick={toggle}>
                        Консультация
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Контакты
                    </SidebarLink>               
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to="/record"> Записаться </SidebarRouter>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
