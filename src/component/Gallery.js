import React, { useState } from 'react';
import './Gallery.css';
import './Popup.css';
import Menu from './Menu';
import Popup from './Popup.jsx';


import swal from 'sweetalert';


function Gallery() {
	const [items, setItems] = useState(Menu);
	const [popup, setPopup] = useState(null);
	const [activePopup, setActivePopup] = useState("popupcloseclass");

	const filterItem = (catItem) => {
		const updatedItems = Menu.filter((curElem) => {
			return curElem.category === catItem;
		});
		setItems(updatedItems);
	}
	const handlePopup = (id) => {
		setPopup(id);
		setActivePopup("popupshowingclass");
	}
	const handelPopupClose = () => {
		setActivePopup("popupcloseclass")
	}

	return (
		<div className="gallery">
			<div className="menu-tabs container col-md-12 col-12">
				<div className="menu-tab">
					<button type="button" className="btn btn-outline-success mx-2 my-2 px-3 py-2 text-center" onClick={() => setItems(Menu)}>All</button>
					<button type="button" className="btn btn-outline-danger mx-2 my-2 px-3 py-2 text-center" onClick={() => filterItem('front')}>Front-end</button>
					<button type="button" className="btn btn-outline-danger mx-2 my-2 px-3 py-2 text-center" onClick={() => filterItem('back')}>Back-end</button>
					<button type="button" className="btn btn-outline-danger mx-2 my-2 px-3 py-2 text-center" onClick={() => filterItem('app')}>Web app</button>
					<button type="button" className="btn btn btn-outline-light btn-info mx-3 my-2 px-3 py-2 text-center" onClick={() => filterItem('upcoming')}>Coming</button>
				</div>
			</div>
			{/* Main items section */}
			<div className="menu-items container-fluid mt-5">
				<div className="row">
					<div className="col-11 mx-auto">
						<div className="row my-5">
							{
								items.map((elem) => {
									const { id, image, name, description, date, link } = elem;
									return (
										<div key={id} className="item1 col-md-6 col-lg-6 col-lg-6 col-xl-4 my-3">
											<div className="row item-inside">
												{/*images*/}
												<div className="col-12 col-md-12 col-lg-4 img-div">
													<img src={image} alt={name} className="img-fluid" />
												</div>
												{/*discription */}
												<div className="col-12 col-md-12 col-lg-8">
													<div className="main-title pt-4 pb-3">
														<h1>{name}</h1>
														<p>{description}</p>
													</div>
													<div className="menu-price-book">
														<div className="price-book-divide d-flex justify-content-between">
															<h2>Date: {date}</h2>
															<button className="btn btn-primary py-2" onClick={() => { handlePopup(id) }}>Info</button>
														</div>

													</div>
												</div>
											</div>
											<div className="popup">
												{
													popup === id ? (<Popup activePopup={activePopup} handelPopup={handelPopupClose} popupfadingclass="popupfadingclass" name={name} description={description} link={link} />) : null
												}
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Gallery
