import React from 'react'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent, deleteStudent, updateStudent, searchStudent } from "../features/Students";
import { addTeacher, deleteTeacher, updateTeacher, searchTeacher } from "../features/Teachers";
import "./homepage.css"

const Homepage = () => {

    const dispatch = useDispatch();
    const studentList = useSelector((state) => state.student.value);
    const teacherList = useSelector((state) => state.teacher.value);

    const [name, setName] = useState("");

    const [newstudentname, setNewStudentname] = useState("");
    const [searchText, setSearchText] = useState("")

    const [teacherName, setTeacherName] = useState("");

    const [newTeacherName, setNewTeacherName] = useState("");
    const [searchTeacherText, setSearchTeacherText] = useState("")





    return (
        <>
            <h1 className='text-center mb-3'>School Database</h1>
            <div className="home mt-3 mb-2">

                <div className='students'>
                    <h3>Students</h3>
                    <div className="addUser">
                        <input
                            type="text"
                            placeholder="Name of Student"
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />

                        <button className='btn btn-success btn-sm ms-1 mb-1'
                            onClick={() => {
                                dispatch(
                                    addStudent({
                                        id: studentList[studentList.length - 1].id + 1,
                                        name

                                    })
                                );
                            }}
                        >

                            Add Student
                        </button>
                        <div className='search-box mt-2'>
                            <input
                                type="text"
                                placeholder="Search by name.."
                                onChange={(event) => {
                                    setSearchText((event.target.value).toLowerCase());
                                    

                                }}

                            />
                            <button className='btn btn-outline-primary btn-sm ms-1 mb-1'
                                onClick={() => {
                                    dispatch(
                                        searchStudent({ name: searchText })
                                    );
                                }}
                            ><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div className="displayStudents">
                        {studentList.map((student) => {
                            return (
                                <div>
                                    <span> {student.name}</span>

                                    <input
                                        type="text"
                                        placeholder="Update student name..."
                                        onChange={(event) => {
                                            setNewStudentname(event.target.value);
                                        }}
                                    />
                                    <button className='btn btn-warning btn-sm ms-1 mb-1'
                                        onClick={() => {
                                            dispatch(
                                                updateStudent({ id: student.id, name: newstudentname })
                                            );
                                        }}
                                    >
                                        <i class="far fa-edit"></i>
                                    </button>
                                    <button className='btn btn-danger btn-sm ms-1 mb-1'
                                        onClick={() => {
                                            dispatch(deleteStudent({ id: student.id }));
                                        }}
                                    >
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='teachers'>
                <h3>Teachers</h3>
                    <div className="addUser">
                        <input
                            type="text"
                            placeholder="Name of Teacher"
                            onChange={(event) => {
                                setTeacherName(event.target.value);
                            }}
                        />

                        <button className='btn btn-success btn-sm ms-1 mb-1'
                            onClick={() => {
                                dispatch(
                                    addTeacher({
                                        id: teacherList[teacherList.length - 1].id + 1,
                                        name: teacherName

                                    })
                                );
                            }}
                        >

                            Add Teacher
                        </button>
                        <div className='search-box mt-2'>
                            <input
                                type="text"
                                placeholder="Search by name.."
                                onChange={(event) => {
                                    setSearchTeacherText((event.target.value).toLowerCase());


                                }}

                            />
                            <button className='btn btn-outline-primary btn-sm ms-1 mb-1'
                                onClick={() => {
                                    dispatch(
                                        searchTeacher({ name: searchTeacherText })
                                    );
                                }}
                            ><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div className="displayTeachers">
                        {teacherList.map((teacher) => {
                            return (
                                <div>
                                    <span> {teacher.name}</span>

                                    <input
                                        type="text"
                                        placeholder="Update teacher name..."
                                        onChange={(event) => {
                                            setNewTeacherName(event.target.value);
                                        }}
                                    />
                                    <button className='btn btn-warning btn-sm ms-1 mb-1'
                                        onClick={() => {
                                            dispatch(
                                                updateTeacher({ id: teacher.id, name: newTeacherName })
                                            );
                                        }}
                                    >
                                        <i class="far fa-edit"></i>
                                    </button>
                                    <button className='btn btn-danger btn-sm ms-1 mb-1'
                                        onClick={() => {
                                            dispatch(deleteTeacher({ id: teacher.id }));
                                        }}
                                    >
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Homepage