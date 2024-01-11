import React from 'react'

export const IndividualData = ({ individualExcelData }) => {
    return (
      <>
        <td>{individualExcelData.Package}</td>
        <td>{individualExcelData.TagNo}</td>
        <td>{individualExcelData.EquipmentNo}</td>
        <td>{individualExcelData.Model}</td>
        <td>{individualExcelData.Price}</td>
      </>
    );
  };
  