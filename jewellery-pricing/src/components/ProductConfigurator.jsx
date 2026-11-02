import { useState } from "react";

function ProductConfigurator({
    purity,
    setPurity,
    colour,
    setColour,
    size,
    setSize,
    diamond,
    setDiamond,
    mode,
    setMode,
    product,
}) {
    const [showSizeGuide, setShowSizeGuide] = useState(false);

    return (
        <section className="atelier-configurator" aria-label="Ring Customizer">

            {/* ── 1. Gold Purity ── */}
            <div className="config-group">


                <div className="purity-grid">
                    {Object.keys(product.metalPurity).map((item) => {
                        const info = product.purityInfo?.[item];
                        const isSelected = purity === item;

                        return (
                            <button
                                type="button"
                                key={item}
                                className={`purity-card ${isSelected ? "is-active" : ""}`}
                                onClick={() => setPurity(item)}
                            >
                                {info?.recommended && (
                                    <span className="purity-badge">Popular Choice</span>
                                )}
                                <div className="purity-karat">{item}</div>
                                <div className="purity-percent">{info?.purityText || "Gold"}</div>
                                <div className="purity-desc">{info?.tag || "Solid Gold"}</div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── 2. Gold Colour / Tone ── */}
            <div className="config-group">
                <div className="config-header-row">
                    <label className="config-label">
                        <span className="step-num">02</span>
                        <span>Precious Metal Hue</span>
                    </label>
                    <span className="config-selected-value">
                        {product.colourInfo?.[colour]?.name || `${colour} Gold`}
                    </span>
                </div>

                <div className="colour-grid">
                    {product.colours.map((item) => {
                        const info = product.colourInfo?.[item];
                        const isSelected = colour === item;

                        return (
                            <button
                                type="button"
                                key={item}
                                className={`colour-card ${isSelected ? "is-active" : ""}`}
                                onClick={() => setColour(item)}
                            >
                                <span className={`swatch-circle swatch-${item.toLowerCase()}`}>
                                    <span className="swatch-glimmer" />
                                </span>
                                <div className="colour-meta">
                                    <span className="colour-title">{info?.name || item}</span>
                                    <span className="colour-sub">{info?.tone || "Solid Gold"}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── 3. Ring Size ── */}
            <div className="config-group">
                <div className="config-header-row">
                    <label className="config-label">
                        <span className="step-num">03</span>
                        <span>Ring Size</span>
                    </label>
                    <div className="size-actions">
                        <span className="config-selected-value">
                            Size {size} ({product.ringSizes[size]}g gold)
                        </span>
                        <button
                            type="button"
                            className="size-guide-btn"
                            onClick={() => setShowSizeGuide(!showSizeGuide)}
                        >
                            {showSizeGuide ? "Hide Guide" : "Size Guide"}
                        </button>
                    </div>
                </div>

                <div className="size-pills">
                    {Object.keys(product.ringSizes).map((itemKey) => {
                        const numSize = Number(itemKey);
                        const isSelected = size === numSize;
                        const weight = product.ringSizes[numSize];

                        return (
                            <button
                                type="button"
                                key={itemKey}
                                className={`size-pill ${isSelected ? "is-active" : ""}`}
                                onClick={() => setSize(numSize)}
                            >
                                <span className="size-num">{itemKey}</span>
                                <span className="size-weight">{weight}g</span>
                            </button>
                        );
                    })}
                </div>

                {showSizeGuide && (
                    <div className="size-guide-modal">
                        <div className="size-guide-header">
                            <span>Indian Standard Ring Size Measurements</span>
                        </div>
                        <div className="size-guide-table">
                            <div className="size-guide-row header-row">
                                <span>Size (IND)</span>
                                <span>Diameter (mm)</span>
                                <span>Circumference (mm)</span>
                                <span>Est. Gold Weight</span>
                            </div>
                            {Object.keys(product.ringSizes).map((key) => {
                                const dim = product.ringSizeDimensions?.[key];
                                return (
                                    <div
                                        key={key}
                                        className={`size-guide-row ${size === Number(key) ? "current-size" : ""}`}
                                    >
                                        <strong>Size {key}</strong>
                                        <span>{dim ? `${dim.mm} mm` : "—"}</span>
                                        <span>{dim ? `${dim.circ} mm` : "—"}</span>
                                        <span>{product.ringSizes[key]} grams</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* ── 4. Diamond Weight ── */}
            <div className="config-group">
                <div className="config-header-row">
                    <label className="config-label">
                        <span className="step-num">04</span>
                        <span>Solitaire Diamond</span>
                    </label>
                    <span className="config-selected-value">
                        {diamond} Carat Natural Diamond
                    </span>
                </div>

                <div className="diamond-grid">
                    {product.diamonds.map((item) => {
                        const isSelected = diamond === item.value;

                        return (
                            <button
                                type="button"
                                key={item.value}
                                className={`diamond-card ${isSelected ? "is-active" : ""}`}
                                onClick={() => setDiamond(Number(item.value))}
                            >


                                <div className="diamond-weight-label">{item.label}</div>
                                <div className="diamond-mm">{item.mm || "Round Brilliant"}</div>
                                <div className="diamond-clarity">{item.clarity || "VVS1 · E-F"}</div>
                            </button>
                        );
                    })}
                </div>
            </div>


        </section>
    );
}

export default ProductConfigurator;
