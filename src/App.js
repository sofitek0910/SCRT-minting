import React, { useEffect, useState, useRef } from "react";
import swal  from 'sweetalert';

function App() {
  return (
    <div>
		<img className="main-back" src="./assets/img/bg.webp"/>
		<nav>
			<div className="d-flex">
				<div className="burger">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div>
					<a href="https://twitter.com/PhantomPandaNFT" className="twitter">
						<img className="twitter-img" src="./assets/img/twitter.webp" alt="twitter"/>
					</a>
				</div>
			</div>
			<div className="">
				<button className="connect-button">connect wallet</button>
			</div>
		</nav>
		<article>
			<a className="nav-l" data-href="top">Home</a>
			<a className="nav-l" data-href="about">About</a>
			<a className="nav-l" data-href="faq">Faq</a>
			<a className="nav-l" data-href="contemplation">Contemplation</a>
			<a href="https://kingsumo.com/g/vhn8m6/join-the-waitlist-for-a-chance-to-win-a-rare-phantom-panda-nft">
				<button>Get on the list</button>
			</a>
		</article>
		<div className="overflow">
			<header>
				<div className="top-text">
					<h3>Introducing... <br/> 2222 Income-Generating NFTs built on SCRT.</h3>
					<h1>
						The SCRT society of
						<span>Phantom Pandas</span>
					</h1>
					<div className="inner-header">
						<div>
							<img className="panda-img" src="./assets/img/black.webp" alt="black"/>
						</div>
						<div className="inner-header-text">
							<h2>SCRT Network’s first <br/> Income-generating NFTs.</h2>
							<div>
								<div className="btn-b button-margin-top">
									<button className="mint-button"><span className="button-first-letter">M</span>INT<span className="mint-small">(<span className="font-white">66sSCRT</span>)</span></button>
								</div>
								<div className="btn-b button-margin-top">
									<button className="gallery-button">Gallery</button>
								</div>
							</div>
							<div className="inner-header-mobile-text">
								Don’t miss out on the first NFT project<br/>
								with private on-chain smart contracts<br/>
								for guaranteed income generation.
							</div>
						</div>
					</div>
				</div>
			</header>

			<section id="about" className="sec-b">
				<div className="">
					<div className="sec-a-inner">
						<div>
							<div className="coin">
								<div className="bar">

								</div>
								<img className="coin-img" src="./assets/img/coin1.png" alt="coin3"/>
							</div>
							<h3>
								Low supply NFTs with<br/>
								ground-breaking tech:<br/>
							</h3>
							<p>The SCRT Society of Phantom Pandas has limited<br/>
								their membership to 2222 of the world’s most<br/>
								elite, wealthy and powerful individuals.</p>
						</div>
						<div>
							<div className="coin">
								<img className="coin-img" src="./assets/img/coin2.png" alt="coin3"/>
							</div>
							<h3>
								Original<br/>
								Hand-Painted<br/>
								Art Pieces:
							</h3>
							<p>Every Phantom Panda is a 100% unique 1/1<br/>
								hand-painted renaissance-style portrait. </p>
						</div>
						<div>
							<div className="coin">
								<img className="coin-img" src="./assets/img/coin3.png" alt="coin3"/>
							</div>
							<h3>
								The (11.11)<br/>
								Phantom Legacy Fund:
							</h3>
							<p>An ongoing 6% royalty will be locked in the<br/>
								Phantom Treasury until November 11th.<br/>
								All treasury funds will then be evenly<br/>
								distributed to all 2222 Phantom Pandas.<br/>
								This will continue every year forever.<br/>
								Assuming NFTs are still being traded. 
							</p>
						</div>
						<div>
							<div className="coin">
								<img className="coin-img" src="./assets/img/coin4.png" alt="coin3"/>
							</div>
							<h3>
								Trust-Fund Baby NFTs:
							</h3>
							<p>When the Phantom Panda Mint is Completed,<br/>
								the Phantom Baby-Maker will be unlocked.<br/>
								Each Phantom Panda NFT will generate a<br/>
								Trust-Fund Panda. </p>
						</div>
						<div>
							<div className="coin">
								<img className="coin-img" src="./assets/img/coin5.png" alt="coin3"/>
							</div>
							<h3>
								The Trust Fund:
							</h3>
							<p>A 6% royalty on all future Trust Fund Panda<br/>
								sales will be deposited into the Trust Fund.<br/>
								Secret Network’s groundbreaking private, on-chain<br/>
								randomizer oracle will then randomly choose one<br/>
								Trust Fund Panda each day to receive the Trust Fund.<br/>
								This will continue every day. Forever.<br/>
								Assuming NFTs are still being traded.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="faq" className="sec-b">
				<div className="faq">
					<h2>FAQ</h2>
				</div>
				<div className="sec-b-inner">
					<div>
						<h4>How many NFTs in this collection?</h4>
						<p>2222</p>
					</div>
					<div>
						<h4>How much will they cost at mint?</h4>
						<p>66 sSCRT (Secret SCRT)</p>
					</div>
					<div>
						<h4>Where can I buy SCRT?</h4>
						<p><span className="grey">Directly: </span>
							<a href="https://app.secretswap.net/buy">https://app.secretswap.net/buy</a></p>
						<p><span className="grey">Exchanges: </span>Binance / Huobi / Check on CMC</p>
					</div>
					<div>
						<h4> How do I convert my SCRT to sSCRT?</h4>
						<p><span className="grey">Here: </span> 
							<a href="https://wrap.scrt.network/">https://wrap.scrt.network/</a>
						</p>
					</div>
					<div>
						<h4>When mint?</h4>
						<p>Get on the list for mint announcement.<br/>
							follow us on twitter for all the updates.<br/>
							We anticipate a Mint in March 2022.</p>
					</div>
					<div>
						<h4>Is there a minting limit?</h4>
						<p>No Limit.</p>
					</div>
					<div>
						<h4>What wallet does SCRT use?</h4>
						<p>We recommend KEPLR.</p>
						<a className="wallet-font" href="https://www.keplr.app/">https://www.keplr.app/</a>
					</div>
					<div>
						<h4>When can we Generate our<br/>
							Trust Fund Pandas?</h4>
						<p>The baby-maker will launch soon<br/>
							after all Phantom Pandas are minted.<br/>
							Follow us on twitter for all announcements.</p>
					</div>
					<div>
						<h4>What is SCRT.network?</h4>
						<p className="paragraph">SCRT is the world’s first blockchain with<br/>
							privacy-preserving smart contracts and secret NFTs<br/>
							enabling mass blockchain adoption by global institutions.
						</p>
						<p className="paragraph">
							Quentin Tarantino recently chose Secret Network to launch<br/>
							his pulp fiction NFTs which sold at mint for over $1,100,000.00
						</p>
						<p className="paragraph">
							SCRT Network’s pioneering technology is what enables Phantom Pandas<br/>
							and Trust Fund Pandas to build secret smart contracts into the NFT collections<br/>
							for the annual Legacy Fund, and the daily random trust-fund distributions.
						</p>
					</div>
				</div>
				<div id="contemplation" className="faq">
					<h2>Contemplation:</h2>
				</div>
				<div className="sec-b-inner">
					<div>
						<h3 className="contemp-paragraph">How much can we expect the Legacy Fund to Pay out?</h3>
						<p className="contemp-paragraph">We can’t predict or promise anything<br/>
							because we simply don’t know<br/>
							how big the payments will get. </p>
						<p className="contemp-paragraph">Here’s a possibility using Bored Ape<br/>
							Yacht Club as a comparison: </p>
						<p className="contemp-paragraph">At the time of this writing, Bored<br/>
							Ape Yacht Club is 9 months old.<br/>
							The average volume of BAYC over<br/>
							the past 90 days is: $6.5M/day. </p>
						<p className="contemp-paragraph">The Phantom Panda<br/>
							Legacy royalty is 6%. </p>
						<p className="contemp-paragraph">If Phantom Pandas EVER reaches the same<br/>
							level that BAYC is at in its first 9 months,<br/>
							The Phantom Legacy Fund would pay around $64,000.00<br/>
							to EACH Phantom Panda NFT holder every year on November 11th.<br/>
							Forever.</p>
						<p className="contemp-paragraph">Obviously BAYC is a popular project,<br/>
							but its only 9 months old. </p>
						<p className="contemp-paragraph">The Phantom Panda Legacy Fund will pay out every single year until the end of time. </p>
						<p className="contemp-paragraph">Maybe we only hit 10% of BAYCs current volume and our annual<br/>
							Legacy Fund would pay every Phantom Panda around<br/>
							$6,400/year. </p>
						<p className="contemp-paragraph">Maybe it only hits 1% of BAYCs current volume and our annual<br/>
							Legacy Fund would pay every Phantom Panda around<br/>
							$640/year. </p>
						<p className="contemp-paragraph">OR <br/>
							maybe the Phantom Pandas DOMINATE the<br/>
							entire NFT space because we have better art,<br/>
							built-in income-generation, and we’re built on SCRT.network.</p>
						<p className="contemp-paragraph">Time will tell.</p>
						<p>Just don’t miss the ride.</p>
						<a  className="bottom-link-block"
							href="https://kingsumo.com/g/vhn8m6/join-the-waitlist-for-a-chance-to-win-a-rare-phantom-panda-nft">
							<button>Get on the list</button>
						</a>
					</div>
				</div>
			</section>
		</div>
	</div>
  );
}

export default App;
