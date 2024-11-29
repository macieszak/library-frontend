import React from 'react'
import './App.css'
import { Carousel } from './layouts/homepage/Carousel'
import { ExploreTopBooks } from './layouts/homepage/ExploreTopBooks'
import { Heros } from './layouts/homepage/Heros'
import { Navbar } from './layouts/navbar/Navbar'

function App() {
	return (
		<div>
			<Navbar />
			<ExploreTopBooks />
      <Carousel />
      <Heros />
		</div>
	)
}

export default App
