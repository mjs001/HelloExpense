import { isEditing } from "../app/utilitiesSlice";

export const setEditing = async (dispatch, editing) => {
  try {
    dispatch(isEditing({ isEditing: editing }));
  } catch (err) {
    console.log("Error with setting 'isEditing' state", err.response);
  }
};
