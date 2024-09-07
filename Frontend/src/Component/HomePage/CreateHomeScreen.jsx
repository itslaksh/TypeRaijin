import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Settings from "../Sub-component/Settings";
import "./HomeScreen.css";
import Play from "../Sub-component/Playgame";
import RoomID from "./RoomID";

export const CreateHomeScreen = () => {
	const navigate = useNavigate();

	const onPlayClick = () => {
		navigate("/waiting");
	};

	return (
		<>
			<div className="bodgy">
				<div className="info">{/*info-png here*/}</div>
				<div className="GameTitle">TYPERAIJIN</div>

				<div className="gameStart">
					<RoomID />
					<Play />
				</div>

				<div className="menuBar">
					<Settings />
				</div>
			</div>
		</>
	);
};

export default CreateHomeScreen;