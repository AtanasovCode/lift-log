import { useState } from 'react';
import * as Styled from '../../styles/Nav.Styled';
import { List } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg';

const Nav = () => {

    const [active, setActive] = useState(false);

    //Set mobile navigation to active or inactive
    const handleMobileNavShow = () => {
        setActive(!active);
        //console.log("ACTIVE!");
    }

    const navigate = useNavigate();

    return (
        <Styled.Nav>
            <Styled.Logo
                src={logo}
                onClick={() => navigate("/")}
            />

            <Styled.MenuIcon onClick={handleMobileNavShow} >
                <List
                    color="white"
                    size="100%"
                    weight="regular"
                />
            </Styled.MenuIcon>

            <Styled.NavLinks active={active}>
                <Styled.NavLogoContainer>
                    <Styled.NavLogo
                        src={logo}
                        alt="logo icon"
                    />
                </Styled.NavLogoContainer>
                <Styled.NavLink to="/">
                    Home
                </Styled.NavLink>

                <Styled.SpecialLink to="/get-stats">
                    Try it!
                </Styled.SpecialLink>
            </Styled.NavLinks>
        </Styled.Nav>
    );
}

export default Nav;