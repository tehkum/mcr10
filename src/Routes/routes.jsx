import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import Archieve from "../pages/Archieve";

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/archieve" element={<Archieve />}/>
    </Routes>
}