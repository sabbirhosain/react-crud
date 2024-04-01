import axios from 'axios'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { useContextProvider } from '../../Context/ContextApi'

const AddModal = () => {
  const { allUserFetch } = useContextProvider()
  const [name, setName] = useState("")
  const [fatherName, setFatherName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const resetFields = () => { setName(""), setFatherName(""), setEmail(""), setPhone("") };

  const CloseRef = useRef()
  const userHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/create", { name: name, fathername: fatherName, email: email, phone: phone });

      if (response && response.data) {
        toast.success("Stockin Added Successfully!")
        resetFields();
        CloseRef.current.click()
        allUserFetch()
      }
    } catch (error) {
      console.error(error);
    }
  }





  return (
    <>
      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Add User</button> */}

      <div className="modal fade" id="addUserModal" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Add User</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={CloseRef}>&times;</button>
            </div>
            <form onSubmit={userHandleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Father Name</label>
                  <input type="text" className="form-control" value={fatherName} onChange={(event) => setFatherName(event.target.value)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="number" className="form-control" value={phone} onChange={(event) => setPhone(event.target.value)} required />
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default AddModal