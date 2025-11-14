// Very rough placeholder pricing logic.
// We can refine this to match your actual model later.

const LEVEL_MULTIPLIERS = {
  light: 1,
  medium: 1.5,
  full: 2,
};

export function calculateQuote({ rooms, refurbLevel }) {
  const levelMultiplier = LEVEL_MULTIPLIERS[refurbLevel] ?? 1;
  const basePerRoom = 1500; // £1,500 per room baseline (placeholder)

  const subtotal = rooms * basePerRoom * levelMultiplier;
  const vatRate = 0.2;
  const vat = Math.round(subtotal * vatRate);
  const total = subtotal + vat;

  return {
    rooms,
    refurbLevel,
    lineItems: [
      {
        label: `${rooms} room(s) refurbishment - ${refurbLevel}`,
        quantity: rooms,
        unitPrice: basePerRoom * levelMultiplier,
        total: subtotal,
      },
      {
        label: 'VAT (20%)',
        quantity: 1,
        unitPrice: vat,
        total: vat,
      },
    ],
    subtotal,
    vat,
    total,
  };
}
