function Assets() {
    return (
        <div id="Assets">
            <h2 className="text-2xl underline pb-1.5">ASSET CLASSES</h2>
            
            <p>
                The fund strategically allocates capital across key global financial markets,
                encompassing foreign exchange, equities, sovereign bonds, exchange traded funds and derivative instruments. By leveraging opportunities in
                diverse international financial hubs, the portfolio integrates exposure to
                equities, futures, and options spanning metals, commodities, and
                currencies. This diversified approach aims to capture broad market
                dynamics while optimizing risk-adjusted returns across multiple asset
                classes.
            </p>

            <p className="pt-3 pb-1.5">Key asset classes include:</p>

            <div className="flex flex-wrap gap-1.5 pb-4">
                <div className="border-2 rounded-xl overflow-auto shadow-md shadow-gray-400 p-1.5 max-w-max">
                    <h3 className="text-xl underline"><b>Global Investment Opportunities</b></h3>
                    <p>
                        PAAB Capital offers trading and investment opportunities in the following
                        global markets:
                    </p>
                    <ul className="list-disc list-inside pl-4 pt-1">
                        <li><b>Currency Trading</b></li>
                        <li><b>Precious Metals</b></li>
                        <li><b>Commodities</b></li>
                        <li><b>International Equities</b></li>
                        <li><b>Exchange-Traded Funds (ETFs)</b></li>
                        <li><b>Sovereign Bonds</b></li>
                        <li><b>Derivatives</b></li>
                    </ul>
                </div>

                <div className="border-2 rounded-xl overflow-auto shadow-md shadow-gray-400 p-1.5">
                    <h3 className="text-xl underline"><b>Local Investment Opportunities</b></h3>
                    <p>
                        PAAB Capital also offers investment opportunities in the following local
                        markets:
                    </p>
                    <ul className="list-disc list-inside pl-4 pt-1">
                        <li><b>Government Securities</b></li>
                        <li><b>Cash & Cash Equivalents</b></li>
                        <li><b>NSE Derivatives</b></li>
                        <li><b>NSE Equities</b></li>
                        <li><b>Commercial Papers</b></li>
                    </ul>
                </div>
            </div>

            <div className="border-2 rounded-md p-2">
                <h3 className="text-xl underline"><b>Asset Allocation</b></h3>
                <p>PAAB Capital's asset allocation is as follows:</p>
                <ul className="list-disc list-inside pl-4 pt-1">
                    <li><b>Government Securities:</b> 60%</li>
                    <li><b>Cash & Cash Equivalents:</b> 15%</li>
                    <li><b>Derivatives:</b> 5%</li>
                    <li><b>Sovereign Bonds:</b> 6%</li>
                    <li><b>NSE Securities:</b> 4%</li>
                    <li><b>International Equities:</b> 1%</li>
                    <li><b>Total:</b> 100%</li>
                </ul>
            </div>

            <p className="pb-2.5 pt-2.5">
                At PAAB Capital, we are dedicated to providing clients with robust, growth-
                driven financial solutions while carefully managing risk to protect their
                investments.
            </p>
        </div>
    );
}

export default Assets;
