import React from 'react'
import { IndividualData } from './IndividualData'

export const Data = ({ excelData }) => {
    if (!excelData) {
      return <tr><td colSpan="5">No data available</td></tr>;
    }
  
    return excelData.map((individualExcelData) => (
      <tr key={individualExcelData.id}>
        <IndividualData individualExcelData={individualExcelData} />
      </tr>
    ));
  };
  