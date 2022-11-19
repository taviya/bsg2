import React from 'react'
import address from '../icon/address.png';
import wallet from '../icon/wallet.png';
import runningTime from '../icon/running-time.png';
import depositTime from '../icon/deposit-time.png';
import bsgLogo from '../icon/bsg-logo.png';

export default function myTeam() {
    return(
        <>
            <main class="col-md-10 ms-sm-auto mb-20">
				<div class="row">
					<div class="col-md-12 main-team">
						<div class="main-team-background">
							<div class="my-team-background"></div>
							<div class="welcome-team">
								<img heigth="100" width="150" src={bsgLogo} alt="BigCo"/>
								<h3 data-lang="myteam">My Team</h3>
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

						<div class="main-team-detail">
							<div class="row">
								<div class="col-12 col-md-5" style={{marginBottom:"20px"}}>
									<div class="team-detail top3">
										<p data-lang="sales">Sales</p>
										<h3 class="totalTeamDeposit">0</h3>
									</div>
								</div>
								<div class="col-12 col-md-5">
									<div class="team-detail star">
										<p data-lang="team_members">Team members</p>
										<h3 class="teamNum">0</h3>
									</div>
								</div>
							</div>
							<div class="row" style={{marginTop: "20px"}}>
								<div class="col-12 col-md-5" style={{marginBottom:"20px"}}>
									<div class="team-detail lucky">
										<p data-lang="performance_a">Performance A Area</p>
										<h3 class="maxDeposit">0</h3>
									</div>
								</div>
								<div class="col-12 col-md-5">
									<div class="team-detail pink">
										<p data-lang="performance_b">Performance B Area</p>
										<h3 class="otherDeposit">0</h3>
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
