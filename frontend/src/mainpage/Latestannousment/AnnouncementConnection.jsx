import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Announcement_main } from "./announcements";
import AdmitCardList from "./AdmitCard";
import { ExamResult } from "./ExamResult";
import { AnswerKey } from "./AnswerKey";
import CutOff  from "./CutOff";
// import cutoff from "./CutOff";
import { Forms } from "./form";
import { Key } from "./examkey";
export function Main_Connection()
{
    return(
        <div>
            <BrowserRouter>
             <Routes>
                <Route path="/" element={<Announcement_main/>}>
                <Route index element={<AdmitCardList/>}></Route>
                <Route path="/ExamResult" element={<ExamResult/>}></Route>
                <Route path="/AnswerKey" element={<AnswerKey/>}></Route>
                <Route path="/CutOff" element={<CutOff/>}></Route>
                <Route path="/AdmitCardForm" element={<Forms/>}></Route>
                <Route path="/Questions/:exam" element={<Key/>}></Route>
                {/* <Route path="/form"  */}
                </Route>
             </Routes>
             </BrowserRouter>





        </div>
    )
}