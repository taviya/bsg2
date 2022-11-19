import React from 'react'
import bsgLogoOnly from '../icon/bsg-logo-only.png';
import address from '../icon/address.png';
import welcomeDashboard from '../icon/welcome-dashboard.png';
import wallet from '../icon/wallet.png';
import runningTime from '../icon/running-time.png';
import depositTime from '../icon/deposit-time.png';
import dailyPlayer from '../icon/daily-player.png';
import dailyWalletWithCash from '../icon/daily-wallet-with-cash.png';
import dailyCoins from '../icon/daily-coins.png';
import lendEnergy from '../icon/lend-energy.png';
import detailDeposit from '../icon/detail-deposit.png';
import detailWithraw from '../icon/detail-withraw.png';
import detailGroup from '../icon/detail-group.png';
import tronCurrency from '../icon/tron-currency.png';

export default function Dashboard() {
    return(
        <>
            <main className="col-md-10 ms-sm-auto">
				<div className="row">
					<div className="col-md-8 main-dashboard">
						<div className="welcome-dashboard-background">
							<div className="background-dashboard">
								<img src={welcomeDashboard} alt="BigCo"/>
							</div>
							<div className="welcome-dashboard">
								<a className="mode-2" href="index-2.html"
									style={{fontSize: "20px", display: "flex", alignItems: "center", fontWeight: "bold"}}> 
									<img className=" " height="30" width="25" src={bsgLogoOnly} alt="BigCo"/>BSG2.0</a>
								<h3 data-lang="dashboard_title1">Welcome, Player!</h3>
								<p data-lang="common_title1">Start playing and earn rewards</p>
							</div>
							<div className="main-detail">
								<div className="row detail-group">
									<div className="col-6 col-md-3 col col-detail">
										<div className="detail">
											<img src={address} height="28" weight="28" alt="BigCo"/>
											<span>
												<div className="detail-title">
													<h3 data-lang="contract_address">Contract Address</h3>
												</div>
												<p className="contractAddress">...</p>
											</span>
										</div>

									</div>
									<div className="col-6 col-md-3 col col-detail">
										<div className="detail">
											<img src={wallet} height="28" weight="28" alt="BigCo"/>
											<span>
												<div className="detail-title">
													<h3 data-lang="income">Income</h3>
												</div>
												<p data-lang="deposit_rules6">15 days per cycle. Monthly 45%</p>
											</span>
										</div>
									</div>
									<div className="col-6 col-md-3 col col-detail">
										<div className="detail">
											<img src={runningTime} height="28" weight="28" alt="BigCo"/>
											<span>
												<div className="detail-title">
													<h3 data-lang="running_time">Platform Running Time</h3>
												</div>
												<p className="runningTime">00:00:00</p>
											</span>
										</div>
									</div>
									<div className="col-6 col-md-3 col col-detail">
										<div className="detail">
											<img src={depositTime} height="28" weight="28" alt="BigCo"/>
											<span>
												<div className="detail-title">
													<h3 data-lang="deposit_time">Deposit Time</h3>
												</div>
												<p className="depositCountDown">00:00:00</p>
											</span>
										</div>
									</div>
								</div>

							</div>
							<div className="main-daily-detail">
								<div className="row detail-group">
									<div className="col-6 col-md-3 col-daily-detail">
										<a href="#" data-bs-toggle="modal" data-bs-target="#player">
											<img src={dailyPlayer} alt="BigCo"/>
											<div className="daily-detail player">
												<div className="daily-text">
													<h3 data-lang="players"> Players </h3>
													<h2 className="totalUsers"> 0 </h2>
												</div>
											</div>
										</a>
									</div>
									<div className="col-6 col-md-3 col-daily-detail">
										<a href="#" data-bs-toggle="modal" data-bs-target="#daily-lucky-pool">
											<img src={dailyWalletWithCash} alt="BigCo"/>
											<div className="daily-detail lucky">
												<div className="daily-text">
													<h3 data-lang="lucky_pool"> Daily Lucky Pool </h3>
													<h2 className="luckPool"> 0 </h2>
												</div>
											</div>
										</a>
									</div>
									<div className="col-6 col-md-3 col-daily-detail">
										<a href="#" data-bs-toggle="modal" data-bs-target="#lottery-pool">
											<img src={dailyCoins} alt="BigCo"/>
											<div className="daily-detail star">
												<div className="daily-text">
													<h3 data-lang="lottery_pool"> Lottery Pool </h3>
													<h2 className="lotteryPool"> 0 </h2>
												</div>
											</div>
										</a>
									</div>
									<div className="col-6 col-md-3 col-daily-detail">
										<a href="#" data-bs-toggle="modal" data-bs-target="#energy">
											<img src={lendEnergy} alt="BigCo"/>
											<div className="daily-detail top3">
												<div className="daily-text">
													<h3 data-lang="energy_lend" style={{marginBottom: "15%"}}>Energy Lend</h3>
												</div>
											</div>
										</a>
									</div>
								</div>

							</div>
							<div className="main-account-detail">
								<div className="row">
									<div className="col-md-4">
										<a href="#" data-bs-toggle="modal" data-bs-target="#deposit">
											<div className="col-md-12 account-detail top3">
												<span className="account-detail-action">
													<img src={detailDeposit} className="deposit" alt="BigCo"/>
												</span>
												<h3 data-lang="deposit">Deposit</h3>
											</div>
										</a>
										<a href="#" data-bs-toggle="modal" data-bs-target="#withdraw">
											<div className="col-md-12 account-detail star">
												<span className="account-detail-action">
													<img src={detailWithraw} alt="BigCo"/>
												</span>
												<h3 data-lang="withdraw">Withdraw</h3>
											</div>
										</a>
										<a href="#" data-bs-toggle="modal" data-bs-target="#split">
											<div className="col-md-12 account-detail lucky">
												<span className="account-detail-action">
													<img src={detailGroup} alt="BigCo"/>
												</span>
												<h3 data-lang="split_acount">Split & Lottery Account</h3>
											</div>
										</a>
									</div>

									<div className="col-md-8 sm-mt">
										<a href="#">
											<div className="row" style={{paddingRight: "8px"}}>
												<div className="col-md-12 reward-detail">
													<div className="row reward-text">
														<div className="col-md-12 lucky-detail">
															<h3 data-lang="lucky_reward">Distribute Reward</h3>
															<h4 data-lang="time_remaining">Time Remaining: </h4>
														</div>
													</div>
													<div className="timer">
														<div>
															<h1><span className="hourStart0">0</span><span
																	className="hourEnd0">0</span></h1>
														</div>
														<div>
															<h1><span className="minuteStart0">0</span><span
																	className="minuteEnd0">0</span></h1>
														</div>
														<div>
															<h1><span className="secondStart0">0</span><span
																	className="secondEnd0">0</span></h1>
														</div>
													</div>

												</div>
											</div>

										</a>
										<a href="#">
											<div className="row" style={{paddingRight: "8px"}}>
												<div className="col-md-12 reward-detail">
													<div className="row reward-text">
														<div className="col-md-12 lucky-detail">
															<h3 data-lang="lottery_reward">Joining Lottery</h3>
															<h4 data-lang="time_remaining">Time Remaining: </h4>
														</div>
													</div>
													<div className="timer">
														<div>
															<h1><span className="hourStart1">0</span><span
																	className="hourEnd1">0</span></h1>
														</div>
														<div>
															<h1><span className="minuteStart1">0</span><span
																	className="minuteEnd1">0</span></h1>
														</div>
														<div>
															<h1><span className="secondStart1">0</span><span
																	className="secondEnd1">0</span></h1>
														</div>
													</div>

												</div>
											</div>

										</a>
									</div>
								</div>
							</div>

							<div className="main-latest-despositor">
								<div className="row">
									<div className="col-md-12">
										<div className="main-latest-despositor-text">
											<h3 data-lang="latest_depositors">Latest Depositors</h3>
										</div>
										<div className="main-latest-despositor-data">
											<table className="table depositorsTable" style={{textAlign: "center"}}>
												<thead>
													<tr>
														<th scope="col" data-lang="address">Address</th>
														<th scope="col" data-lang="time">Time</th>
														<th scope="col" data-lang="amount">Amount</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Null</td>
														<td>Null</td>
														<td>
															<div className='main-latest-despositor-data-amount'>
																<img src={tronCurrency} height='24' alt="BigCo"/>
																<h3>0</h3>
															</div>
														</td>
													</tr>
													<tr>
														<td>Null</td>
														<td>Null</td>
														<td>
															<div className='main-latest-despositor-data-amount'>
																<img src={tronCurrency} height='24' alt="BigCo"/>
																<h3>0</h3>
															</div>
														</td>
													</tr>
													<tr>
														<td>Null</td>
														<td>Null</td>
														<td>
															<div className='main-latest-despositor-data-amount'>
																<img src={tronCurrency} height='24' alt="BigCo"/>
																<h3>0</h3>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 ms-sm-auto main-side-detail">
						<div className="row">
							<div className="main-side-detail-wrapper">
								<div className="col-md-12 level-mobile">
									<div className="row">
										<div className="col-md-12">
											<div className="side-detail-level-text">
												<h3 className="night-mode-font-color-mobile-h3" data-lang="my_level">My
													Level</h3>
											</div>
											<a href="#">
												<div className="side-detail-level-data">
													<div>
														<img className="level" width="40" alt="BigCo"/>
														<img className="level" width="40" alt="BigCo"/>
														<img className="level" width="40" alt="BigCo"/>
														<img className="level" width="40" alt="BigCo"/>
														<img className="level" width="40" alt="BigCo"/>
													</div>
												</div>
											</a>
										</div>
									</div>
									<div className="row" style={{marginTop: "20px"}}> 
										<div className="col-md-12">
											<div className="side-detail-balance">
												<p className="night-mode-font-color-mobile" data-lang="income">Income</p>
												<h3 className="night-mode-font-color-mobile-h3 totalRevenue">0.00</h3>
											</div>
										</div>
										<div className="col-md-12">
											<div className="side-detail-balance">
												<p className="night-mode-font-color-mobile" data-lang="trx_balance">TRX
													Balance</p>
												<h3 className="night-mode-font-color-mobile-h3 trxBal">0.00</h3>
											</div>
										</div>
										<div className="col-md-12">
											<div className="side-detail-balance">
												<p className="night-mode-font-color-mobile" data-lang="usdt_balance">USDT
													Balance</p>
												<h3 className="night-mode-font-color-mobile-h3 usdtBal">0.00</h3>
											</div>
										</div>
										<div className="col-md-12">
											<div className="side-detail-balance">
												<p className="night-mode-font-color-mobile" data-lang="my_referral">My
													Referral</p>
												<h3 className="night-mode-font-color-mobile-h3 myReferral">...</h3>
											</div>
										</div>
										<div className="col-md-12">
											<div className="side-detail-balance">
												<p className="night-mode-font-color-mobile"><span
														data-lang="referral_link">Referral Link</span> <input
														className="referral-link" value="..." /></p>
												<button className="copyLink">Copy</button>
											</div>
										</div>
									</div>
									<div className="row" style={{marginTop: "20px"}}>
										<div className="col-md-12 lotteryWinners">
											<div className="side-detail-top-player-title">
												<h3 data-lang="lottery_winner">Lottery Winner</h3>
											</div>
											<div className="lotter-values">
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p>1</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p>2</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p>3</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p>4</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p>5</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p>6</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p>7</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p>8</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p>9</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p>10</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
											</div>

										</div>
									</div>
									<div className="row" style={{marginTop: "20px"}}>
										<div className="col-md-12 luckyPlayers">
											<div className="side-detail-top-player-title">
												<h3 data-lang="lucky_player">Lucky Player</h3>
											</div>
											<div className="luck-player-values">
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p className="p-color">1</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p className="p-color">2</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p className="p-color">3</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p className="p-color">4</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p className="p-color">5</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p className="p-color">6</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p className="p-color">7</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p className="p-color">8</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p className="p-color">9</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>

												<a href="#">
													<div className="side-detail-top-player">
														<div className="top-player-wrapper-name">
															<p className="p-color">10</p>
															<h3>Null</h3>
														</div>
														<div className="top-player-wrapper-price">
															<img src={tronCurrency} height="24" alt="BigCo"/>
															<h3>0.00</h3>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
        </>
    )
}
