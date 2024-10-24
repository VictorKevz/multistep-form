import React, { useContext } from "react";
import { motion } from "framer-motion";

import { DataContext, ThemeContext } from "../../../App";
import PrevButton from "../../Buttons/PrevButton";
import "../../../css/step4.css";
import NextButton from "../../Buttons/NextButton";
import { stepVariants } from "../../../variants";

function Step4({handleValidation}) {
  const { state, dispatch } = useContext(DataContext);
  const { isDark } = useContext(ThemeContext);
  const isMonthly = state.step3.monthlyBilling;

  const findTotal = () => {
    let monthlyTotal = 0;
    let yearlyTotal = 0;

    for (let i = 0; i < state.step2.services.length; i++) {
      monthlyTotal += state.step2.services[i].price.monthly;
      yearlyTotal += state.step2.services[i].price.yearly;
    }
    return isMonthly ? monthlyTotal : yearlyTotal;
  };

 
  return (
    <motion.div 
    className="step4-wrapper"
    variants={stepVariants(state.direction)}
    initial="hidden"
    animate="visible"
    key={isMonthly}
    >
      <div className={`step4-summary-wrapper ${isDark && "step4-summary-dark"}`}>
        <div className={`summary-header ${isDark && "summary-header-dark"}`}>
        <h3 className={`billing-title ${isDark && "text-dark"}`}>{`Billing(${
          isMonthly ? "Monthly" : "Annually"
        })`}</h3>
        <button
          type="button"
          className="btn-change"
          onClick={() =>
            dispatch({ type: "DYNAMIC_STEP", payload: { step: 2 } })
          }
        >
          Change
        </button>
        </div>
        {state.step2.services.map((service) => {
          return (
              <div key={service.id} className="service-item">
                <p className={`service ${isDark && "medium-text-dark"}`}>{service.label}</p>
                <p className={`service-cost ${isDark && "medium-text-dark"}`}>
                  {`$${
                    isMonthly ? service.price.monthly : service.price.yearly
                  } `}{" "}
                  <span className="price-unit">
                    {" "}
                    {isMonthly ? "/mo" : "/yr"}
                  </span>
                </p>
              </div>
            
          );
        })}
      </div>
      <div className="total-wrapper">
        <p className={`total ${isDark && "text-dark"}`}>{`Total (${
          isMonthly ? "Monthly" : "Annually"
        })`}</p>
        <p className="total-cost">${findTotal().toFixed(2)}</p>
      </div>
      <div className="btns-wrapper">
        <PrevButton />
        <NextButton handleValidation={handleValidation} />

      </div>
    </motion.div>
  );
}

export default Step4;
