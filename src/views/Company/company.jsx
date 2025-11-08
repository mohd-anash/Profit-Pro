import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";


const Companyes = () => {


    return (
        <>
            <Layout>
                <div className="companyInnerPage">
                    <div className="row">
                        <div className="col-xs-12 col-md-3">
                            <div className="totalOutPut totalOutPutCompanies">
                                <div className="icon"><i class="material-icons">
                                    attach_money
                                </i></div>
                                <div className="iconContent">
                                    <p>Revenue</p>
                                    <h5>$3.4M</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <div className="totalOutPut totalOutPutRevenue">
                                <div className="icon"><i class="material-icons">
                                    trending_up
                                </i></div>
                                <div className="iconContent">
                                    <p>Profit</p>
                                    <h5>$1.1M</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <div className="totalOutPut totalOutPutProfit">
                                <div className="icon"><i class="material-icons">
                                    percent
                                </i></div>
                                <div className="iconContent">
                                    <p>Profit Margin</p>
                                    <h5>20.5%</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <div className="totalOutPut totalOutPutScore">
                                <div className="icon"><i class="material-icons">
                                    military_tech
                                </i></div>
                                <div className="iconContent">
                                    <p>Health Score</p>
                                    <h5>88 %</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cpmpanyTabs">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#Reports" type="button" role="tab" aria-controls="Reports" aria-selected="true">Reports</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#Assumptions" type="button" role="tab" aria-controls="Assumptions" aria-selected="false">Assumptions</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#Loan-Analysis" type="button" role="tab" aria-controls="Loan-Analysis" aria-selected="false">Loan Analysis</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#Financial-Statements" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Financial Statements</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#Financial-Ratios" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Financial Ratios</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#Valuation" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Valuation</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#AIInsights" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">AI Insights</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#InvestmentAnalysis" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Investment Analysis</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#Narratives" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Narratives</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#UploadDocuments" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Upload Documents</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="Reports" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="reportsTabsSection">
                                <div className="financialReports">
                                    <div className="dataAnalyticesMaintitle">
                                        <h4>Financial Reports & Analysis</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-md-3">
                                            <div className="ananlyticesDataColum">
                                                <p>Total Reports</p>
                                                <h3>6</h3>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-3">
                                            <div className="ananlyticesDataColum">
                                                <p>Last Updated</p>
                                                <h3>2 days ago</h3>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-3">
                                            <div className="ananlyticesDataColum">
                                                <p>Total Pages</p>
                                                <h3>29</h3>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-3">
                                            <div className="ananlyticesDataColum">
                                                <p>Shared Reports</p>
                                                <h3>3</h3>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="financeTabsReportsAna">
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#All-Reports" type="button" role="tab" aria-controls="All-Reports" aria-selected="true">All Reports</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#Financial" type="button" role="tab" aria-controls="Financial" aria-selected="false">Financial</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#Analysis" type="button" role="tab" aria-controls="Analysis" aria-selected="false">Analysis</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#Valuation" type="button" role="tab" aria-controls="Valuation" aria-selected="false">Valuation</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="All-Reports" role="tabpanel" aria-labelledby="pills-home-tab">All-Reports</div>
                                            <div className="tab-pane fade" id="Financial" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                <div className="FinancialSection">
                                                    <div className="financialList">
                                                        <div className="icon">
                                                            <i className="material-icons">description</i>
                                                        </div>
                                                        <div className="details">
                                                            <h4>Comprehensive Financial Analysis Report</h4>
                                                            <p>Complete financial performance analysis including income statement, balance sheet, and cash flow analysis</p>
                                                            <div className="listingDetailsInfo">
                                                                <span className="date"><i className="material-icons">calendar_today</i> 10/20/2024</span>
                                                                <span className="pages"><i className="material-icons">description</i> 24 pages</span>
                                                                <span className="status">ready</span>
                                                            </div>
                                                        </div>
                                                        <div className="btnListFinance">
                                                            <button className="customeBtn btnBlankGray"><i className="material-icons">download</i>Download</button>
                                                            <button className="customeBtn btnBlankGray"><i className="material-icons">share</i>Share</button>
                                                        </div>
                                                    </div>
                                                    <div className="fincialSummry">
                                                        <div className="summryRow">
                                                            <h4>Executive Summary</h4>
                                                            <p>TechVision Solutions demonstrates strong financial performance with consistent revenue growth and healthy profit margins. The company maintains a solid balance sheet position with adequate liquidity to meet short-term obligations and strategic investments for long-term growth.</p>
                                                        </div>
                                                        <div className="summryRow">
                                                            <h4>Key Financial Metrics</h4>
                                                            <p>TechVision Solutions demonstrates strong financial performance with consistent revenue growth and healthy profit margins. The company maintains a solid balance sheet position with adequate liquidity to meet short-term obligations and strategic investments for long-term growth.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="Analysis" role="tabpanel" aria-labelledby="pills-contact-tab">Analysis</div>
                                            <div className="tab-pane fade" id="Valuation" role="tabpanel" aria-labelledby="pills-contact-tab">Valuation</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Reports Tabs Section */}
                        <div className="tab-pane fade" id="Assumptions" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="AssumptionsSection">
                                <div className="assumptionSectionTabs">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#Income-Statement" type="button" role="tab" aria-controls="Income-Statement" aria-selected="true">Income Statement</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#Balance-Sheet" type="button" role="tab" aria-controls="Balance-Sheet" aria-selected="false">Balance Sheet </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="Income-Statement" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="incomeStatementSection">
                                                <div className="editAsumptionBtnSec">
                                                    <button className="customeBtn btnBlankGray"><i className="material-icons">arrow_back</i>Edit Assumptions</button>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-12 col-md-6">
                                                        <div className="feilds">
                                                            <label>Revenue Growth Rate (%)</label>
                                                            <input type="text" placeholder="0" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-md-6">
                                                        <div className="feilds">
                                                            <label>Cost of Goods Sold Rate (%)</label>
                                                            <input type="text" placeholder="0" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-md-6">
                                                        <div className="feilds">
                                                            <label>Operating Expense Rate (%)</label>
                                                            <input type="text" placeholder="0" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-md-6">
                                                        <div className="feilds">
                                                            <label>Tax Rate (%)</label>
                                                            <input type="text" placeholder="0" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="Balance-Sheet" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="incomeStatementSection">
                                                <div className="editAsumptionBtnSec">
                                                    <button className="customeBtn btnBlankGray"><i className="material-icons">arrow_back</i>Edit Assumptions</button>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-12 col-md-6">
                                                        <div className="feilds">
                                                            <label>Revenue Growth Rate (%)</label>
                                                            <input type="text" placeholder="0" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-md-6">
                                                        <div className="feilds">
                                                            <label>Cost of Goods Sold Rate (%)</label>
                                                            <input type="text" placeholder="0" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-md-6">
                                                        <div className="feilds">
                                                            <label>Operating Expense Rate (%)</label>
                                                            <input type="text" placeholder="0" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-md-6">
                                                        <div className="feilds">
                                                            <label>Tax Rate (%)</label>
                                                            <input type="text" placeholder="0" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Assumptions Tabs Section */}
                        <div className="tab-pane fade" id="Loan-Analysis" role="tabpanel" aria-labelledby="pills-contact-tab">Loan-Analysis</div>
                        <div className="tab-pane fade" id="Financial-Statements" role="tabpanel" aria-labelledby="pills-contact-tab">Financial-Statements</div>
                        <div className="tab-pane fade" id="Financial-Ratios" role="tabpanel" aria-labelledby="pills-contact-tab">Financial-Ratios</div>
                        <div className="tab-pane fade" id="Valuation" role="tabpanel" aria-labelledby="pills-contact-tab">Valuation</div>
                        <div className="tab-pane fade" id="AIInsights" role="tabpanel" aria-labelledby="pills-contact-tab">AIInsights</div>
                        <div className="tab-pane fade" id="InvestmentAnalysis" role="tabpanel" aria-labelledby="pills-contact-tab">InvestmentAnalysis</div>
                        <div className="tab-pane fade" id="Narratives" role="tabpanel" aria-labelledby="pills-contact-tab">Narratives</div>
                        <div className="tab-pane fade" id="UploadDocuments" role="tabpanel" aria-labelledby="pills-contact-tab">UploadDocuments</div>
                    </div>
                </div>



            </Layout>
        </>
    )
}

export default Companyes;