import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useFormGroup } from "../../hooks";
import "./PersonForm.css";
import Validator from "../../utils/Validator";
import { addRecord } from "../../../store/dispatchers/records.dispatch";
import { useDispatch } from "react-redux";
export default function PersonForm() {
  const dispatch = useDispatch();
  const [userForm, updateForm, clearForm, runValidator] = useFormGroup({
    name: {
      value: "",
      validation: {
        required: true,
        pattern: /^[a-zA-Z]{3,20}/,
        msgs: {
          required: "name is required",
          pattern: "invalid name",
        },
      },
    },
    age: {
      value: "",
      validation: {
        required: true,
        pattern: /^[1-9]?[0-9]{1}$|^100$/,
        msgs: {
          required: "age is required",
          pattern: "invalid age",
        },
      },
    },
    email: {
      value: "",
      validation: {
        required: true,
        pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        msgs: {
          required: "email is required",
          pattern: "invalid email address",
        },
      },
    },
    phoneNumber: {
      value: "",
      validation: {
        required: true,
        minLength: 10,
        maxLength: 10,
        msgs: {
          required: "phone number is required",
          minLength: "phone number should be 10 digit",
          maxLength: "phone number should be 10 digit",
        },
      },
    },
  });

  const Name = (
    <div>
      <TextField
        id="name"
        value={userForm.name.value}
        onChange={updateForm}
        label="Username"
        variant="outlined"
        helperText={userForm.name?.errorMessage}
      />
    </div>
  );
  const Age = (
    <div>
      <TextField
        id="age"
        value={userForm.age.value}
        onChange={updateForm}
        label="Age"
        variant="outlined"
        helperText={userForm.age?.errorMessage}
      />
    </div>
  );
  const Email = (
    <div>
      <TextField
        id="email"
        value={userForm.email.value}
        onChange={updateForm}
        label="Email"
        variant="outlined"
        helperText={userForm.email?.errorMessage}
      />
    </div>
  );
  const PhoneNumber = (
    <div>
      <TextField
        id="phoneNumber"
        value={userForm.phoneNumber.value}
        onChange={updateForm}
        label="Phone Number"
        variant="outlined"
        helperText={userForm.phoneNumber?.errorMessage}
      />
    </div>
  );

  const submit = () => {
    runValidator();
    const isValid = Validator.isFormValid(userForm);

    if (isValid) {
      const { name, age, email, phoneNumber } = userForm;
      const record = {
        name: name.value,
        age: age.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
      };
      dispatch(addRecord(record));
      clearForm();
    }
  };

  return (
    <div className="user-form">
      {Name}
      {Age}
      {Email}
      {PhoneNumber}
      <div className="action_btns">
        <Button variant="outlined" color="primary" onClick={() => clearForm()}>
          Reset
        </Button>
        <Button variant="outlined" color="primary" onClick={submit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
