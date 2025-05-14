function Description(){
    return(
       <div id = "Description"
       className="pb-4 pt-4">
        <h2
        className="text-2xl underline"
        >Company Description</h2>
        <p>Founded in <b>March 2024</b>, in Kenya PAAB Capital uses a combination of
        strategic trading models and stringent risk management techniques to
        minimize downside risks and maximize returns for our clients. Our team
        of dedicated professionals brings a wealth of experience in the financial
        industry, ensuring that every decision is backed by deep expertise and
        precision.
        We target an annual return of <b>30%</b> as Return on Investment (ROI) on the
        long-term investment (Special Fund) and an annual return of <b>13%</b> as
        Interest on the Money Market Fund.
        </p>
        <div
        className="pt-4">
            <p>PAAB Capital is committed to offering the following services:</p>
            <ul className="list-disc pl-6">
                <li><b>Asset Management</b>: Tailored strategies to ensure optimal portfolio
                growth, both locally and globally.</li>

                <li><b>Securities Trading</b>: Access to global markets, with a focus on risk-
                adjusted returns.</li>

                <li><b>Corporate Finance Advisory</b>: Helping businesses navigate financial
                complexities with expert advice and strategies.</li>
                <li><b>Market Research</b>: Offering valuable insights and analysis to guide
                investment decisions.</li>
                <li><b>Investment Services</b>: A variety of solutions to suit different investor
                needs, from retail to institutional.</li>
            </ul>
        </div>
        <div
        className="flex flex-wrap gap-4.5 pt-3"> 
            <div
            className="border-2 rounded-xl overflow-auto shadow-md shadow-gray-400 p-1.5">
                <h3
                className="text-xl underline">
                    <b>Key Details for The Special Fund</b>
                </h3>
                <ul className="list-disc pl-6">
                    <li><b>Base Currency:</b> Kenyan Shilling (KES)</li>
                    <li><b>Preferable Investment:</b> KES 500,000</li>
                    <li><b>Minimum Top-up:</b> KES 50,000</li>
                    <li><b>Minimum Lock-in Period:</b> 6 Months</li>
                    <li><b>Management Fees:</b> 5.5% p.a. pro-rated</li>
                    <li><b>Fund Manager:</b> PAAB Capital</li>
                    <li><b>Years in the Industry:</b> 5 years</li>
                </ul>
            </div>
            <div
            className="border-2 rounded-xl overflow-auto shadow-md shadow-gray-400 p-1.5">
                <h3
                className="text-xl underline">
                    <b>Key Details for The Money Market Fund</b>
                </h3>
                <ul className="list-disc pl-6">
                    <li><b>Base Currency:</b> Kenyan Shilling (KES)</li>
                    <li><b>Preferable Investment:</b> KES 135,000</li>
                    <li><b>Minimum Top-up:</b> KES 13,000</li>
                    <li><b>Management Fees:</b> 2.5% p.a. on interested earned</li>
                    <li><b>Withholding Tax:</b> 15%</li>
                    <li><b>Fund Manager:</b> PAAB Capital</li>
                    <li><b>Years in the Industry:</b> 5 years</li>
                </ul>
            </div>
        </div>
       </div>
    )
}

export default Description;