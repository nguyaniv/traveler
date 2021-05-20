import { createSlice } from "@reduxjs/toolkit";

export const attractionsSlice = createSlice({
  name: "attractions",
  initialState: {
    cordinates: {
      lat: null,
      lng: null,
    },
    locations: [],
    isModal: false,
    routes: [],
  },
  reducers: {
    setCorinates: (state, { payload }) => {
      state.cordinates = {
        lat: payload.lat,
        lng: payload.lng,
      };
    },

    setLocations: (state, { payload }) => {
      state.locations = payload;
    },
    selectLocation: (state, { payload }) => {
      const location = state.locations[payload];
      location.isMarked = true;
    },
    unSelectLocation: (state, { payload }) => {
      const location = state.locations[payload];
      location.isMarked = false;
    },

    showPopup: (state, { payload }) => {
      const location = state.locations[payload];
      location.isPopup = !location.isPopup;
    },

    showModal: (state, { payload }) => {
      state.isModal = !state.isModal;
    },

    addToRoute: (state, { payload }) => {
      const { lat, lng } = payload;
      state.routes = [
        ...state.routes,
        {
          location: { lat, lng },
          stopover: true,
        },
      ];
    },
    removeFromRoute: (state, { payload }) => {
      state.routes = [
        ...state.routes.filter((route) => route.location.lat !== payload.lat),
      ];
    },
    setRoute: (state, { payload }) => {
      state.routes = [...payload];
    },
  },
});

export const setLocationsAsync = (state, action) => async (dispatch) => {
  await dispatch(setLocations(state, action));
};
export const selectLocationAsync = (state, action) => async (dispatch) => {
  await dispatch(selectLocation(state, action));
};
export const unSelectLocationAsync = (state, action) => async (dispatch) => {
  await dispatch(unSelectLocation(state, action));
};
export const addToRouteAsync = (state, action) => async (dispatch) => {
  await dispatch(addToRoute(state, action));
};

export const {
  setLocations,
  selectLocation,
  showModal,
  showPopup,
  addToRoute,
  removeFromRoute,
  setCorinates,
  unSelectLocation,
  setRoute,
} = attractionsSlice.actions;

export const selectAttractions = (state) => state.attractions.locations;
export const selectModal = (state) => state.attractions.isModal;
export const selectRoutes = (state) => state.attractions.routes;
export const selectCordinates = (state) => state.attractions.cordinates;
export default attractionsSlice.reducer;
