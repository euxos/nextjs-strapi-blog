import styled from '@emotion/styled';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="container">
                <div className="logo">
                    <img src="/images/logo.svg" alt="Sites logo" />
                </div>
            </div>
        </HeaderStyled>
        
    )
}

const HeaderStyled = styled.header`
    background: ${props => props.theme.colors.primary};
`

export default Header;
