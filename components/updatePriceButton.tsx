import { useCallback } from 'react';
import { Button } from 'react-native';
import newPriceObserver from '../observables/newPriceObserver';

const UpdatePriceButton = () => {
  const handlePress = useCallback(() => {
    newPriceObserver.notify({ amount: 80 });
  }, []);

  console.log('rerender UpdatePriceButton');

  return <Button title="Update price" onPress={handlePress} />;
};

export default UpdatePriceButton;
