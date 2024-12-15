import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import UserList from "./UserList";
import SubmissionList from "./SubmissionList";
import EditTaskForm from "./EditTaskForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "src/Redux/TaskSlice";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import SubmitFormModel from "./SubmitFormModel";

const role = "ROLE-ADMIN";
const TaskCard = ({ item }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {auth} =useSelector(store=>store)
  const [anchorEl, setAnchorEl] = React.useState(null); // State for managing menu anchor

  const openMenu = Boolean(anchorEl); // Check if menu should be open

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element when menu is clicked
  };

  const [openUserList, setOpenUserList] = useState(false);
  const handleCloseUserList = () => {
    setOpenUserList(false);
  };
  const handleOpenUserList = () => {
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.set("taskId", item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`);
    setOpenUserList(true);
    handleMenuClose();
  };

  const [openSubmissionList, setOpenSubmissionList] = useState(false);
  const handleCloseSubmissionList = () => {
    setOpenSubmissionList(false);
  };
  const handleOpenSubmissionList = () => {
    const updatedParams= new URLSearchParams(location.search)
    updatedParams.set("taskId",item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`)
    setOpenSubmissionList(true);
    handleMenuClose();
  };

  const [openSubmitFormModel, setOpenSubmitFormModel] = useState(false);
  const handleCloseSubmitFormModel = () => {
    setOpenSubmitFormModel(false)
  }
  const handleOpenSubmitFormModel = () => {
    const updatedParams= new URLSearchParams(location.search)
    updatedParams.set("taskId",item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`)
    setOpenSubmitFormModel(true);
    handleMenuClose();
  };

  const [openUpdateTaskForm, setOpenUpdateTaskForm] = useState(false);
  const handleCloseUpdateTaskForm = () => {
    setOpenUpdateTaskForm(false);
  };

  const handleRemoveTaskIdParams = () => {
    const updatedParams= new URLSearchParams(location.search)
    updatedParams.delete("filter");
    const queryString = updatedParams.toString();
    const updatedPath = queryString
      ? `${location.pathname}?${queryString}`
      : location.pathname;
    navigate(updatedPath);
  };

  const handleOpenUpdateTaskForm = () => {
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.set("taskId", item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`);
    setOpenUpdateTaskForm(true);
    handleMenuClose();
  };

  const handleDeleteTask = () => {
    handleMenuClose();
  };

  const handleMenuClose = () => {
    dispatch(deleteTask(item.id));
    setAnchorEl(null); // Close the menu
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md card">
      {/* Left Section */}
      <div className="flex items-center gap-5 w-full lg:w-[70%]">
        <div>
          <img
            className="lg:w-[7rem] lg:h-[7rem] object-cover rounded-md"
            src="{item.image}"
            alt="Car"
          />
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-lg font-bold">{item.title}</h1>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((_, index) => (
              <span key={index} className="px-5 py-1 rounded-full techStack">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-shrink-0">
        <IconButton
          onClick={handleMenuClick} // Trigger menu on click
          className="text-gray-500"
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
        <Menu
          anchorEl={anchorEl} // Set the anchor element for the menu
          open={openMenu} // Whether the menu should be open
          onClose={handleMenuClose} // Close the menu
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {auth.user?.role === "ROLE-ADMIN" ? (
            <>
              <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
              <MenuItem onClick={handleOpenSubmissionList}>
                See Submissions
              </MenuItem>
              <MenuItem onClick={handleOpenUpdateTaskForm}>Edit</MenuItem>
              <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
            </>
          ) : (
            <>
            <MenuItem onClick={handleOpenSubmitFormModel}>Submit</MenuItem>
            </>
          )}
        </Menu>
      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList} />
      <SubmissionList
        open={openSubmissionList}
        handleClose={handleCloseSubmissionList}
      />
      <EditTaskForm
        item={item}
        open={openUpdateTaskForm}
        handleClose={handleCloseUpdateTaskForm}
      />
      <SubmitFormModel 
        open={openSubmitFormModel} 
        handleClose={handleCloseSubmitFormModel}/>
    </div>
  );
};

export default TaskCard;
