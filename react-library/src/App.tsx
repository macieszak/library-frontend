import React from 'react'
import './App.css'
import { ExploreTopBooks } from './layouts/homepage/ExploreTopBooks'
import { Navbar } from './layouts/navbar/Navbar'

function App() {
	return (
		<div>
			<Navbar />
			<ExploreTopBooks />
		</div>
	)
}

export default App
