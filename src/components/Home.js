import React from 'react'
import welcomLandingPage from '../icon/welcom-landing-page.png';
import sideGeorge from '../icon/side-george.png';
import sideDapp from '../icon/side-dapp.png';
import hazeCrypto from '../icon/haze-crypto.png';

export default function Home() {
    return(
        <>
            <main className="col-md-12">
                <div className="main-home">
                    <div className="container-fluid landing">
                        <div className="landing-text">
                            <h1 style={{color: "#FFFFFF"}} data-lang="title1">Blockchain</h1>
                            <h1 style={{color: "#FFFFFF", marginBottom: "20px"}} data-lang="title2">Split Game</h1>
                            <a href="dashboard.html" data-lang="contribute">CONTRIBUTE NOW!</a>
                        </div>
                        <img src={welcomLandingPage} alt="BigCo"/>
                    </div>
                    <div className="container-fluid audit">
                        <div className="audit-text">
                            <h1 data-lang="desc1">Smart Contract Code and <br /> Audit Report</h1>
                            <p data-lang="desc2">Fully decentralise and 100% open source.</p>
                            <p data-lang="desc3">The codes of the smart contract have been audited by independent third-party.
                            </p>
                        </div>
                        <div className="row" style={{marginTop: "20px"}}>
                            <div className="col-6 col-md-4 flex side-george">
                                <img src={sideGeorge} alt="BigCo"/>
                            </div>
                            <div className="col-6 col-md-4 flex side-dapp">
                                <img src={sideDapp} alt="BigCo"/>
                            </div>
                            <div className="col-6 col-md-4 flex haze-crypto">
                                <img src={hazeCrypto} alt="BigCo"/>
                            </div>
                        </div>
                    </div>
                    <div className="container reward">
                        <div className="row">
                            <div className="col-12 col-md-6" style={{marginBottom: "20px"}}>
                                <h1 className="luckPool">$0.00</h1>
                                <p data-lang="lucky_pool">Daily Lucky Pool</p>
                            </div>
                            <div className="col-12 col-md-6 br" style={{marginBottom: "20px"}}>
                                <h1 className="lotteryPool">$0.00</h1>
                                <p data-lang="lottery_pool">Lottery Pool</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid platform">
                        <div className="row">
                            <div className="col-12 col-md-6 platform-detail"
                                style={{background: "linear-gradient(293.7deg, #3B00C1 -2.22%, #8F5EFF 99.99%) !important", display: "flex", alignItems: "center"}}>
                                <h1 data-lang="desc4">The Most Trusted <br /> Platform</h1>
                            </div>
                            <div className="col-12 col-md-6  platform-detail"
                                style={{background: "linear-gradient(322.35deg, #029CA7 0%, #6096F1 100%)"}}>
                                <div className="row" style={{margin: "30px 0"}}>
                                    <div className="col-12 col-md-1">
                                        <h3> 01 </h3>
                                    </div>
                                    <div className="col-12 col-md-11" style={{paddingTop: "5px", paddingLeft: "20px"}}>
                                        <h4 data-lang="desc5"> 100% Decentralise with <br /> Professional Audit </h4>
                                        <p data-lang="desc6">Smart contract coding fully verified by tronscan.</p>
                                    </div>
                                </div>
                                <div className="row" style={{margin: "30px 0"}}>
                                    <div className="col-12 col-md-1">
                                        <h3> 02 </h3>
                                    </div>
                                    <div className="col-12 col-md-11" style={{paddingTop: "5px", paddingLeft: "20px"}}>
                                        <h4 data-lang="desc7"> High Return </h4>
                                        <p data-lang="desc8">15 days per Cycle paying 1.5% interest daily, total of 22.5%
                                            interest in one Cycle. 45% Monthly return on your Investment.</p>
                                    </div>
                                </div>
                                <div className="row" style={{margin: "30px 0"}}>
                                    <div className="col-12 col-md-1">
                                        <h3> 03 </h3>
                                    </div>
                                    <div className="col-12 col-md-11" style={{paddingTop: "5px", paddingLeft: "20px"}}>
                                        <h4 data-lang="desc9"> 1-1 Matching Orders </h4>
                                        <p data-lang="desc10">Sustainability and longevity are the key mission of BSG.</p>
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
