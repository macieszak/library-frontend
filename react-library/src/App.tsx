import React from 'react'
import './App.css'
import { Carousel } from './layouts/homepage/Carousel'
import { ExploreTopBooks } from './layouts/homepage/ExploreTopBooks'
import { Navbar } from './layouts/navbar/Navbar'

function App() {
	return (
		<div>
			<Navbar />
			<ExploreTopBooks />
      <Carousel />
		</div>
	)
}

export default App
