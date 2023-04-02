import * as Styled from '../../styles/Nav.Styled';

import logo from '../../assets/logo.png';

const Nav = () => {
    return (
        <Styled.Nav>
            <Styled.Logo src={logo} />
            <Styled.NavLinks>
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