import React, { useContext } from "react";
import { DataContext, ThemeContext } from "../../../App";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PrevButton from "../../Buttons/PrevButton";
import NextButton from "../../Buttons/NextButton";
import "../../../css/step3.css";

function Step3({handleValidation}) {
  const { state, dispatch } = useContext(DataContext);
  const { isDark } = useContext(ThemeContext);
  const serviceCount = state.step2?.services?.length;
  return (
    <div className="step3-wrapper">
      <div className={`step-3-service-wrapper`}>
        {state.step2.services.map((service,index) => {
          return (
            <div key={service.id} className={`service-option ${serviceCount == 4 && index === 3 && "last-item"}`}>
              <h3 className={`service-name ${isDark && "text-dark"}`}>{service.label}</h3>
              
              <ul className={`features ${serviceCount == 4 && index === 3 && "last-item-flex"}`}>
                {service.features.map((feature, i) => (
                  <li key={i} className={`feature ${isDark && "medium-text-dark"}`}>
                    <CheckCircleIcon fontSize="large" className={`check-icon ${isDark && "icon-dark"}`} />{" "}
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
      <div className={`billing-wrapper ${isDark && "main-bg-dark"}`}>
        <button
          type="button"
          className={`billing-btn ${state.step3.monthlyBilling && "monthly"}`}
          onClick={() =>
            dispatch({ type: "SET_BILLING", payload: { currentBilling: true } })
          }
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
        >
          Yearly
        </button>
      </div>
      <div className="btns-wrapper">
        <PrevButton />
        <NextButton handleValidation={handleValidation} />
      </div>
    </div>
  );
}

export default Step3;
