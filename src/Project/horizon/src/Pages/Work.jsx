
import React ,{useRef,useContext}from "react";
import Header from '../Composant/Header/Header'
import logo from '../logo.png';
import Translate from '../Composant/Translate';
import Card from 'react-bootstrap/Card';

const Work = () => {

    return (
        <>
            <header className="App-header" >
                <Card style={{ width: '100%' }}>
                    <Card.Body className='text-center'>
                        <h2>Work Orders</h2>
                    </Card.Body>
                </Card>
                <Translate/>
            </header>

            <div className="full-container d-flex text-center justify-content-center  p-2">
                <img src={logo} className=""  alt="logo" width="40px" />
            </div>
        </>
    )
}
export default Work;
