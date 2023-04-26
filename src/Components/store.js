import counterreducer from '../Components/Reducers/index'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer:{
        count:counterreducer
    }
})