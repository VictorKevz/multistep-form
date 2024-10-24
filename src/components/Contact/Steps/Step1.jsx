import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import PersonIcon from "@mui/icons-material/Person";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import BusinessIcon from "@mui/icons-material/Business";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { DataContext, ThemeContext } from "../../../App";
import "../../../css/step1.css";
import NextButton from "../../Buttons/NextButton";
import { stepVariants } from "../../../variants";

function Step1() {
  const { state, dispatch } = useContext(DataContext);
  const { isDark } = useContext(ThemeContext);
  const fields = [
    {
      id: 1,
      name: "firstName",
      value: state.step1.firstName,
      label: "First Name",
      icon: PersonIcon,
      placeholder: "John",
    },
    {
      id: 2,
      name: "lastName",
      value: state.step1.lastName,
      label: "Last Name",
      icon: PersonIcon,
      placeholder: "Mathew",
    },
    {
      id: 3,
      name: "phone",
      value: state.step1.phone,
      label: "Phone Number",
      icon: PhoneInTalkIcon,
      placeholder: "+345 981 0987",
    },
    {
      id: 4,
      name: "company",
      value: state.step1.company,
      label: "Company Name",
      icon: BusinessIcon,
      placeholder: "JohnTech",
    },
    {
      id: 5,
      name: "email",
      value: state.step1.email,
      label: "Email",
      icon: MailOutlineIcon,
      placeholder: "johnmathew@gmail.com",
    },
  ];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9 ]{7,15}$/;

  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch({
      type: "SET_STEP1",
      payload: {
        data: { [name]: value },
        isValid: { [name]: true },
      },
    });
  };
  const handleValidation = () => {
    const newValid = { ...state.step1.isValid };
    if (!state.step1.firstName.trim()) {
      newValid.firstName = false;
    }
    if (!state.step1.lastName.trim()) {
      newValid.lastName = false;
    }
    if (!state.step1.company.trim()) {
      newValid.company = false;
    }
    if (!state.step1.phone || !phoneRegex.test(state.step1.phone)) {
      newValid.phone = false;
    }
    if (!state.step1.email || !emailRegex.test(state.step1.email)) {
      newValid.email = false;
    }
    dispatch({ type: "SUBMIT_STEP1", payload: { isValid: newValid } });
    const isValid = Object.values(newValid).every(Boolean);
    return isValid;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={stepVariants(state.direction)}
        initial="hidden"
        animate="visible"
      >
        <form className="step-form-wrapper" autoComplete="off">
          {fields.map((field) => {
            const isLast = field.id === 5;
            return (
              <fieldset
                key={field.id}
                className={`field ${isLast && "last-field"}`}
              >
                <label
                  className={`step1-label ${isDark && "text-dark"}`}
                  htmlFor={field.id}
                >
                  {field.label}
                  <input
                    type="text"
                    id={field.id}
                    name={field.name}
                    value={field.value}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={`step1-input ${isDark && "step1-input-dark"}`}
                  />
                  <span
                    className={`form-icon-wrapper ${
                      isDark && "icon-wrapper-dark"
                    }`}
                  >
                    <field.icon className="form-icon" fontSize="large" />
                  </span>
                  {!state.step1.isValid[field.name] && (
                    <span className="error-message">{`Please provide a valid ${field.label}`}</span>
                  )}
                </label>
              </fieldset>
            );
          })}
        </form>
        <div className="step1-btn-wrapper">
          <NextButton handleValidation={handleValidation} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Step1;
