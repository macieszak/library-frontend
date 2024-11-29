import React from 'react'

export const RetrunBook = () => {
	return (
		<div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
			<div className='text-center'>
				<img src={require('./../../img/the_great_gatsby.jpg')} width='151' height='233' alt='book' />
				<h6 className="'mt-2">The Great Gatsby</h6>
				<p>F. Scott Fitzgerald</p>
				<a className='btn main-color text-white' href='#'>
					Reserve
				</a>
			</div>
		</div>
	)
}
