import NavbarHome from 'components/Navbars/NavbarHome'
import TransparentFooter from 'components/Footers/TransparentFooter';
import React from 'react'
import { useDispatch } from 'react-redux';
import { findPokemon } from 'Redux/pokemon';
import { getAllPokemon } from 'Redux/pokemon';

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

    const dispatch = useDispatch()


    const onSearch = (name)=>{
        if(name===""){
            return dispatch(getAllPokemon({limit:30}))
        }
        dispatch(findPokemon({name}))
    }

    return (
        <>
            <NavbarHome onSearch={onSearch} />
            <div className='mt-5 wrapper-children'>
                {children}
            </div>
            <TransparentFooter />
        </>
    )
}

export default PublicRoute