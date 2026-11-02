import { useState } from "react";

const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount);

function PriceBreakup({ pricing, purity, colour, size, diamond }) {
    const [isBreakupExpanded, setIsBreakupExpanded] = useState(true);
    const emiMonthly = Math.round(pricing.total / 12);

    return (
        <aside className="valuation-card" aria-label="Transparent Valuation Ledger">


            {/* ── Collapsible Ledger ── */}
            <div className="valuation-ledger">
                <div
                    className="ledger-toggle"
                    onClick={() => setIsBreakupExpanded(!isBreakupExpanded)}
                    role="button"
                    tabIndex={0}
                >
                    <span className="ledger-toggle-title">Itemized Price Breakdown</span>
                    <span className="ledger-toggle-arrow">{isBreakupExpanded ? "−" : "+"}</span>
                </div>

                {isBreakupExpanded && (
                    <div className="ledger-items">

                        {/* Gold */}
                        <div className="ledger-row">
                            <div className="row-meta">
                                <span className="row-title">Gold Component</span>
                                <span className="row-subtitle">
                                    {pricing.goldWeight.toFixed(2)}g net @ {formatINR(Math.round(pricing.goldRatePerGram))}/g ({purity})
                                </span>
                            </div>
                            <strong className="row-price">{formatINR(pricing.goldPrice)}</strong>
                        </div>

                        {/* Diamond */}
                        <div className="ledger-row">
                            <div className="row-meta">
                                <span className="row-title">Solitaire Diamond</span>
                                <span className="row-subtitle">
                                    {diamond} Carat Natural Diamond (VVS1 · E-F)
                                </span>
                            </div>
                            <strong className="row-price">{formatINR(pricing.diamondPrice)}</strong>
                        </div>

                        {/* Making */}
                        <div className="ledger-row">
                            <div className="row-meta">
                                <span className="row-title">Artisan Making Charges</span>
                                <span className="row-subtitle">
                                    Handcrafted setting, prong work &amp; polish
                                </span>
                            </div>
                            <strong className="row-price">{formatINR(pricing.makingCharges)}</strong>
                        </div>

                        {/* Wastage */}
                        <div className="ledger-row">
                            <div className="row-meta">
                                <span className="row-title">Refining &amp; Casting Allowance (5%)</span>
                                <span className="row-subtitle">
                                    Precious metal melting recovery allowance
                                </span>
                            </div>
                            <strong className="row-price">{formatINR(pricing.wastage)}</strong>
                        </div>

                        {/* Subtotal */}
                        <div className="ledger-row subtotal-row">
                            <span className="row-title">Taxable Subtotal</span>
                            <strong className="row-price">{formatINR(pricing.subtotal)}</strong>
                        </div>

                        {/* GST */}
                        <div className="ledger-row">
                            <div className="row-meta">
                                <span className="row-title">Precious Metal GST (3%)</span>
                                <span className="row-subtitle">
                                    Central &amp; State Statutory Levy
                                </span>
                            </div>
                            <strong className="row-price">{formatINR(pricing.gst)}</strong>
                        </div>

                        {/* Total Highlight */}
                        <div className="ledger-total-highlight">
                            <div>
                                <span className="total-title">Total Valuation</span>
                                <span className="total-sub">Guaranteed Fair Atelier Benchmark</span>
                            </div>
                            <strong className="total-amount">{formatINR(pricing.total)}</strong>
                        </div>

                    </div>
                )}
            </div>


        </aside>
    );
}

export default PriceBreakup;
