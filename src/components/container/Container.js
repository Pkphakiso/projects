import React from 'react'

export default function Container() {
	return (
		
			<main className="cover">
				<header className='header'>
					<img src="../images/illustration-hero.svg" className="header-hero" alt="hero" />
				</header>
				<section className="container">
					<h1 className="title">Order Summary</h1>
					<p className="para">
					You can now listen to millions of songs, audiobooks, and podcasts on any 
						device anywhere you like!
					</p>
					<div className="icon-music">
						<div className='icon-music-left'>
							<img src="../images/icon-music.svg" alt="mu" />
							<div>
								<p>Annual Plan</p>
								<small>$59.99/year</small>
							</div>   
						</div>
						<a href="#">Change</a>
					</div>
					<div className="btn-div">
						<button>Proceed to Payment</button>
					</div>
						<p className="center">Cancel Order</p>        
					<div className="attribution">
						Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
					Coded by <a href="#">phakiso</a>.
					</div>
				</section>
      		</main> 
	
	)
}