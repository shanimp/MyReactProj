import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    formData: {
        name: "",
        email: "",
        message: "",
    },
    editIndex: null,
    status: "idle",
    error: null,
};

export const ContactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        //update individual form fields dynamically based on input
        updateField: (state, action) => {
            const { name, value } = action.payload;
            state.formData[name] = value;
        },
        //Resets the form back to empty inital state
        resetForm: (state) => {
            state.formData = initialState.formData;
            state.status = "idle";
            state.error = null;
        },
        saveContact: (state) => {
            if(state.editIndex !== null){
                //update existing contact
                state.items[state.editIndex] = state.formData;
                state.editIndex = null; //Reset edit mode after saving
            }else {
                state.items.push({...state.formData});
            }
            //Reset form data and status after successful save
            state.formData = initialState.formData;
            state.status = "succeeded";
        },
        setEditIndex: (state, action) => {
            const index = action.payload;
            state.editIndex = index;
            state.formData = state.items[index]; //Load existing data 
        },
        //Delete a contact by index
        deleteContact: (state,action) => {
            const index = action.payload;
            state.items.splice(index, 1);

            //If the item being edited is deleted, reset the form
            if(state.editIndex === index) {
                state.editIndex = null;
                state.formData = initialState.formData;
            }
        },
        //simulates form submission start
        submitFormStart: (state) => {
            state.status = "Loading";
            state.error = null;
        },
        submitFormSuccess: (state) => {
            state.status = "succeeded";
            state.formData = initialState.formData;
        },
        submitFormFailure: (state, action) => {
            state.status = "Failed";
            state.error = action.payload;
        },
    },
});

export const {
    updateField,
    resetForm,
    saveContact,
    setEditIndex,
    deleteContact,
    submitFormStart,
    submitFormSuccess,
    submitFormFailure,
} = ContactSlice.actions;

export default ContactSlice.reducer;