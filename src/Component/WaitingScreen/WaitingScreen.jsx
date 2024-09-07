import React from 'react'
import { useNavigate } from 'react-router-dom'
import RoomID from '../HomePage/RoomID';
import './WaitingScreen.css';

const WaitingScreen = () => {
    const navigate = useNavigate();

    const handleReady = () => {
        navigate('/gamescreen');
    }



    return (
        <>
            <div className="Wait-Body">
                <div className='waitMsg'>
                    <h1>Waiting for other players...</h1>
                </div>
                <div className='wait-status'>
                    <div className="playerList">
                        <div className="player1 playerS">Yellow</div>
                        <div className="player2 playerS">Red</div>
                        <div className="player3 playerS">Purple</div>
                        <div className="player4 playerS">Green</div>
                    </div>
                    <div className='roomNready'>
                        <RoomID />
                        <button className="readyButton" onClick={handleReady}>Ready</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WaitingScreen