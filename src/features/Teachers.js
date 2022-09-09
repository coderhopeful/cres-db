import { createSlice } from "@reduxjs/toolkit";
import { teacherData } from "../teacherData";

export const teacherSlice = createSlice({

    name: "teacher",
    initialState: { value: teacherData },
    reducers: {
        addTeacher: (state, action) => {
            state.value.push(action.payload);


        },
        deleteTeacher: (state, action) => {
            state.value = state.value.filter((teacher) => teacher.id !== action.payload.id);
        },
        updateTeacher: (state, action) => {
            state.value.map((teacher) => {
                if (teacher.id === action.payload.id) {
                    teacher.name = action.payload.name;
                }
            });
        },
        searchTeacher: (state, action) => {

            state.value = state.value.filter((teacher) => teacher.name.toLowerCase().includes((action.payload.name)));


        }
    },
});

export const { addTeacher, deleteTeacher, updateTeacher, searchTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;