import { useState, useMemo } from "react";
import ProductConfigurator from "./components/ProductConfigurator";
import PriceBreakup from "./components/PriceBreakup";
import RingVisual from "./components/RingVisual";
import { jewelleryProduct } from "./data/jewelleryData";
import { calculatePrice } from "./utils/calculatePrice";
import "./App.css";

function App() {
  const [purity, setPurity] = useState("18KT");
  const [colour, setColour] = useState("Yellow");
  const [size, setSize] = useState(14);
  const [diamond, setDiamond] = useState(0.5);
  const [mode, setMode] = useState("made");
  const [goldRate, setGoldRate] = useState(9500);

  // Gallery interactive angle state
  const [activeAngle, setActiveAngle] = useState("front");
  const [showSpecs, setShowSpecs] = useState(false);
  const [isEditingRate, setIsEditingRate] = useState(false);

  const pricing = useMemo(() => {
    return calculatePrice({
      purity,
      size,
      diamondWeight: diamond,
      goldRate,
      product: jewelleryProduct,
    });
  }, [purity, size, diamond, goldRate]);

  return (
    <div className="atelier-app">

      {/* ── Main Atelier Showcase & Configuration ── */}
      <main className="atelier-main">
        <div className="atelier-layout">

          {/* ════════ LEFT COLUMN: Product Ring Image & Heritage ════════ */}
          <div className="atelier-left-col">

            {/* Product Ring Showcase Card */}
            <div className="product-stage-card">


              {/* Dynamic Ring Visual Presentation */}
              <div className="stage-frame">
                <div className="stage-halo" />

                <RingVisual
                  colour={colour}
                  diamond={diamond}
                  activeAngle={activeAngle}
                />


              </div>

            </div>





          </div>

          {/* ════════ RIGHT COLUMN: Title, Benchmark, Configurator & Price ════════ */}
          <div className="atelier-right-col">

            {/* Product Identity Card */}
            <div className="product-identity-card">

              <h1 className="product-heading">{jewelleryProduct.name}</h1>
              <p className="product-summary">{jewelleryProduct.description}</p>

              {/* Integrated 24KT Benchmark Gold Rate Widget */}

            </div>

            {/* Interactive Atelier Configurator */}
            <div className="atelier-customizer-card">
              <ProductConfigurator
                purity={purity}
                setPurity={setPurity}
                colour={colour}
                setColour={setColour}
                size={size}
                setSize={setSize}
                diamond={diamond}
                setDiamond={setDiamond}
                mode={mode}
                setMode={setMode}
                product={jewelleryProduct}
              />
            </div>

            {/* Valuation Ledger & Transparent Price Breakup */}
            <PriceBreakup
              pricing={pricing}
              purity={purity}
              colour={colour}
              size={size}
              diamond={diamond}
            />

          </div>

        </div>
      </main>

    </div>
  );
}

export default App;
