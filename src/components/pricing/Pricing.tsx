import './pricing.scss';
import { ChevronRight, CircleCheckBig } from "lucide-react";
function Pricing() {
    return (
        <>
            <section className="pricing">
                <div className="container-lg">
                    <div className="pricing-tab-grid-wrap row px-5">
                        <div className="col-md-4">
                            {/* Card 1 */}
                            <div className="pricing-card">
                                <div className="pricing-top-wrap">
                                    <div className="pricing-icon-wrap">
                                        <img
                                            src="https://cdn.prod.website-files.com/69403ed6d70919e8711c1698/69415435071b22e7b0b20d7d_Pricing%20Icon%2001.svg"
                                            alt="Pricing Card Icon"
                                            className="pricing-card-icon"
                                        />
                                    </div>

                                    <div className="pricin-price-wrap">
                                        <div className="pricing-price">$699</div>
                                        <div className="pricing-price-month">/per month</div>
                                    </div>
                                </div>

                                <div className="pricing-card-title">Beginners</div>

                                <p className="pricing-card-details">
                                    Start your journey with essential tools and expert guidance
                                </p>

                                <div className="pricing-button-wrap">
                                    <a href="/product/beginners" className="btn pricing-button">
                                        <div className="pricing-btn-text">Get Started</div>
                                        <ChevronRight size={18} />
                                    </a>
                                </div>

                                <div className="feature-title">Features</div>

                                <div className="feature-list-wrapper">
                                    <div className="feature-list-wrap">
                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">
                                            Foundational strategy and setup
                                        </div>
                                    </div>

                                    <div className="feature-list-wrap">
                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">Simple monthly report</div>
                                    </div>

                                    <div className="feature-list-wrap">
                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">Trusted by Leading Brands</div>
                                    </div>

                                    <div className="feature-list-wrap">
                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">Monthly check-in call</div>
                                    </div>

                                    <div className="feature-list-wrap">
                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">Basic content creation plan</div>
                                    </div>
                                </div>
                            </div></div>

                        <div className="col-md-4">
                            {/* Card 2 */}
                            <div className="pricing-card center">
                                <div className="pricing-top-wrap">
                                    <div className="pricing-icon-wrap">
                                        <img
                                            src="https://cdn.prod.website-files.com/69403ed6d70919e8711c1698/694154d9e46a02ae10470eee_Pricing%20Icon%2002.svg"
                                            alt="Pricing Card Icon"
                                            className="pricing-card-icon"
                                        />
                                    </div>

                                    <div className="pricin-price-wrap">
                                        <div className="pricing-price">$899</div>
                                        <div className="pricing-price-month">/per month</div>
                                    </div>
                                </div>

                                <div className="pricing-card-title">Professional</div>

                                <p className="pricing-card-details">
                                    Scale your marketing with advanced features and dedicated support
                                </p>

                                <div className="pricing-button-wrap">
                                    <a href="/product/professional" className="btn pricing-button current">
                                        <div className="pricing-btn-text">Get Started</div>
                                        <ChevronRight size={18} />
                                    </a>
                                </div>

                                <div className="feature-title">Features</div>

                                <div className="feature-list-wrapper">
                                    <div className="feature-list-wrap">

                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">
                                            Comprehensive multi-channel strategy
                                        </div>
                                    </div>

                                    <div className="feature-list-wrap">

                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">
                                            Advanced content calendar design
                                        </div>
                                    </div>

                                    <div className="feature-list-wrap">

                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">
                                            Priority email and phone support 24/7
                                        </div>
                                    </div>

                                    <div className="feature-list-wrap">

                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">
                                            Detailed weekly/monthly analytics report
                                        </div>
                                    </div>

                                    <div className="feature-list-wrap">

                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">
                                            Custom 5 landing page creation
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                            {/* Card 3 */}
                            <div className="pricing-card">
                                <div className="pricing-top-wrap">
                                    <div className="pricing-icon-wrap">
                                        <img
                                            src="https://cdn.prod.website-files.com/69403ed6d70919e8711c1698/69415435071b22e7b0b20d7d_Pricing%20Icon%2001.svg"
                                            alt="Pricing Card Icon"
                                            className="pricing-card-icon"
                                        />
                                    </div>

                                    <div className="pricin-price-wrap">
                                        <div className="pricing-price">$1001</div>
                                        <div className="pricing-price-month">/per month</div>
                                    </div>
                                </div>

                                <div className="pricing-card-title">Enterprise</div>

                                <p className="pricing-card-details">
                                    Unlock maximum potential with custom strategy and unlimited capacity
                                </p>

                                <div className="pricing-button-wrap">
                                    <a href="/product/enterprise" className="btn pricing-button">
                                        <div className="pricing-btn-text">Get Started</div>
                                        <ChevronRight size={18} />
                                    </a>
                                </div>

                                <div className="feature-title">Features</div>

                                <div className="feature-list-wrapper">
                                    <div className="feature-list-wrap">
                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">
                                            Real-time dashboards and reporting
                                        </div>
                                    </div>

                                    <div className="feature-list-wrap">
                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">
                                            24/7 designated account manager support
                                        </div>
                                    </div>

                                    <div className="feature-list-wrap">
                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">
                                            Quarterly business strategy meetings
                                        </div>
                                    </div>

                                    <div className="feature-list-wrap">
                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">
                                            High-volume custom campaigns
                                        </div>
                                    </div>

                                    <div className="feature-list-wrap">
                                        <CircleCheckBig size={18} />
                                        <div className="feature-list-text">
                                            Full marketing automation setup
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pricing;
