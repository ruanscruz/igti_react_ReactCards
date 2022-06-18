import { v4 as uuid } from 'uuid';

class CardsService {
  constructor() {
    this.getNewId = () => uuid();
  }

  static getNewId() {
    return this.getNewId;
  }
}

export default new CardsService();
