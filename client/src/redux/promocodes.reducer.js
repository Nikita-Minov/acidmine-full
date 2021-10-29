import {promoAPI} from '../api/promo.api.js'

const SET_PROMOCODES = 'SET_PROMOCODES';
const SET_PROMOCODE = 'SET_PROMOCODE';

const initialState = {
  promocodes: [],
  promocode: {
    promocode: '',
    percent: 0
  }
};

const promoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROMOCODES: {
      return {
        ...state,
        promocodes: action.promocodes
      }
    }
    case SET_PROMOCODE: {
      return {
        ...state,
        promocode: action.promocode
      }
    }
    default: {
      return state;
    }
  }
};

export const setPromocodes = (promocodes) => {
  return {
    type: SET_PROMOCODES,
    promocodes,
  };
};

export const setPromocode = (promocode) => {
  return {
    type: SET_PROMOCODE,
    promocode,
  };
};

export const createPromo = (promocode, percent) => async (dispatch) => {
  await promoAPI.createPromoCode(promocode, percent);
  dispatch(getPromocodes());
}


export const getPromocodes = () => async (dispatch) => {
  await promoAPI.getPromocodes().then((data) => {
    dispatch(setPromocodes(data))
  })
}

export const deletePromocode = (promocode) => async(dispatch) => {
  await promoAPI.deletePromocode(promocode).then((data) => {
    dispatch(getPromocodes());
  })
}

export const findPromocode = (promocode) => async(dispatch) => {
  let promo = await promoAPI.findPromocode(promocode);
  dispatch(setPromocode(promo))
}

export default promoReducer;