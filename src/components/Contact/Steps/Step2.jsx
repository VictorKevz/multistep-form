import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { DataContext, ThemeContext } from "../../../App";

import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import LanguageIcon from "@mui/icons-material/Language";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import AdsClickIcon from "@mui/icons-material/AdsClick";

import "../../../css/step2.css";
import PrevButton from "../../Buttons/PrevButton";
import NextButton from "../../Buttons/NextButton";
import { stepVariants } from "../../../variants";

function Step2({ handleValidation }) {
  const { state, dispatch } = useContext(DataContext);
  const { isDark } = useContext(ThemeContext);

  const services = [
    {
      id: 1,
      label: "Web development",
      icon: LanguageIcon,
      price: {
        monthly: 10,
        yearly: 108,
      },
      features: ["Scalable", "Secure", "Responsive"],
    },
    {
      id: 2,
      label: "Mobile development",
      icon: DeveloperModeIcon,
      price: {
        monthly: 10,
        yearly: 108,
      },
      features: ["Scalable", "Secure", "Optimized"],
    },
    {
      id: 3,
      label: "Digital Marketing",
      icon: AdsClickIcon,
      price: {
        monthly: 5,
        yearly: 54,
      },
      features: ["High ROI", "SEO Optimized", "Quality Content"],
    },
    {
      id: 4,
      label: "Cloud Computing",
      icon: CloudDoneIcon,
      price: {
        monthly: 15,
        yearly: 162,
      },
      features: ["Cloud Security ", "Data Scalability", "Cloud Apps"],
    },
  ];

  const selectService = (currentService) => {
    dispatch({
      type: "SET_STEP2",
      payload: { currentService: currentService },
    });
  };

  return (
    <motion.div
      className="step2-wrapper"
      variants={stepVariants(state.direction)}
      initial="hidden"
      animate="visible"
      key={services}
    >
      <div
        className={"step-2-service-wrapper"}
        role="group"
        aria-labelledby="service-selection"
      >
        <h2 id="service-selection" className="visually-hidden">
          Step 2: Select Services
        </h2>
        {services.map((service) => {
          const isSelected = state.step2.services.some(
            (obj) => obj.label === service.label
          );
          return (
            <button
              key={service.id}
              className={`service-btn ${isSelected && "selected"} ${
                isDark && "text-dark"
              } ${isDark && isSelected && "selected-dark"}`}
              onClick={() => selectService(service)}
              aria-pressed={isSelected}
              aria-label={`Select ${service.label} service`}
            >
              <span className="step2-icon-wrapper">
                <service.icon className="form-icon" fontSize="large" />
              </span>
              {service.label}
            </button>
          );
        })}
      </div>
      <div className="btns-wrapper">
        <PrevButton />
        <NextButton handleValidation={handleValidation} />
      </div>
    </motion.div>
  );
}

export default Step2;
