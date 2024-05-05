import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/deafault';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';

export function App() {

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<BrowserRouter>
			</BrowserRouter>
		</ThemeProvider>
	);
}

