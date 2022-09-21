import { Price } from '../components/prices';
import BaseObserver from './BaseObserver';

class NewPriceObserver extends BaseObserver<Price> {}

const newPriceObserver = new NewPriceObserver();

export default newPriceObserver;
