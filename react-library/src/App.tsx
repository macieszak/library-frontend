import React from 'react'
import './App.css'
import { Footer } from './layouts/footer/Footer'
import { Carousel } from './layouts/homepage/Carousel'
import { ExploreTopBooks } from './layouts/homepage/ExploreTopBooks'
import { Heros } from './layouts/homepage/Heros'
import { LibraryServices } from './layouts/homepage/LibraryServices'
import { Navbar } from './layouts/navbar/Navbar'

function App() {
	return (
		<div>
			<Navbar />
			<ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
      <Footer />
		</div>
	)
}

export default App
