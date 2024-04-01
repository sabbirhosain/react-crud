import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import "./App.css"
import AddModal from "./Components/Modal/AddModal.jsx"
import DataTables from "./Components/Table/DataTable.jsx"
import UpdateModal from "./Components/Modal/UpdateModal.jsx";

function App() {
  return (
    <div className="container">
      <div className="table_header">
        <h4>All User List</h4>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUserModal"> Add User</button>
      </div>






      <ToastContainer autoClose={1000} />
      <AddModal />
      <UpdateModal />
      <DataTables />
    </div>
  )
}

export default App