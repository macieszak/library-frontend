import React from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import './App.css'
import { BookCheckoutPage } from './layouts/bookscheckoutpage/BooksCheckoutPage'
import { Footer } from './layouts/footer/Footer'
import { HomePage } from './layouts/homepage/HomePage'
import { Navbar } from './layouts/navbar/Navbar'
import { SearchBooksPage } from './layouts/searchbookspage/SearchBooksPage'
import { oktaConfig } from './lib/oktaConfig'
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'
import { Security, LoginCallback } from '@okta/okta-react'
import LoginWidget from './auth/LoginWidget'

const oktaAuth = new OktaAuth(oktaConfig)

export const App = () => {
	const customAuthHandler = () => {
		history.push('/login')
	}

	const history = useHistory()

	const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
		history.replace(toRelativeUrl(originalUri || '/', window.location.origin))
	}

	return (
		<div className='d-flex flex-column min-vh-100'>
			<Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
				<Navbar />
				<div className='flex-grow-1'>
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
						<Route path='/checkout/:bookId'>
							<BookCheckoutPage />
						</Route>
						<Route path='/login' render={() => <LoginWidget config={oktaConfig} />} />
						<Route path='/login/callback' component={LoginCallback} />
					</Switch>
				</div>
				<Footer />
			</Security>
		</div>
	)
}
