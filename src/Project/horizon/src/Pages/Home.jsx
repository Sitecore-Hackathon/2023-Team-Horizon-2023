
import React ,{useRef,useContext}from "react";
import Header from '../Composant/Header/Header'
import logo from '../logo.png';
//import i18next from '../i18n'
const Home = () => {

    return (
        <>

            <Header body={`Welcome`/*i18next.t('Welcome')*/} />
            <div className="full-container d-flex text-center justify-content-center  p-2">
            <img src={logo} className=""  alt="logo" width="40px" />
            </div>
        </>
    )
}
export default Home;
