import React, { useState, useEffect } from 'react';
import './hallticket.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function HallTicket() {
    // var registrationNumber = 7;

    const {obj} = useParams();
    const examDetails = JSON.parse(decodeURIComponent(obj));
    console.log(examDetails.RegistrationId)
    const [hallTicketDetails, setHallTicketDetails] = useState({
        examSession: "Afternoon Session (AN)",
        post: "SSC Government Exam 2024",
        candidatename: "John Doe",
      registrationnumber: "123456789",
        seatingNumber: "SEAT0012345",
        dateOfBirth: "1995-05-15",
        examDate: "2024-12-01",
        reportingTime: "01:00 PM",
        gateClosure: "02:30 PM",
        examTiming: "02:00 PM - 05:00 PM",
        testCenter: "Aditya Engineering College",
        testCenterAddress: "Surampalem,Kakinada",
        pwDStatus: "No",
        compensatoryTime: "N/A",
        scribeRequired: "N/A"
    });
    
    const [error, setError] = useState('');
    const [flag, setflag] = useState(false);
    const navigate = useNavigate();
console.log(examDetails)
    useEffect(() => {
        axios.post("http://localhost:5000/candidate",examDetails)
            .then(response => {
                const data = response.data[0];
                setHallTicketDetails({
                    examSession: "Afternoon Session (AN)",
                    post: data.post || "SSC Government Exam 2024",
                    candidatename: data.candidateName,
                    registrationnumber: data.registrationnumber ,
                    seatingNumber: "SEAT0012345",
                    dateOfBirth: data.dob,
                    examDate: "2024-12-01",
                    reportingTime: "01:00 PM",
                    gateClosure: "02:30 PM",
                    examTiming: "02:00 PM - 05:00 PM",
                    testCenter: "Aditya Engineering College",
                    testCenterAddress: "Surampalem,Kakinada",
                    pwDStatus: data.pwDStatus || "No",
                    compensatoryTime: data.compensatoryTime || "N/A",
                    scribeRequired: data.scribeRequired || "N/A"
                });
                setError('');
                setflag(true)
                console.log("backedn"+data)
                // downloadPDF();
            
            })
            .catch(error => {
                console.error('Error fetching user:', error);
                setError('Failed to fetch user data. Please try again.');
                window.alert("invalide details");
                navigate("/LatestAnnouncement/Admitcard")

            });
    }, [examDetails]);

    // Download function
    function downloadPDF(){
        const hallTicket = document.getElementById('hall-ticket');
        html2canvas(hallTicket).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${hallTicketDetails.candidatename}_HallTicket.pdf`);
        });
    };

    return (
        <>
            {flag ? (
                <div className="hall-ticket-container" id="hall-ticket">
                    <header className="hall-ticket-header">
                        <div className="session-info">{hallTicketDetails.examSession}</div>
                        <div className="exam-info">
                            <h2>{hallTicketDetails.post}</h2>
                            <p>Conducted by the Government of India</p>
                        </div>
                    </header>

                    <section className="ticket-details">
                        <h2>Hall Ticket</h2>
                        <div className="personal-info">
                            <p><strong>Candidate Name:</strong> {hallTicketDetails.candidatename}</p>
                            <p><strong>Roll No:</strong> {hallTicketDetails.registrationnumber}</p>
                            <p><strong>Seating Number:</strong> {hallTicketDetails.seatingNumber}</p>
                            <p><strong>Date of Birth:</strong> {new Date(hallTicketDetails.dateOfBirth).toLocaleDateString()}</p>
                        </div>

                        <div className="exam-info">
                            <p><strong>Exam Date:</strong> {new Date(hallTicketDetails.examDate).toLocaleDateString()}</p>
                            <p><strong>Reporting Time:</strong> {hallTicketDetails.reportingTime}</p>
                            <p><strong>Gate Closure:</strong> {hallTicketDetails.gateClosure}</p>
                            <p><strong>Exam Timing:</strong> {hallTicketDetails.examTiming}</p>
                        </div>

                        <div className="center-info">
                            <p><strong>Test Centre:</strong> {hallTicketDetails.testCenter}</p>
                            <p><strong>Address:</strong> {hallTicketDetails.testCenterAddress}</p>
                        </div>
                    </section>

                    <section className="important-info">
                        <h3>Important Information for Candidates</h3>
                        <ul>
                            <li>Please bring this hall ticket along with valid photo identification.</li>
                            <li>Arrive at least 30 minutes before the reporting time.</li>
                            <li>No electronic devices allowed inside the exam hall.</li>
                            <li>Follow all instructions provided by the exam invigilators.</li>
                        </ul>
                    </section>
                </div>
            ) : null}
            
            {flag && (
         <center> <Link to='/LatestAnnouncement/Admitcard'   > <button onClick={downloadPDF} className="download-button">Download as PDF</button></Link></center>  
            )}
        </>
    );
}


export default HallTicket;
// maya are you there 