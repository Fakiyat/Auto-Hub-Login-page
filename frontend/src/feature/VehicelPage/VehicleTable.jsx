import React, { useState } from "react";
import "./Style/VehicleTable.css";
import DropDown from "@/shared/components/dropDown";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Switch } from "@mui/material";

//Vehicle table filterings
const VehicleTable = ({ activeTab, vehicles, setVehicles }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Search filterings
  const [selectedRows, setSelectedRows] = useState([]); // it helps to track the selected rows, it stores the ids of the vehicles that are selected
  const [selectAll, setSelectAll] = useState(false); //it helps to track "Select All" checkboxes
  const [showAddForm, setShowAddForm] = useState(false); // this is for the form when we click to add vehicle, its is set to be false so it will now be showing form all the time
  const [editingVehicle, setEditingVehicle] = useState(null); //To track Editing

  const [newVehicle, setNewVehicle] = useState({
    name: "",
    model: "",
    price: "",
    status: "In Stock",
    img: "",
    imgFile: null, // new field for uploaded file
  }); // this is a Add vehicle form where we add the fields
  //--------------------------------------------//----------------------------------------------------------------------------//------------------------------git
  //Handle the Select All checkbox
  function handleSelectAll() {
    if (selectAll) {
      //uncheck all rows
      setSelectedRows([]);
    } else {
      //select all rows add all vehicles IDs to selectedRows
      const allVehicleIds = filteredVehicles.map((vehicle) => vehicle.id);
      setSelectedRows(allVehicleIds);
    }
    setSelectAll(!selectAll); // toggle the select all state(true to false, false to true).
  }
  //------------------------------------------------------///---------------------------------------------//
  // Handle Individual checkbox clickss
  const handleRowSelect = (id) => {
    setSelectedRows((prevSelectedRows) => {
      let updatedRows;
      //.includes(id) checks if the vehicle’s id is already in the selectedRows array.
      if (prevSelectedRows.includes(id)) {
        //unselect (remove from array)
        updatedRows = prevSelectedRows.filter((rowid) => rowid !== id);
      } else {
        // select (add to array)
        updatedRows = [...prevSelectedRows, id]; //[...prevSelectedRows, id] creates a new array with all previously selected rows + the new id.
      }
      if (updatedRows.length === filteredVehicles.length) {
        setSelectAll(true);
      } else {
        setSelectAll(false);
      }
      return updatedRows;
    });
  };
  //------------------------------------------------------------------//---------------------------------------------------//-------------------------------
  // handle Form input change
  function handleFormChange(event) {
    const { name, value } = event.target;
    setNewVehicle({ ...newVehicle, [name]: value }); // setNewVehicle() updates the newVehicle state.//Updates the corresponding field (name, model, price, etc.) in newVehicle.
  }
  //--------------------------------------//-------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------
  //Adding neew Vehicle to the List// And Editing popup
  const handleSaveVehicle = () => {
    if (editingVehicle) {
      // Update existing vehicle (edit case)
      setVehicles(
        vehicles.map((vehicel) =>
          vehicel.id === editingVehicle.id
            ? { ...newVehicle, id: editingVehicle.id }
            : vehicel
        )
      );
      // console.log(editingVehicle);
      setEditingVehicle(null); // Exit edit mode
    } else {
      //Add new vehicle(Add Case)
      const newVehicleWithId = { ...newVehicle, id: Date.now() };
      setVehicles([...vehicles, newVehicleWithId]);
    }
    setShowAddForm(false);
    ResetForm();
  };
  // console.log(newVehicle);
  //--------------------------------------Resets the form after every submission-------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------
  const ResetForm = () => {
    setNewVehicle({
      name: "",
      model: "",
      price: "",
      status: "In Stock",
      img: "",
      imgFile: null,
    });
  };
  //--------------------------------------Handle Editing Row-------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------
  const handleEditVehicle = (vehicel) => {
    setEditingVehicle(vehicel);
    setNewVehicle({ ...vehicel }); // pre-filles form with existing data
    setShowAddForm(true); // Shows the form for editing
  };

  /// handling delete button

  const handleDeleteVehicle = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this vehicel"
    );
    if (confirmDelete) {
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
    }
  };

  //--------------------------------------Handleing Image-------------------------------------------------------------------------------------//-------------------------------------------------------------------------------------
  function handleImageChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setNewVehicle({
        ...newVehicle,
        imgFile: file,
        img: URL.createObjectURL(file),
      });
    }
  }

  //--------------------------------------------------------------------------------------------------------------//---------------------------------------------------------------
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesStatus = activeTab === "All" || vehicle.status === activeTab; // const matchsStatus= This checks if the vehicle’s status (like "In Stock" or "For Sale") matches the currently selected tab.
    // activeTab === "All" means if "All" is selected, we want to show all vehicles. vehicle.status === activeTab means only show vehicles that match the selected tab.
    const matchesSearch = vehicle.name // search filter name search-----Both the vehicle name and the search term are changed to lowercase so the search is case-insensitive
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  //   console.log(filteredVehicles); it return the data of vehicles in an array
  //--------------------------------------------------//-----------------------------------------
  return (
    <div className=" vehicle-table">
      {/* Search Bar */}
      <div className="body-nav">
        <input
          className="search_bar"
          type="text"
          placeholder="Search by vehicle name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/*---------------------------------------- search bar ends here------------------------------------------------- */}
        <button
          className="add-vehicle-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          Add Vehicel
        </button>
      </div>
      {/*---------------------------------------- Button toggle change ends here------------------------------------------------- */}
      {/* Add vehicel form input will start from here*/}
      {showAddForm && (
        <div className="add-vehicle-modal-overlay">
          <div className="add-vehicle-form">
            <CloseRoundedIcon
              className="close-btn"
              aria-label="close"
              onClick={() => setShowAddForm(false)}
            ></CloseRoundedIcon>
            <h2 style={{ color: "#007bff" }}>Add New Vehicel</h2>
            <hr />
            <input
              type="text"
              placeholder="Vehicle Name"
              name="name"
              value={newVehicle.name}
              onChange={handleFormChange}
            />
            <input
              type="text"
              placeholder="Vehicle Model"
              name="model"
              value={newVehicle.model}
              onChange={handleFormChange}
            />
            <input
              type="text"
              placeholder="Vehicle Price"
              name="price"
              value={newVehicle.price}
              onChange={handleFormChange}
            />
            <select
              name="status"
              value={newVehicle.status}
              onChange={handleFormChange}
            >
              <option value="In Stock"> In Stock</option>
              <option value="Out of Stock"> Out of Stock</option>
            </select>
            {/*------------------Image Upload.------------------- */}
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {newVehicle.img && (
              <img
                src={newVehicle.img}
                alt="Preview"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  marginTop: "10px",
                }}
              />
            )}
            {/*------------------When clicked, this button calls handleSaveVehicle, which adds the new vehicle to the table.------------------- */}
            <button className="btn-save" onClick={handleSaveVehicle}>
              {editingVehicle ? "Update Vehicel" : "Save Vehicel"}
            </button>
          </div>
        </div>
      )}
      {/*---------------------------------------- Form input table ends here------------------------------------------------- */}
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>Summary</th>
            <th>Price</th>
            <th>Website</th>
            <th>AA Cars</th>
            <th>Autotrader</th>
            <th>EMG</th>
            <th>Facebook</th>
            <th>Social</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredVehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(vehicle.id)}
                  onChange={() => handleRowSelect(vehicle.id)}
                />
              </td>
              <td className=" vehicle-info">
                <img
                  src={vehicle.img || "/default-placeholder.png"}
                  alt={vehicle.name}
                  className="vehicle-img"
                />

                <div>
                  <div className="vehicle-name">{vehicle.name}</div>
                  <div className="vehicle-status">{vehicle.status}</div>
                  <div className="vehicle-model">{vehicle.model}</div>
                </div>
              </td>
              <td>{vehicle.price}</td>
              <td>
                {/* Website Toogle */}
                <Switch />
              </td>
              <td>
                {/* AA Cars Toggle */}
                <Switch />
              </td>
              {/* AutoTraders Dropdown */}
              <td>
                <DropDown>
                  {/* {dropDownOptions.map((option) => (
                    <option key={option} value={option} defaultValue={option}>
                      {option}
                    </option>
                  ))} */}
                </DropDown>
              </td>
              <td>
                {/* EMG Toggle */}
                <Switch />
              </td>
              <td>
                {/* Facebook Toggle */}
                <Switch />
              </td>
              <td>
                {/* Social Toggle */}
                <Switch />
              </td>

              <td>
                {/* <button className="btn btn-view">View</button> */}
                <IconButton
                  onClick={() => handleEditVehicle(vehicle)}
                  aria-label="edit"
                  style={{ color: "#007bff" }}
                >
                  <ModeEditIcon />
                </IconButton>

                <IconButton
                  onClick={() => handleDeleteVehicle(vehicle.id)}
                  aria-label="delete"
                  style={{ color: "#ee4b00" }}
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default VehicleTable;
