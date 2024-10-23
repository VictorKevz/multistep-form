import React, { createContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import AsideSection from "./components/Aside/Aside";
import Step5 from "./components/Contact/Steps/Step5";

export const ThemeContext = createContext();
export const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_STEP1":
      return {
        ...state,
        step1: {
          ...state.step1,
          ...action.payload.data,
          isValid: { ...state.step1.isValid, ...action.payload.isValid },
        },
      };

    case "SUBMIT_STEP1":
      return {
        ...state,
        step1: {
          ...state.step1,
          isValid: { ...state.step1.isValid, ...action.payload.isValid },
        },
      };
    case "SET_STEP2":
      const isSelected = state.step2.services.some(
        (obj) => obj.label === action.payload.currentService.label
      );
      if (isSelected) {
        const selectedServices = state.step2.services.filter(
          (service) => service.label !== action.payload.currentService.label
        );
        return {
          ...state,
          step2: {
            ...state.step2,
            services: selectedServices,
          },
        };
      }
      return {
        ...state,
        step2: {
          ...state.step2,
          services: [...state.step2.services, action.payload.currentService],
        },
      };
    case "SET_BILLING":
      return {
        ...state,
        step3: {
          ...state.step3,
          monthlyBilling: action.payload.currentBilling,
        },
      };
    case "INCREMENT_STEP":
      return {
        ...state,
        stepCount: state.stepCount + 1,
      };
    case "DECREMENT_STEP":
      return {
        ...state,
        stepCount: state.stepCount - 1,
      };
    case "DYNAMIC_STEP":
      return {
        ...state,
        stepCount: action.payload.step,
      };
    case "SHOW_ERROR":
      return {
        ...state,
        showError: true,
      };
      case "CLOSE_ERROR":
        return {
          ...state,
          showError: false,
        };
      case "RESET_STATE":
        return {
          step1: {
            firstName: "",
            lastName: "",
            phone: "",
            company: "",
            email: "",
            isValid: {
              firstName: true,
              lastName: true,
              phone: true,
              company: true,
              email: true,
            },
          },
          step2: {
            services: [],
          },
          step3: { monthlyBilling: true },
          step4: {},
          stepCount: 1,
          showError: false,
        };
    default:
      return state;
  }
};

function App() {
  const [isDark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  const initialState = {
    step1: {
      firstName: "",
      lastName: "",
      phone: "",
      company: "",
      email: "",
      isValid: {
        firstName: true,
        lastName: true,
        phone: true,
        company: true,
        email: true,
      },
    },
    step2: {
      services: [],
    },
    step3: { monthlyBilling: true },
    step4: {},
    stepCount: 1,
    showError: false,
  };
  const savedState = localStorage.getItem("state");
  const currentState =
    savedState !== null ? JSON.parse(savedState) : initialState;
  const [state, dispatch] = useReducer(reducer, currentState);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
    localStorage.setItem("state", JSON.stringify(state));
  }, [isDark, state]);
  return (
    <ThemeContext.Provider value={{ isDark, setDark }}>
      <main className={`outer-container ${isDark && "main-bg-dark"}`}>
        <div className="inner-container">
          <DataContext.Provider value={{ state, dispatch }}>
            <AsideSection />

            {state.stepCount == 5 ? <Step5 /> : <Contact />}
          </DataContext.Provider>
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
