import NavbarHome from 'Component/NavbarHome'
import TransparentFooter from 'components/Footers/TransparentFooter';
import React from 'react'
import { Container } from 'reactstrap'

function PublicRoute({ children }) {
    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });

    return (
        <>
            <NavbarHome />
            <Container className='wrapper mt-5'>
                {children}
            </Container>
            <TransparentFooter />
        </>
    )
}

export default PublicRoute