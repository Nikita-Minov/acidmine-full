import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
  withCredentials: true
});

export const promoAPI = {
  createPromoCode(promocode, percent) {
    return instance
      .post('/create-promo', { promocode: promocode, percent: percent })
      .then((res) => {
        return res.data;
      });
  },
  getPromocodes() {
    return instance
      .get('/get-all-promo')
      .then((res) => {
        return res.data;
      });
  },
  deletePromocode(promocode) {
    return instance
      .post('/delete-promo', {promocode: promocode})
      .then((res) => {
        return res.data;
      });
  },
  findPromocode(promocode) {
    return instance
      .post('/find-promo', {promocode: promocode})
      .then((res) => {
        return res.data;
      });
  },

};