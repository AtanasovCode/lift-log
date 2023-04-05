import * as Styled from '../../styles/Nav.Styled';

import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Hamburger, List } from 'phosphor-react';

const Nav = () => {

    const [active, setActive] = useState(false);

    //Set mobile navigation to active or inactive
    const handleMobileNavShow = () => {
        setActive(!active);
        console.log("ACTIVE!");
    }

    return (
        <Styled.Nav>
            <Styled.Logo src={logo} />
            <Styled.MenuIcon onClick={handleMobileNavShow} >
                <List 
                    color="white"
                    size="auto"
                />
            </Styled.MenuIcon>
            <Styled.NavLinks active={active}>
                <Styled.NavLink>
                    Home
                </Styled.NavLink>
                <Styled.NavLink>
                    About
                </Styled.NavLink>
                <Styled.SpecialLink>
                    Try it!
                </Styled.SpecialLink>
            </Styled.NavLinks>
        </Styled.Nav>
    );
}

export default Nav;