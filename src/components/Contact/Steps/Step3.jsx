import React, { useContext } from "react";
import { motion } from "framer-motion";

import { DataContext, ThemeContext } from "../../../App";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PrevButton from "../../Buttons/PrevButton";
import NextButton from "../../Buttons/NextButton";
import "../../../css/step3.css";
import { stepVariants } from "../../../variants";

function Step3({ handleValidation }) {
  const { state, dispatch } = useContext(DataContext);
  const { isDark } = useContext(ThemeContext);
  const serviceCount = state.step2?.services?.length;
  return (
    <motion.div
      className="step3-wrapper"
      variants={stepVariants(state.direction)}
      initial="hidden"
      animate="visible"
      key={serviceCount}
    >
      <div className={`step-3-service-wrapper`}>
        <h2 className="visually-hidden">
          Step 3: Review Selected Services and Pricing
        </h2>

        {state.step2.services.map((service, index) => {
          return (
            <div
              key={service.id}
              className={`service-option ${
                serviceCount == 4 && index === 3 && "last-item"
              }`}
            >
              <h3 className={`service-name ${isDark && "text-dark"}`}>
                {service.label}
              </h3>

              <ul
                className={`features ${
                  serviceCount == 4 && index === 3 && "last-item-flex"
                }`}
              >
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`feature ${isDark && "medium-text-dark"}`}
                  >
                    <CheckCircleIcon
                      fontSize="large"
                      className={`check-icon ${isDark && "icon-dark"}`}
                    />{" "}
                    {feature}
                  </li>
                ))}
              </ul>
              <p className={`price ${isDark && "text-dark"}`}>
                {`$${
                  state.step3.monthlyBilling
                    ? service.price.monthly
                    : service.price.yearly
                } `}{" "}
                <span className="price-unit">
                  {" "}
                  {state.step3.monthlyBilling ? " /mo" : " /yr"}
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <div className={`billing-wrapper ${isDark && "steps-bg-dark"}`}>
        <button
          type="button"
          className={`billing-btn ${state.step3.monthlyBilling && "monthly"}`}
          onClick={() =>
            dispatch({ type: "SET_BILLING", payload: { currentBilling: true } })
          }
          aria-pressed={state.step3.monthlyBilling}
          aria-label="View Monthly Billing"
        >
          Monthly
        </button>
        <button
          type="button"
          className={`billing-btn ${!state.step3.monthlyBilling && "yearly"}`}
          onClick={() =>
            dispatch({
              type: "SET_BILLING",
              payload: { currentBilling: false },
            })
          }
          aria-pressed={!state.step3.monthlyBilling}
          aria-label="View Yearly Billing"
        >
          Yearly
        </button>
      </div>
      <div className="btns-wrapper">
        <PrevButton />
        <NextButton handleValidation={handleValidation} />
      </div>
    </motion.div>
  );
}

export default Step3;
