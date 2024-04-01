import React from 'react'
import DataTable from 'react-data-table-component';
import { useContextProvider } from '../../Context/ContextApi';

const DataTables = () => {
  const { data, getUserData, deleteData } = useContextProvider()
  const columns = [
    {
      name: 'ID',
      selector: row => row._id,
    },
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'FatherName',
      selector: row => row.fathername,
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: 'Phone',
      selector: row => row.phone,
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" data-bs-toggle="modal" data-bs-target="#updateUserModal" onClick={() => getUserData(row._id)}>Edit</button>
        <button onClick={() => deleteData(row._id)}>Delete</button>
      </>
    }
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
    />
  )
}

export default DataTables