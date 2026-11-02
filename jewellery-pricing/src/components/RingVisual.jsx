import heroImage from "../assets/hero.png";

const METAL_GRADIENTS = {
    Yellow: {
        outer: ["#FCE8A9", "#E8BD56", "#C59328", "#8A5E12", "#D4A538", "#FCE8A9"],
        inner: ["#7A500C", "#B38222", "#E8BD56", "#5C3A06"],
        prongs: ["#FDECB2", "#D4A538", "#9E6D18"],
        name: "18K Yellow Gold",
    },
    Rose: {
        outer: ["#FED4C5", "#EFA58D", "#C86A4F", "#8E3D27", "#DF8C72", "#FED4C5"],
        inner: ["#7A301D", "#B55A40", "#EFA58D", "#5C2011"],
        prongs: ["#FEDFD4", "#DF8C72", "#A64F37"],
        name: "18K Rose Gold",
    },
    White: {
        outer: ["#FFFFFF", "#E5E7EB", "#B8BFCB", "#717986", "#D1D5DB", "#FFFFFF"],
        inner: ["#555D6A", "#8D96A5", "#D8DCE3", "#3C424C"],
        prongs: ["#FFFFFF", "#CBD1DB", "#8D96A5"],
        name: "Rhodium White Gold",
    },
};

export default function RingVisual({ colour = "Yellow", diamond = 0.5, activeAngle = "front" }) {
    const metal = METAL_GRADIENTS[colour] || METAL_GRADIENTS.Yellow;

    // Diamond scale factor (0.25ct -> 0.85, 0.5ct -> 1.0, 1.0ct -> 1.25)
    const scaleFactor = diamond === 0.25 ? 0.85 : diamond === 1 ? 1.25 : 1.0;

    if (activeAngle === "photo") {
        return (
            <div className="ring-photo-view">
                <img
                    src={heroImage}
                    alt="Classic Solitaire Ring in Natural Gold"
                    className="ring-photo-img"
                />
            </div>
        );
    }

    return (
        <div className={`ring-vector-stage angle-${activeAngle}`}>
            <svg
                viewBox="0 0 320 320"
                className="ring-svg-canvas"
                xmlns="http://www.w3.org/2000/svg"
                aria-label={`${colour} Gold Ring with ${diamond} Carat Diamond`}
            >
                <defs>
                    {/* Metal outer shank gradient */}
                    <linearGradient id="metalOuter" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={metal.outer[0]} />
                        <stop offset="25%" stopColor={metal.outer[1]} />
                        <stop offset="50%" stopColor={metal.outer[2]} />
                        <stop offset="75%" stopColor={metal.outer[3]} />
                        <stop offset="90%" stopColor={metal.outer[4]} />
                        <stop offset="100%" stopColor={metal.outer[5]} />
                    </linearGradient>

                    {/* Metal inner shank depth */}
                    <linearGradient id="metalInner" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor={metal.inner[0]} />
                        <stop offset="40%" stopColor={metal.inner[1]} />
                        <stop offset="80%" stopColor={metal.inner[2]} />
                        <stop offset="100%" stopColor={metal.inner[3]} />
                    </linearGradient>

                    {/* Prongs gradient */}
                    <linearGradient id="metalProngs" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={metal.prongs[0]} />
                        <stop offset="50%" stopColor={metal.prongs[1]} />
                        <stop offset="100%" stopColor={metal.prongs[2]} />
                    </linearGradient>

                    {/* Diamond Sparkle & Facet Gradients */}
                    <linearGradient id="gemFacet1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="45%" stopColor="#E9F5FF" />
                        <stop offset="100%" stopColor="#BFE2FF" />
                    </linearGradient>

                    <linearGradient id="gemFacet2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="50%" stopColor="#F0F8FF" />
                        <stop offset="100%" stopColor="#CEE5F7" />
                    </linearGradient>

                    <linearGradient id="gemFacetDark" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#A8D4F5" />
                        <stop offset="50%" stopColor="#89BFE6" />
                        <stop offset="100%" stopColor="#6DA8D4" />
                    </linearGradient>

                    <radialGradient id="ringShadow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(35, 28, 20, 0.28)" />
                        <stop offset="60%" stopColor="rgba(35, 28, 20, 0.08)" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>

                    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="glow" />
                        <feComposite in="SourceGraphic" in2="glow" operator="over" />
                    </filter>
                </defs>

                {/* 1. Floor Drop Shadow */}
                <ellipse cx="160" cy="275" rx="85" ry="14" fill="url(#ringShadow)" />

                {/* 2. Main Ring Band (Outer & Inner) */}
                {/* Outer Band */}
                <circle
                    cx="160"
                    cy="185"
                    r="82"
                    fill="none"
                    stroke="url(#metalOuter)"
                    strokeWidth="18"
                    strokeLinecap="round"
                />

                {/* Inner Band Depth Shadow */}
                <circle
                    cx="160"
                    cy="185"
                    r="73.5"
                    fill="none"
                    stroke="url(#metalInner)"
                    strokeWidth="3.5"
                    opacity="0.85"
                />

                {/* Polished Highlight on Lower Band Rim */}
                <path
                    d="M 100 230 A 82 82 0 0 0 220 230"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    opacity="0.65"
                    strokeLinecap="round"
                />

                {/* 3. Four-Prong Crown Setting Base */}
                <g transform="translate(160, 108)">
                    {/* Setting bridge */}
                    <path
                        d="M -22 6 Q 0 14 22 6 L 16 16 Q 0 20 -16 16 Z"
                        fill="url(#metalProngs)"
                    />

                    {/* Left & Right Prongs */}
                    <rect x="-26" y="-8" width="7" height="22" rx="3.5" fill="url(#metalProngs)" />
                    <rect x="19" y="-8" width="7" height="22" rx="3.5" fill="url(#metalProngs)" />

                    {/* Center Front & Back Prongs */}
                    <rect x="-10" y="-3" width="6" height="22" rx="3" fill="url(#metalProngs)" />
                    <rect x="4" y="-3" width="6" height="22" rx="3" fill="url(#metalProngs)" />
                </g>

                {/* 4. The Solitaire Brilliant-Cut Diamond */}
                <g transform={`translate(160, 92) scale(${scaleFactor})`}>
                    {/* Diamond Silhouette / Table / Crown */}
                    {/* Crown Upper Trapezius */}
                    <polygon
                        points="-28,-8 28,-8 18,-24 -18,-24"
                        fill="url(#gemFacet1)"
                    />

                    {/* Table (Flat Top) */}
                    <polygon
                        points="-18,-24 18,-24 0,-34"
                        fill="#FFFFFF"
                    />

                    {/* Left Crown Facet */}
                    <polygon
                        points="-28,-8 -18,-24 -36,-10"
                        fill="url(#gemFacet2)"
                    />

                    {/* Right Crown Facet */}
                    <polygon
                        points="28,-8 18,-24 36,-10"
                        fill="url(#gemFacet2)"
                    />

                    {/* Lower Pavilion (V-Shape Base) */}
                    <polygon
                        points="-28,-8 28,-8 0,26"
                        fill="url(#gemFacetDark)"
                    />

                    {/* Center Pavilion Brilliant Facets */}
                    <polygon
                        points="-14,-8 0,-8 0,26"
                        fill="#A1CEF0"
                    />
                    <polygon
                        points="0,-8 14,-8 0,26"
                        fill="#C9E6FD"
                    />
                    <polygon
                        points="-28,-8 -14,-8 0,26"
                        fill="#7DBCEB"
                    />
                    <polygon
                        points="14,-8 28,-8 0,26"
                        fill="#E1F2FE"
                    />

                    {/* Prismatic Sparkle Facet Lines */}
                    <line x1="-18" y1="-24" x2="0" y2="26" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
                    <line x1="18" y1="-24" x2="0" y2="26" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" />
                    <line x1="0" y1="-34" x2="0" y2="26" stroke="#FFFFFF" strokeWidth="1" opacity="0.9" />
                    <line x1="-28" y1="-8" x2="28" y2="-8" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />

                    {/* Diamond Light Flares / Glint */}
                    <circle cx="-12" cy="-20" r="3" fill="#FFFFFF" filter="url(#softGlow)" />
                    <circle cx="16" cy="-12" r="2.2" fill="#FFFFFF" filter="url(#softGlow)" />
                    <path
                        d="M -12 -28 L -12 -12 M -20 -20 L -4 -20"
                        stroke="#FFFFFF"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                    />
                </g>

                {/* 5. Prongs Tips clasping the Diamond Girdle */}
                <g transform={`translate(160, 92) scale(${scaleFactor})`}>
                    <circle cx="-27" cy="-8" r="4.2" fill="url(#metalProngs)" stroke="#FFFFFF" strokeWidth="0.8" />
                    <circle cx="27" cy="-8" r="4.2" fill="url(#metalProngs)" stroke="#FFFFFF" strokeWidth="0.8" />
                    <circle cx="-14" cy="-6" r="3.6" fill="url(#metalProngs)" stroke="#FFFFFF" strokeWidth="0.6" />
                    <circle cx="14" cy="-6" r="3.6" fill="url(#metalProngs)" stroke="#FFFFFF" strokeWidth="0.6" />
                </g>
            </svg>
        </div>
    );
}
