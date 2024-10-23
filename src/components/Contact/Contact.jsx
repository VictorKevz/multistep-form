import React, { useContext } from "react";

import { DataContext, ThemeContext } from "../../App";
import Step1 from "./Steps/Step1";
import Alert from "@mui/material/Alert";

import "../../css/contact.css";
import "../../App.css";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";

function Contact() {
  const { isDark, setDark } = useContext(ThemeContext);
  const { state, dispatch } = useContext(DataContext);
  const steps = [1, 2, 3, 4];
  const stepsHeader = [
    {
      heading: "Your Info",
      parag:
        "Please provide your valid full name, email, phone, and company name.",
    },
    {
      heading: "Choose A Service",
      parag:
        "Please choose services you need. You can select multiple services!",
    },
    {
      heading: "Choose Your Billing",
      parag:
        "You can be billed monthly or annually. Save 10% on annual plan. Go back to change services",
    },
    {
      heading: "Finally",
      parag:
        "Please confirm if everything is correct before submitting the form.",
    },
  ];
  const handleValidation = () => {
    let isValid = false;
    if (state.step2.services.length > 0) {
      isValid = true;
    }
    return isValid;
  };

  return (
    <section className="contact-container">
      <div className={`contact-wrapper ${isDark && "cards-bg-dark"}`}>
        <article className={`form-wrapper ${isDark && "cards-bg-dark"}`}>
          <div className="steps-container">
            {steps.map((step) => {
              const isActive = step === state.stepCount;
              return (
                <button
                  key={step}
                  type="button"
                  className={`step-btn ${isActive && "active"} ${
                    isDark && "main-bg-dark"
                  }`}
                  onClick={() =>
                    dispatch({ type: "DYNAMIC_STEP", payload: { step: step } })
                  }
                >
                  {step}
                </button>
              );
            })}
          </div>
          <div className="steps-header-text">
            <h2 className={`step-header-title ${isDark && "text-dark"}`}>
              {stepsHeader[state.stepCount - 1]?.heading}
            </h2>
            <p className={`step-header-parag ${isDark && "medium-text-dark"}`}>
              {stepsHeader[state.stepCount - 1]?.parag}
            </p>
          </div>
          {state.stepCount == 1 && <Step1 />}
          {state.stepCount == 2 && (
            <Step2 handleValidation={handleValidation} />
          )}
          {state.stepCount == 3 && (
            <Step3 handleValidation={handleValidation} />
          )}
          {state.stepCount == 4 && (
            <Step4 handleValidation={handleValidation} />
          )}
          
        </article>
        
      </div>
      {state.showError && (
        <div className="error-badge">
          <Alert
            variant="filled"
            severity="error"
            sx={{
              bgcolor: "brown",
              display: "flex",
              alignItems: "center",
              color: "white",
              fontSize: "large",
            }}
            onClose={() => dispatch({ type: "CLOSE_ERROR" })}
          >
            <span className="error-text">
              Please select at least one service!
            </span>
          </Alert>
        </div>
      )}
    </section>
  );
}

export default Contact;
