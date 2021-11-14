import React from "react";
import { Router } from "@reach/router";

import ReactDOM from "react-dom";
import "./index.css";
import MainPage from "./pages/main-page";
import Program from "./pages/program";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<MainPage path="/" />
			<Program path="/program" />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
