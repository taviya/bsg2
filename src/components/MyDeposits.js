import React from 'react'
import bsgLogo from '../icon/bsg-logo.png';
import address from '../icon/address.png';
import wallet from '../icon/wallet.png';
import runningTime from '../icon/running-time.png';
import depositTime from '../icon/deposit-time.png';

export default function MyDeposits() {
    return(
        <>
            <main class="col-md-10 ms-sm-auto">
                <div class="row">
                    <div class="col-md-12 main-team">
                        <div class="main-team-background">
                            <div class="background"></div>
                            <div class="welcome-team">
                                <img heigth="100" width="150" src={bsgLogo} alt="BigCo"/>
                                <h3 data-lang="deposit_details">Deposit Details</h3>
                                <p data-lang="common_title1">Start playing and earn rewards!</p>
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
                        </div>
                        <div class="main-latest-despositor">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="main-latest-despositor-text">
                                        <h3 data-lang="deposit_details">Deposit Details</h3>
                                    </div>
                                    <div class="main-latest-despositor-data table-responsive">
                                        <table class="table ordersTable" style={{overflowX:"auto", textAlign: "center"}}>
                                            <thead>
                                                <tr>
                                                    <th scope="col" data-lang="amount">Amount</th>
                                                    <th scope="col" data-lang="time">Time</th>
                                                    <th scope="col" data-lang="unfreeze_time">Unfreeze Time</th>
                                                    <th scope="col" data-lang="reward">Reward</th>
                                                    <th scope="col" style={{textAlign: "center"}} data-lang="status">
                                                        Status</th>
                                                </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
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
