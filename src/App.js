import React, { useEffect, useState, useRef } from "react";
import swal  from 'sweetalert';

function App() {
  const comingSoon = () => {
	swal("CoolBeez NFT coming soon", "", "info");
  }

  return (
    <div>
		<img className="main-back" src="./assets/img/bg.png"/>
		<nav>
			<div className="burger">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div>

				<a href="https://twitter.com/PhantomPandaNFT" className="twitter">
					<img src="./assets/img/twitter.webp" alt="twitter"/>
				</a>

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
				<div className="container">
					<h3>Introducing... <br/> 2222 Income-Generating NFTs built on SCRT.</h3>
					<h1>
						The SCRT society of
						<span>Phantom Pandas</span>
					</h1>
					<div className="inner-header">
						<div>
							<img className="panda-image" src="./assets/img/panda.png" alt="black"/>
						</div>
						<div>
							<h2>SCRT Network’s first<br/> Income-generating NFTs.</h2>
							<div>
								<div className="btn-b">
									<button className="mint-button"><span className="button-first-letter">M</span>INT<span className="mint-small">(<span className="font-white">66sSCRT</span>)</span></button>
								</div>
							</div>
							<div>
								<div className="btn-b">
									<a
										href="https://kingsumo.com/g/vhn8m6/join-the-waitlist-for-a-chance-to-win-a-rare-phantom-panda-nft">

										<button className="gallery-button"><span className="button-first-letter">G</span>ALLERY</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>


			<section id="about" className="sec-b">
				<div className="container">
					<div className="sec-a-inner">
						<div>
							<div className="coin">
								<div className="bar">

								</div>
								<img src="./assets/img/coin1.png" alt="coin3"/>
							</div>
							<h3>
								Low supply NFTs with
								ground-breaking tech:
							</h3>
							<p>The SCRT Society of Phantom Pandas has limited
								their membership to 2222 of the world’s most
								elite, wealthy and powerful individuals.</p>
						</div>
						<div>
							<div className="coin">
								<img src="./assets/img/coin2.png" alt="coin3"/>
							</div>
							<h3>
								Original
								Hand-Painted
								Art Pieces:
							</h3>
							<p>Every Phantom Panda is a 100% unique 1/1
								hand-painted renaissance-style portrait. </p>
						</div>
						<div>
							<div className="coin">
								<img src="./assets/img/coin3.png" alt="coin3"/>
							</div>
							<h3>
								The (11.11)
								Phantom Legacy Fund:
							</h3>
							<p>An ongoing 6% royalty will be locked in the
								Phantom Treasury until November 11th.
								All treasury funds will then be evenly
								distributed to all 2222 Phantom Pandas.
								This will continue every year into eternity.</p>
						</div>
						<div>
							<div className="coin">
								<img src="./assets/img/coin4.png" alt="coin3"/>
							</div>
							<h3>
								Trust-Fund Baby NFTs:
							</h3>
							<p>When the Phantom Panda Mint is Completed,
								the Phantom Baby-Maker will be unlocked.
								Each Phantom Panda NFT will generate a
								Trust-Fund Panda. </p>
						</div>
						<div>
							<div className="coin">
								<img src="./assets/img/coin5.png" alt="coin3"/>
							</div>
							<h3>
								The Trust Fund:
							</h3>
							<p>A 6% royalty on all future Trust Fund Panda
								sales will be deposited into the Trust Fund.
								Secret Network’s groundbreaking private, on-chain
								randomizer oracle will then randomly choose one
								Trust Fund Panda each day to receive the Trust Fund.
								This will continue every day into eternity.</p>
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
						<p><span className="grey">Directly: </span><a
								href="https://app.secretswap.net/buy">https://app.secretswap.net/buy</a></p>
						<p><span className="grey">Exchanges: </span>Binance / Huobi / Check on CMC</p>
					</div>
					<div>
						<h4> How do I convert my SCRT to sSCRT?</h4>
						<p><span className="grey">Here: </span> <a
								href="https://wrap.scrt.network/">https://wrap.scrt.network/</a></p>
					</div>
					<div>
						<h4>When mint?</h4>
						<p>Get on the list for mint announcement.
							follow us on twitter for all the updates.
							We anticipate a Mint in March 2022.</p>
					</div>
					<div>
						<h4>Is there a minting limit?</h4>
						<p>No Limit.</p>
					</div>
					<div>
						<h4>What wallet does SCRT use?</h4>
						<p>We recommend KEPLR.</p>
						<a href="https://www.keplr.app/">https://www.keplr.app/</a>
					</div>
					<div>
						<h4>When can Phantom Pandas Generate
							our free Trust Fund Pandas?</h4>
						<p>The baby-maker will launch soon
							after all Phantom Pandas are minted.
							Follow us on twitter for all announcements.</p>
					</div>
					<div>
						<h4>What is SCRT.network?</h4>
						<p>SCRT is the world’s first blockchain with
							privacy-preserving smart contracts and secret NFTs
							enabling mass blockchain adoption by global institutions.</p>
						<p>Quentin Tarantino recently chose Secret Network to launch
							his pulp fiction NFTs which sold at mint for over $1,100,000.00aaaaaaaaaaa</p>
						<p>
							SCRT Network’s pioneering technology is what enables Phantom Pandas
							and Trust Fund Pandas to build secret smart contracts into the NFT collections
							for the annual Legacy Fund, and the daily random trust-fund distributions.</p>
					</div>
				</div>
				<div id="contemplation" className="faq">
					<h2>Contemplation</h2>
				</div>
				<div className="sec-b-inner">
					<div>
						<h3>How much can we expect the Legacy Fund to Pay out?</h3>
						<p>We can’t predict or promise anything
							because we simply don’t know
							how big the payments will get. </p>
						<p>Here’s a possibility using Bored Ape
							Yacht Club as a comparison: </p>
						<p>At the time of this writing, Bored
							Ape Yacht Club is 9 months old.
							The average volume of BAYC over
							the past 90 days is: $6.5M/day. </p>
						<p>The Phantom Panda
							Legacy royalty is 6%. </p>
						<p>If Phantom Pandas EVER reaches the same
							level that BAYC is at in its first 9 months,
							The Phantom Legacy Fund would pay around $64,000.00
							to EACH Phantom Panda NFT holder every year on November 11th.
							Forever.</p>
						<p>Obviously BAYC is a popular project,
							but its only 9 months old. </p>
						<p>The Phantom Panda Legacy Fund will pay out every single year until the end of time. </p>
						<p>Maybe we only hit 10% of BAYCs current volume and our annual
							Legacy Fund would pay every Phantom Panda around
							$6,400/year. </p>
						<p>Maybe it only hits 1% of BAYCs current volume and our annual
							Legacy Fund would pay every Phantom Panda around
							$640/year. </p>
						<p>OR <br/>
							maybe the Phantom Pandas DOMINATE the
							entire NFT space because we have better art,
							built-in income-generation, and we’re built on SCRT.network.</p>
						<p>Time will tell.</p>
						<p>Just don’t miss the ride.</p>
						<a
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
