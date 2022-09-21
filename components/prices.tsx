import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import newPriceObserver from '../observables/newPriceObserver';

export interface Price {
  amount: number;
}

export const Price = () => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const subscription = newPriceObserver.addListener(({ amount }) => {
      setPrice(amount);
    });

    return () => {
      // remove the listener when componen unmounts
      subscription();
    };
  }, []);

  console.log('rerender price');

  return (
    <View>
      <Text style={{ fontSize: 20, marginVertical: 16 }}>
        Current price {price}
      </Text>
    </View>
  );
};
