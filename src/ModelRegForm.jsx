import { Button, InputLabel, MenuItem, TextField } from "@mui/material";
import "./ModelRegForm.css";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ModelRegForm = () => {
  const registrationHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState("");
  const [characterLimit, setCharacterLimit] = useState(1000);
  const [photoSizeError, setPhotoSizeError] = useState(false);
  const [signSizeError, setSignSizeError] = useState(false);

  const remainingCharacterHandler = (event) => {
    setCharacterLimit(1000 - event.target.value.length);
  };

  return (
    <div>
      <img
        src="src\assets\vecteezy_one-woman-walking-on-the-beach-at-sunset_27101842.jpg"
        alt="sunset"
        className="pageBackground"
      />
      <div className="container">
        <div className="header">
          <a href="#" className="logoLink">
            <img
              src="https://images.pexels.com/photos/951408/pexels-photo-951408.jpeg?cs=srgb&dl=pexels-travis-saylor-271738-951408.jpg&fm=jpg"
              alt=""
              className="logoImage"
            />
          </a>
          <h2 className="headerText">Model Registration Form</h2>
        </div>
        <div className="formHolder">
          <form className="form" onSubmit={registrationHandler}>
            <div className="name">
              <TextField
                id="firstName"
                label="First name"
                variant="filled"
                required
                fullWidth
                sx={{ margin: "0 10px 15px 0" }}
              />
              <TextField
                id="lastName"
                label="Last name"
                variant="outlined"
                required
                fullWidth
                sx={{ margin: "0 10px 15px 0" }}
              />
            </div>
            <div className="datePick">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of birth"
                  format="DD/MM/YYYY"
                  fullWidth
                  required
                  disableFuture
                  value={dob}
                  onChange={(newValue) => setDob(newValue)}
                  slotProps={{
                    textField: {
                      required: true,
                    },
                  }}
                />
              </LocalizationProvider>
              <TextField
                select
                required
                label="Marital status"
                fullWidth
                sx={{ marginLeft: "10px", marginRight: "10px" }}
                value={maritalStatus}
                onChange={(event) => setMaritalStatus(event.target.value)}
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
                <MenuItem value="Widowed">Widowed</MenuItem>
              </TextField>
            </div>
            <div className="moreInfo">
              <TextField
                label="Birth place"
                fullWidth
                sx={{ marginRight: "10px", marginBottom: "15px" }}
              />
              <TextField
                label="Phone number"
                fullWidth
                required
                slotProps={{ htmlInput: { maxLength: 10 } }}
                sx={{ marginRight: "10px", marginBottom: "15px" }}
                helperText="Enter your phone number without country code (+91)"
              />
              <TextField
                label="Email id"
                fullWidth
                required
                type="email"
                sx={{ marginRight: "10px", marginBottom: "15px" }}
                helperText="youremail@domain.com"
              />
              <TextField
                label="Instagram username"
                fullWidth
                required
                placeholder="@InstagramId"
                sx={{ marginRight: "10px", marginBottom: "15px" }}
              />
              <TextField
                label="About yourself"
                fullWidth
                required
                multiline
                onChange={remainingCharacterHandler}
                slotProps={{ htmlInput: { maxLength: 1000 } }}
                sx={{ marginRight: "10px", marginBottom: "15px" }}
                helperText={`${characterLimit} characters remaining.`}
              />
            </div>

            <div>
              <InputLabel id="photoAdd" required sx={{ marginBottom: "4px" }}>
                Upload your photo
              </InputLabel>
              <TextField
                labelId="photoAdd"
                type="file"
                onChange={(event) => {
                  console.log(event.target.files);
                  if (event.target.files[0].size > 5 * 1024 * 1024) {
                    event.target.value = "";
                    setPhotoSizeError(true);
                  }
                }}
                error={photoSizeError}
                fullWidth
                required
                helperText={
                  photoSizeError ? "Photo size should be less than 5MB" : ""
                }
                slotProps={{
                  input: {
                    inputProps: {
                      accept: "image/*",
                    },
                  },
                }}
                sx={{ marginBottom: "10px" }}
              />

              <InputLabel id="signAdd" required sx={{ marginBottom: "4px" }}>
                Upload your signature
              </InputLabel>

              <TextField
                labelId="signAdd"
                type="file"
                onChange={(event) => {
                  console.log(event.target.files);
                  if (event.target.files[0].size > 2 * 1024 * 1024) {
                    event.target.value = "";
                    setSignSizeError(true);
                  }
                }}
                error={signSizeError}
                fullWidth
                required
                helperText={
                  signSizeError ? "Photo size should be less than 5MB" : ""
                }
                slotProps={{
                  input: {
                    inputProps: {
                      accept: "image/*",
                    },
                  },
                }}
              />
            </div>

            <div className="submitButton">
              <Button
                variant="contained"
                size="large"
                color="primary"
                loadingPosition="center"
                type="submit"
                sx={{ display: "block" }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModelRegForm;
