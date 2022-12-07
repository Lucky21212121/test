import {INPUT_CHANGE,DELETE_ITEM,ADD_ITEM} from './actionTypes'
export const getInputChange = (value)=>({
    type:INPUT_CHANGE,
    value
})
export const getAddItem = ()=>({
     type:ADD_ITEM
})

export const getDeleteItem = (index)=>({
    type:DELETE_ITEM,
    index
})