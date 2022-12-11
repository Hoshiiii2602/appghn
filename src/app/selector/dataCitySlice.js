import { createSlice } from '@reduxjs/toolkit'


export const DataCitySlice = createSlice({
    name: 'city',
    initialState: {
        initValue: {
            citi: '',
            districts: '',
            wards: '',
            all: [],
        }
    },
    reducers: {
        dataCity: (state, action) => {
            state.initValue.citi = action.payload
        },
        dataDistricts: (state, action) => {
            state.initValue.districts = action.payload
        },
        dataWards: (state, action) => {
            state.initValue.wards = action.payload
        },
        dataAll: (state, action) => {
            state.initValue.all = action.payload
        },
        subport: (state, action) => {
            console.log(action.payload);
        },
    }
})


export const { dataCity
    , dataDistricts
    , dataWards
    , dataAll
    , subport } = DataCitySlice.actions
export const location = (state) => state.city.initValue.all
export default DataCitySlice.reducer