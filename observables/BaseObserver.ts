import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export type ObserverCallback<T> = (options: T) => void;

export type RemoveListenerCallback = () => void;

type Observable<T> = {
  id: string;
  observable: (options: T) => void;
};

class BaseObserver<T> {
  protected observables: Observable<T>[];

  constructor() {
    this.observables = [];
  }

  addListener(callback: ObserverCallback<T>): RemoveListenerCallback {
    const observerId = uuidv4();

    this.observables.push({ id: observerId, observable: callback });

    return () => this.removeListener(observerId);
  }

  removeListener(observerId: string) {
    this.observables = this.observables.filter(
      (observable) => observable.id !== observerId
    );
  }

  removeAllListeners() {
    this.observables = [];
  }

  notify(options: T) {
    this.observables.forEach((observableItem) => {
      observableItem.observable(options);
    });
  }
}

export default BaseObserver;
