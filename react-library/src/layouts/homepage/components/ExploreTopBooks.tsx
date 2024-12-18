import { Link } from "react-router-dom"

export const ExploreTopBooks = () => {
	return (
    <div className='p-5 mb-4 bg-dark header'>
        <div className='container-fluid py-5 text-white d-flex justify-content-center align-items-center'>
            <div>
                <h1 className="display-5 fw-bold">Your journey begins here</h1>
                <p className="col-md-8 ds-4">Find your next favorite book</p>
                <Link type="button" className="btn main-color btn-lg text-white" to='/search'>Explore top books</Link>
            </div>
        </div>

    </div>
    )
}
