// import { postServerData } from '../helper/helper'
// import * as Action from '../redux/result_reducer'

// export const PushAnswer = (result) => async (dispatch) => {
//     try {
//         await dispatch(Action.pushResultAction(result))
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const updateResult = (index) => async (dispatch) => {
//     try {
//         dispatch(Action.updateResultAction(index));
//     } catch (error) {
//         console.log(error)
//     }
// }

// /** insert user data */
// export const usePublishResult = (resultData) => {
//     const { result, username } = resultData;
//     (async () => {
//         try {
//             if(result != [] && !username) throw new Error("Couldn't get Result");
//             await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data)
//         } catch (error) {
//             console.log(error)
//         }
//     })();
// }


// airforceData.js

const airforceData = [
    {
        id: 1,
        free: "Free",
        name: "IAF Airmen Group X Exam",
        shift: "Morning",
        date: "2024-12-01",
        questions: "100",
        time: "1 hour",
        marks: "100",
        take: "Take Exam"
    },
    {
        id: 2,
        free: "Free",
        name: "IAF Airmen Group Y Exam",
        shift: "Evening",
        date: "2024-12-05",
        questions: "100",
        time: "1 hour",
        marks: "100",
        take: "Take Exam"
    },
    {
        id: 3,
        free: "Free",
        name: "IAF Airmen Group X & Y Exam",
        shift: "Morning",
        date: "2024-12-10",
        questions: "150",
        time: "2 hours",
        marks: "150",
        take: "Take Exam"
    },
    {
        id: 4,
        free: "Free",
        name: "IAF AFCAT Exam",
        shift: "Evening",
        date: "2024-12-15",
        questions: "150",
        time: "2 hours",
        marks: "300",
        take: "Take Exam"
    },
    {
        id: 5,
        free: "Free",
        name: "IAF Ground Duty Exam",
        shift: "Morning",
        date: "2024-12-20",
        questions: "200",
        time: "2 hours 30 minutes",
        marks: "300",
        take: "Take Exam"
    },
    {
        id: 6,
        free: "Free",
        name: "IAF Meteorology Exam",
        shift: "Evening",
        date: "2025-01-05",
        questions: "150",
        time: "2 hours",
        marks: "150",
        take: "Take Exam"
    },
    {
        id: 7,
        free: "Free",
        name: "IAF NCC Special Entry Exam",
        shift: "Morning",
        date: "2025-01-10",
        questions: "100",
        time: "1 hour 30 minutes",
        marks: "100",
        take: "Take Exam"
    },
    {
        id: 8,
        free: "Free",
        name: "IAF Flying Branch Exam",
        shift: "Evening",
        date: "2025-01-15",
        questions: "200",
        time: "2 hours",
        marks: "200",
        take: "Take Exam"
    },
    {
        id: 9,
        free: "Free",
        name: "IAF Technical Branch Exam",
        shift: "Morning",
        date: "2025-01-20",
        questions: "150",
        time: "2 hours",
        marks: "150",
        take: "Take Exam"
    },
    {
        id: 10,
        free: "Free",
        name: "IAF Sports Entry Exam",
        shift: "Evening",
        date: "2025-01-25",
        questions: "100",
        time: "1 hour",
        marks: "100",
        take: "Take Exam"
    }
];

export default airforceData;
