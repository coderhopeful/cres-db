import { createSlice } from "@reduxjs/toolkit";
import { studentData } from "../studentData";

export const studentSlice = createSlice({

    name: "student",
    initialState: { value: studentData },
    reducers: {
        addStudent: (state, action) => {
            state.value.push(action.payload);


        },
        deleteStudent: (state, action) => {
            state.value = state.value.filter((student) => student.id !== action.payload.id);
        },
        updateStudent: (state, action) => {
            state.value.map((student) => {
                if (student.id === action.payload.id) {
                    student.name = action.payload.name;
                }
            });
        },
        searchStudent: (state, action) => {

            state.value = state.value.filter((student) => student.name.toLowerCase().includes((action.payload.name)));


        }
    },
});

export const { addStudent, deleteStudent, updateStudent, searchStudent } = studentSlice.actions;
export default studentSlice.reducer;