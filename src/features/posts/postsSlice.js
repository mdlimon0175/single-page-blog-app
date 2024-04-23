/*
// Title: postsSlice
// Description: postsSLice to handle editMode and delete modal
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editMode: false,
  dataToEdit: null,
  dataToDelete: null,
  showDeleteModal: false
}

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    activatedEditMode: (state, action) => {
      state.editMode = true;
      state.dataToEdit = action.payload;
    },
    deactivatedEditMode: state => {
      state.editMode = false;
      state.dataToEdit = {};
    },
    addDataToDelete: (state, action) => {
      state.editMode = false;
      state.dataToEdit = {};
      state.dataToDelete = action.payload;
      state.showDeleteModal = true;
    },
    removeDataToDelete: state => {
      state.dataToDelete = null;
      state.showDeleteModal = false
    }
  }
});

export const { activatedEditMode, deactivatedEditMode, addDataToDelete, removeDataToDelete } = postSlice.actions;
export default postSlice.reducer;