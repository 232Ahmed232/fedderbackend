import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Outlet, Router } from 'react-router-dom'
import { AuthContext } from './store/Store';
import Header from './components/Header/Header';
import axios from "axios"


function Feeder() {
    const {isLoogedin} = useContext(AuthContext)
    axios.defaults.withCredentials = true

    return (<>
        {(isLoogedin) ? <Header /> : ""}
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
        />
        <Outlet />
    </>)
}

export default Feeder
