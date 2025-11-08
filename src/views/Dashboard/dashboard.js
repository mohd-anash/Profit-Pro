import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";


const Dashboard = () => {


    return (
        <>
            <Layout>
                <div className="dashboardPage">
                    <div className="row">
                        <div className="col-xs-12 col-md-3">
                            <div className="totalOutPut totalOutPutCompanies">
                                <div className="icon"><i class="material-icons">
                                    corporate_fare
                                </i></div>
                                <div className="iconContent">
                                    <p>Total Companies</p>
                                    <h5>10</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <div className="totalOutPut totalOutPutRevenue">
                                <div className="icon"><i class="material-icons">
                                    attach_money
                                </i></div>
                                <div className="iconContent">
                                    <p>Total Revenue</p>
                                    <h5>$117.4M</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <div className="totalOutPut totalOutPutProfit">
                                <div className="icon"><i class="material-icons">
                                    trending_up
                                </i></div>
                                <div className="iconContent">
                                    <p>Total Profit</p>
                                    <h5>$23.3M</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <div className="totalOutPut totalOutPutScore">
                                <div className="icon"><i class="material-icons">
                                    military_tech
                                </i></div>
                                <div className="iconContent">
                                    <p>Avg Health Score</p>
                                    <h5>79<span>/100</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <div className="companyTiles companyTilesOne">
                                <div className="companyTilesHeader">
                                    <h4>Apple</h4>
                                    <p>Consumer Electronics</p>
                                </div>
                                <div className="companyTilesBody">
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Revenue</div>
                                        <div className="compRightValye">$95.6B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Profit</div>
                                        <div className="compRightValye">$23.4B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Health Score</div>
                                        <div className="compRightValye">
                                            <div className="progress" style={{ height: 8, width: 60 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Added Jan 16, 2024</div>
                                        <div className="compRightValye"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="companyTiles companyTilesTwo">
                                <div className="companyTilesHeader">
                                    <h4>Tesla</h4>
                                    <p>Automotive</p>
                                </div>
                                <div className="companyTilesBody">
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Revenue</div>
                                        <div className="compRightValye">$95.6B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Profit</div>
                                        <div className="compRightValye">$23.4B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Health Score</div>
                                        <div className="compRightValye">
                                            <div className="progress" style={{ height: 8, width: 60 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Added Jan 16, 2024</div>
                                        <div className="compRightValye"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="companyTiles companyTilesThree">
                                <div className="companyTilesHeader">
                                    <h4>Amazon</h4>
                                    <p>E-commerce</p>
                                </div>
                                <div className="companyTilesBody">
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Revenue</div>
                                        <div className="compRightValye">$95.6B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Profit</div>
                                        <div className="compRightValye">$23.4B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Health Score</div>
                                        <div className="compRightValye">
                                            <div className="progress" style={{ height: 8, width: 60 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Added Jan 16, 2024</div>
                                        <div className="compRightValye"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="companyTiles companyTilesOne">
                                <div className="companyTilesHeader">
                                    <h4>TSCM</h4>
                                    <p>Technology</p>
                                </div>
                                <div className="companyTilesBody">
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Revenue</div>
                                        <div className="compRightValye">$95.6B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Profit</div>
                                        <div className="compRightValye">$23.4B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Health Score</div>
                                        <div className="compRightValye">
                                            <div className="progress" style={{ height: 8, width: 60 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Added Jan 16, 2024</div>
                                        <div className="compRightValye"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="companyTiles companyTilesTwo">
                                <div className="companyTilesHeader">
                                    <h4>Microsoft</h4>
                                    <p>Software</p>
                                </div>
                                <div className="companyTilesBody">
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Revenue</div>
                                        <div className="compRightValye">$95.6B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Profit</div>
                                        <div className="compRightValye">$23.4B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Health Score</div>
                                        <div className="compRightValye">
                                            <div className="progress" style={{ height: 8, width: 60 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Added Jan 16, 2024</div>
                                        <div className="compRightValye"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="companyTiles companyTilesThree">
                                <div className="companyTilesHeader">
                                    <h4>NVIDIA</h4>
                                    <p>Semiconductors</p>
                                </div>
                                <div className="companyTilesBody">
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Revenue</div>
                                        <div className="compRightValye">$95.6B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Profit</div>
                                        <div className="compRightValye">$23.4B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Health Score</div>
                                        <div className="compRightValye">
                                            <div className="progress" style={{ height: 8, width: 60 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Added Jan 16, 2024</div>
                                        <div className="compRightValye"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="companyTiles companyTilesOne">
                                <div className="companyTilesHeader">
                                    <h4>Samsung</h4>
                                    <p>Electronics</p>
                                </div>
                                <div className="companyTilesBody">
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Revenue</div>
                                        <div className="compRightValye">$95.6B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Profit</div>
                                        <div className="compRightValye">$23.4B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Health Score</div>
                                        <div className="compRightValye">
                                            <div className="progress" style={{ height: 8, width: 60 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Added Jan 16, 2024</div>
                                        <div className="compRightValye"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="companyTiles companyTilesTwo">
                                <div className="companyTilesHeader">
                                    <h4>Facebook</h4>
                                    <p>Social Media</p>
                                </div>
                                <div className="companyTilesBody">
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Revenue</div>
                                        <div className="compRightValye">$95.6B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Profit</div>
                                        <div className="compRightValye">$23.4B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Health Score</div>
                                        <div className="compRightValye">
                                            <div className="progress" style={{ height: 8, width: 60 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Added Jan 16, 2024</div>
                                        <div className="compRightValye"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="companyTiles companyTilesThree">
                                <div className="companyTilesHeader">
                                    <h4>Salesforce</h4>
                                    <p>Cloud Computing</p>
                                </div>
                                <div className="companyTilesBody">
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Revenue</div>
                                        <div className="compRightValye">$95.6B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Profit</div>
                                        <div className="compRightValye">$23.4B</div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Health Score</div>
                                        <div className="compRightValye">
                                            <div className="progress" style={{ height: 8, width: 60 }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comapnyReportsRow">
                                        <div className="compLeftTitle">Added Jan 16, 2024</div>
                                        <div className="compRightValye"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Dashboard;