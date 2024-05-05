import { Route, Routes } from 'react-router';
import { DefaultLayout } from './layouts/DefaultLayout';
import { CheckOut } from './pages/CheckOut';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/check-out" element={<CheckOut />} />
			</Route>
		</Routes>
	);
}