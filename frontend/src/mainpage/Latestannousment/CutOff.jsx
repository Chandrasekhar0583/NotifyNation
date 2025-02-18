import React,{useState} from 'react';
import './cutoff.css'; 


import cutoffData from './cutoff_data'; 
const CutoffTable = () => {
  const [searched, setSearched] = useState(""); 

  const searchedData = (e) => {
    const { value } = e.target;
    setSearched(value);
  };

  const searchdt = searched.toLowerCase();
  const filterdata = cutoffData.filter((data) => {
    const nameinclude = data.id.toLowerCase().includes(searchdt);
   
    return nameinclude ;
  });
  const final_data = searched ? filterdata : cutoffData;
  return (
 <div className="cutoffparents">
    <div className='search1'>
        <div><h3>cutoff</h3></div>
        <div>
          <input type='search' name="search" onClick={(e)=>{searchedData(e)}} placeholder='Search exams' />
        </div>
      </div>
    <div className="table-container">
        
      {final_data.map((data, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h2>{data.id}</h2>
           
          <table>
            <thead className="table-header">
               
              <tr>
                <th>Category</th>
                <th>Cutoff Marks</th>
                <th>Candidates Available</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="table-cell">{data.categorySC}</td>
                <td className="table-cell">{data.cutoffMarksSC}</td>
                <td className="table-cell">{data.candidatesAvailableSC}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">{data.categoryST}</td>
                <td className="table-cell">{data.cutoffMarksST}</td>
                <td className="table-cell">{data.candidatesAvailableST}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">{data.categoryOBC}</td>
                <td className="table-cell">{data.cutoffMarksOBC}</td>
                <td className="table-cell">{data.candidatesAvailableOBC}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">{data.categoryEWS}</td>
                <td className="table-cell">{data.cutoffMarksEWS}</td>
                <td className="table-cell">{data.candidatesAvailableEWS}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">{data.categoryUR}</td>
                <td className="table-cell">{data.cutoffMarksUR}</td>
                <td className="table-cell">{data.candidatesAvailableUR}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">{data.categoryOH}</td>
                <td className="table-cell">{data.cutoffMarksOH}</td>
                <td className="table-cell">{data.candidatesAvailableOH}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">{data.categoryHH}</td>
                <td className="table-cell">{data.cutoffMarksHH}</td>
                <td className="table-cell">{data.candidatesAvailableHH}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">{data.categoryVH}</td>
                <td className="table-cell">{data.cutoffMarksVH}</td>
                <td className="table-cell">{data.candidatesAvailableVH}</td>
              </tr>
              {/* Uncomment if categoryOthersPWD exists in your data */}
              {/* <tr className="table-row">
                <td className="table-cell">{data.categoryOthersPWD}</td>
                <td className="table-cell">{data.cutoffMarksOthersPWD}</td>
                <td className="table-cell">{data.candidatesAvailableOthersPWD}</td>
              </tr> */}
            </tbody>
          </table>
         
        </div>
      ))}
    </div>
    </div>
  );
};

export default CutoffTable;
