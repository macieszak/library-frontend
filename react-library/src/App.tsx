import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import { Footer } from './layouts/footer/Footer'
import { HomePage } from './layouts/homepage/HomePage'
import { Navbar } from './layouts/navbar/Navbar'
import { SearchBooksPage } from './layouts/searchbookspage/SearchBooksPage'

export const App = () => {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path='/' exact>
					<Redirect to='/home' />
				</Route>
				<Route path='/home'>
					<HomePage />
				</Route>
				<Route path='/search'>
					<SearchBooksPage />
				</Route>
			</Switch>
			<Footer />
		</div>
	)
}
