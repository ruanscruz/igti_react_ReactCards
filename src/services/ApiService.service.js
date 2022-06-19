import axios from 'axios';

class ApiService {
  constructor() {
    this.cardsUrl = 'http://localhost:3001/flashcards';
  }

  async getCards() {
    const cards = await this.axiosGet(this.cardsUrl);
    return cards;
  }

  async axiosGet(url) {
    const { data } = await axios.get(url);
    return data;
  }
}

export default new ApiService();
