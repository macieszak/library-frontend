import { useOktaAuth } from '@okta/okta-react'
import { Link } from "react-router-dom";

export const Heros = () => {

	const { authState } = useOktaAuth();

	return (
		<div>
			<div className='d-none d-lg-block'>
				<div className='row g-0 mt-5'>
					<div className='col-sm-6 col-md-6'>
						<div className='col-image-left'></div>
					</div>

					<div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
						<div className='ml-2'>
							<h1>What have you been reading?</h1>
							<p className='lead'>
								The library team would love to hear about it! Whether it’s a thrilling adventure, a captivating romance,
								or a deep dive into history, we’re here to help you discover your next great read.
							</p>
                            {authState?.isAuthenticated ? 
                                <Link type='button' className='btn main-color btn-lg text-white'
                                    to='search'>Explore top books </Link>
                                :
                                <Link className='btn main-color btn-lg text-white' to='/login'>Sign up</Link>
                            }  
						</div>
					</div>
				</div>

				<div className='row g-0'>
					<div
						className='col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center'>
						<div className='ml-2'>
							<h1>Our collection is always changing!</h1>
							<p className='lead'>
								Make sure to check in daily, as our collection is constantly evolving! We work tirelessly to bring you
								the most exciting and diverse books for you! We take great care in curating our selection, ensuring that
								our books are always our top priority.
							</p>
						</div>
					</div>

					<div className='col-sm-6 col-md-6'>
						<div className='col-image-right'></div>
					</div>
				</div>
			</div>

			{/* Mobile Heros */}
			<div className='d-lg-none'>
				<div className='container'>
					<div className='m-2'>
						<div className='col-image-left'></div>
						<div className='mt-2'>
							<h1>What have you been reading?</h1>
							<p className='lead'>
								The library team would love to hear about it! Whether it’s a thrilling adventure, a captivating romance,
								or a deep dive into history, we’re here to help you discover your next great read.
							</p>
                            {authState?.isAuthenticated ? 
                                <Link type='button' className='btn main-color btn-lg text-white'
                                    to='search'>Explore top books</Link>
                                :
                                <Link className='btn main-color btn-lg text-white' to='/login'>Sign up</Link>
                        }
						</div>
					</div>
					<div className='m-2'>
						<div className='col-image-right'></div>
						<div className='mt-2'>
							<h1>Our collection is always changing!</h1>
							<p className='lead'>
								Make sure to check in daily, as our collection is constantly evolving! We work tirelessly to bring you
								the most exciting and diverse books for you! We take great care in curating our selection, ensuring that
								our books are always our top priority.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
