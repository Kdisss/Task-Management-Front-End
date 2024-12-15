import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Autocomplete, TextField, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksById } from "src/Redux/TaskSlice";
import { updateTask } from "src/Redux/TaskSlice";
import { useLocation } from "react-router-dom";
import { submitTask } from "src/Redux/SubmissionSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

export default function SubmitFormModel({ item, handleClose, open }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");
  const { task } = useSelector((store) => store);

  const [formData, setFormData] = React.useState({
    githubLink: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitTask({ taskId, githubLink: formData.githubLink }));
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" align="center" sx={{ paddingBottom: 2 }}>
            Create New Task
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={1.5} alignItems="center">
              <Grid item xs={12}>
                <TextField
                  label="Github Link"
                  fullWidth
                  name="githubLink"
                  value={formData.githubLink}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  className="customButton"
                  type="submit"
                  sx={{ padding: ".9rem" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
