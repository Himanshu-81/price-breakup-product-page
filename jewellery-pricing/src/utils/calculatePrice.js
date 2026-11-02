export const calculatePrice = ({
    purity,
    size,
    diamondWeight,
    goldRate,
    product,
}) => {
    // Get purity percentage
    const purityPercentage = product.metalPurity[purity];

    // Get gold weight according to selected ring size
    const goldWeight = product.ringSizes[size];

    // Calculate equivalent gold rate
    const goldRatePerGram = goldRate * purityPercentage;

    // Calculate gold price
    const goldPrice = goldWeight * goldRatePerGram;

    // Calculate diamond price
    const diamondPrice =
        diamondWeight * product.diamondRate;

    // Calculate making charges
    const makingCharges =
        goldWeight * product.makingCharges;

    // Calculate wastage
    const wastage =
        (goldPrice * product.wastagePercentage) / 100;

    // Subtotal
    const subtotal =
        goldPrice +
        diamondPrice +
        makingCharges +
        wastage;

    // GST (illustrative only)
    const gst =
        (subtotal * product.gstPercentage) / 100;

    // Final amount
    const total = subtotal + gst;

    return {
        goldWeight,
        goldRatePerGram,
        goldPrice,
        diamondPrice,
        makingCharges,
        wastage,
        subtotal,
        gst,
        total,
    };
};