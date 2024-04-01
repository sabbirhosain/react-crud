import { useContextProvider } from "../../Context/ContextApi"

const UpdateModal = () => {
  const { updateData, userInputChange, UpdateUserFrom, CloseRef } = useContextProvider()

  return (
    <div className="modal fade" id="updateUserModal" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Update User</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={CloseRef}>&times;</button>
          </div>
          <form onSubmit={UpdateUserFrom}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="name" value={updateData.name} onChange={userInputChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Father Name</label>
                <input type="text" className="form-control" name="fathername" value={updateData.fathername} onChange={userInputChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={updateData.email} onChange={userInputChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="number" className="form-control" name="phone" value={updateData.phone} onChange={userInputChange} required />
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
  )
}

export default UpdateModal