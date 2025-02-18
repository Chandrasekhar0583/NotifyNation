// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import axios from 'axios'

// export function attempts_Number(result){
//     return result.filter(r => r !== undefined).length;
// }

// export function earnPoints_Number(result, answers, point){
//     return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
// }

// export function flagResult(totalPoints, earnPoints){
//     return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
// }

// /** check user auth  */
// export function CheckUserExist({ children }){
//     const auth = useSelector(state => state.result.userId)
//     return auth ? children : <Navigate to={'/Examconduct/ArmyExam'} replace={true}></Navigate>
// }

// /** get server data */
// export async function getServerData(url, callback){
//     const data = await (await axios.get(url))?.data;
//     return callback ? callback(data) : data;
// }


// /** post server data */
// export async function postServerData(url, result, callback){
//     const data = await (await axios.post(url, result))?.data;
//     return callback ? callback(data) : data;
// }

// railwaydata.js

const railwayData = [
    {
        id: 1,
        free: "Free",
        name: "RRB NTPC Exam",
        shift: "Morning",
        date: "2024-11-10",
        questions: "100",
        time: "90 minutes",
        marks: "100",
        take: "Take Exam"
    },
    {
        id: 2,
        free: "Free",
        name: "RRB Group D Exam",
        shift: "Evening",
        date: "2024-11-15",
        questions: "120",
        time: "2 hours",
        marks: "120",
        take: "Take Exam"
    },
    {
        id: 3,
        free: "Free",
        name: "RRB ALP Exam",
        shift: "Morning",
        date: "2024-11-20",
        questions: "150",
        time: "2 hours 30 minutes",
        marks: "150",
        take: "Take Exam"
    },
    {
        id: 4,
        free: "Free",
        name: "RRB JE Exam",
        shift: "Evening",
        date: "2024-11-25",
        questions: "100",
        time: "2 hours",
        marks: "100",
        take: "Take Exam"
    },
    {
        id: 5,
        free: "Free",
        name: "RRB SSE Exam",
        shift: "Morning",
        date: "2024-12-01",
        questions: "150",
        time: "3 hours",
        marks: "150",
        take: "Take Exam"
    },
    {
        id: 6,
        free: "Free",
        name: "RRB CEN Exam",
        shift: "Evening",
        date: "2024-12-05",
        questions: "200",
        time: "2 hours 30 minutes",
        marks: "200",
        take: "Take Exam"
    },
    {
        id: 7,
        free: "Free",
        name: "RRB Ministerial Exam",
        shift: "Morning",
        date: "2024-12-10",
        questions: "120",
        time: "2 hours",
        marks: "120",
        take: "Take Exam"
    },
    {
        id: 8,
        free: "Free",
        name: "RRB Stenographer Exam",
        shift: "Evening",
        date: "2024-12-15",
        questions: "100",
        time: "90 minutes",
        marks: "100",
        take: "Take Exam"
    },
    {
        id: 9,
        free: "Free",
        name: "RRB NTPC CBT 2 Exam",
        shift: "Morning",
        date: "2025-01-05",
        questions: "150",
        time: "2 hours",
        marks: "150",
        take: "Take Exam"
    },
    {
        id: 10,
        free: "Free",
        name: "RRB Group D CBT 2 Exam",
        shift: "Evening",
        date: "2025-01-10",
        questions: "120",
        time: "2 hours",
        marks: "120",
        take: "Take Exam"
    }
];

export default railwayData;
