import React from 'react'
import './App.css'
import { Footer } from './layouts/footer/Footer'
import { HomePage } from './layouts/homepage/HomePage'
import { Navbar } from './layouts/navbar/Navbar'
import { SearchBooksPage } from './layouts/searchbookspage/SearchBooksPage'

export const App = () => {
	return (
		<div>
			<Navbar />
			{/* <HomePage /> */}
			<SearchBooksPage />
			<Footer />
		</div>
	)
}
