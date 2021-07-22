import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    width: 250px;
    margin: 0 auto;
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#fff' : '#4b9abf')};
    white-space: wrap;
    padding: ${({big}) => (big ? '14px 48px' : ' 12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#010606')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;


    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#4b9abf' : '#fff')};
    }
`;