import NavbarHome from 'components/Navbars/NavbarHome'
import TransparentFooter from 'components/Footers/TransparentFooter';
import React from 'react'

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
            <div className='mt-5 wrapper-children'>
                {children}
            </div>
            <TransparentFooter />
        </>
    )
}

export default PublicRoute