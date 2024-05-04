import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/deafault';
import { GlobalStyle } from './styles/global';

export function App() {

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			App
		</ThemeProvider>
	);
}

