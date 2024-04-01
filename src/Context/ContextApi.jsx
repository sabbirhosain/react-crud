import axios from "axios";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ContextProvider = createContext();
const ContextApi = ({ children }) => {
  // get all user data
  const [data, setDate] = useState("")
  useEffect(() => { allUserFetch(); }, [])
  const allUserFetch = async (page) => {
    try {
      const response = await axios.get("http://localhost:8000/api/get");
      setDate(response.data.users);
    } catch (error) {
      console.error(error);
    }
  }

  // update user data
  const [updateData, setUpdateData] = useState({ id: "", name: "", fathername: "", email: "", phone: "" });

  const userInputChange = (e) => {
    const { name, value } = e.target
    setUpdateData({ ...updateData, [name]: value });
  }
  const getUserData = async (id) => {
    try {
      const response = await axios.get(`${"http://localhost:8000/api/get/"}${id}`)
      setUpdateData(response.data.user)
    } catch (error) {
      console.error(error);
    }
  }

  const CloseRef = useRef()
  const UpdateUserFrom = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${"http://localhost:8000/api/update/"}${updateData._id}`, updateData);
      if (response && response.data) {
        toast.success("Updated Successfully!")
        CloseRef.current.click()
        allUserFetch()
      }
    } catch (error) {
      console.error(error);
    }

  }

  // Delete user data
  const deleteData = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your Data will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete Data!',
      cancelButtonText: 'Keep Data!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${"http://localhost:8000/api/delete/"}${id}`);
          Swal.fire('Deleted!', 'Data will be deleted permanently!', 'success');
          allUserFetch();
        } catch (error) {
          console.log(error);
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });
  };












  return (
    <ContextProvider.Provider value={{ data, updateData, userInputChange, getUserData, UpdateUserFrom, CloseRef, allUserFetch, deleteData }}>
      {children}
    </ContextProvider.Provider>
  )
}

export default ContextApi
// coustome
export const useContextProvider = () => {
  return useContext(ContextProvider)
};