interface PriceMap {
  preference: {
    [k: string]: number;
  };
  beanType: {
    [k: string]: number;
  };
  grindOption: {
    [k: string]: number;
  };
  quantity: {
    [k: string]: number;
  };
  frequency: {
    [k: string]: { price: number; multiplier: number };
  };
}

interface CalculatePrice {
  preferenceValue: string;
  beanTypeValue: string;
  grindOptionValue: string | null;
  quantityValue: string;
  frequencyValue: string;
}

const priceMap = {
  preference: { Capsules: 4.99, Filter: 2.99, Espresso: 3.99 },
  beanType: { "Single Origin": 7.99, Decaf: 4.99, Blended: 5.99 },
  grindOption: { Wholebean: 0, Filter: 2.99, Cafetiére: 3.59 },
  quantity: { "250 g": 5.99, "500 g": 10.99, "1000 g": 17.99 },
  frequency: {
    "Every week": { price: 7.2, multiplier: 4 },
    "Every 2 weeks": { price: 9.6, multiplier: 2 },
    "Every month": { price: 12.0, multiplier: 1 },
  },
} as PriceMap;

export default function calculatePrice({
  preferenceValue,
  beanTypeValue,
  grindOptionValue,
  quantityValue,
  frequencyValue,
}: CalculatePrice) {
  const grindOption = grindOptionValue ? grindOptionValue : "Wholebean";
  const total =
    (priceMap.preference[preferenceValue] +
      priceMap.beanType[beanTypeValue] +
      priceMap.grindOption[grindOption] +
      priceMap.quantity[quantityValue] +
      priceMap.frequency[frequencyValue].price) *
    priceMap.frequency[frequencyValue].multiplier;

  return {
    total: total.toFixed(2),
    preference: priceMap.preference[preferenceValue],
    beanType: priceMap.beanType[beanTypeValue],
    grindOption: priceMap.grindOption[grindOption],
    quantity: priceMap.quantity[quantityValue],
    frequency: priceMap.frequency[frequencyValue].price,
    multiplier: priceMap.frequency[frequencyValue].multiplier,
  };
}
