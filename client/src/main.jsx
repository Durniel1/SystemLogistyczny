import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Glowna from './Pages/Glowna'
import Utworz from './Pages/Utworz'
import Kursy from './Pages/Kursy'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' Component={Glowna} />
			<Route path='/Utworz' Component={Utworz} />
			<Route path='/Kursy' Component={Kursy} />
		</Routes>
	</BrowserRouter>
)
