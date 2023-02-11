import "./index.css";
import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
