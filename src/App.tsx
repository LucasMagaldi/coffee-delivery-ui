import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/deafault';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

export function App() {

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	);
}

