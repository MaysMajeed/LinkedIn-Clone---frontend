import { useState } from "react";
import Step1SignUp from "../components/Step1SignUp";
import Step2SignUp from "../components/Step2SignUp";
import Step3SignUp from "../components/Step3SignUp";
import Step4SignUp from "../components/Step4SignUp";
import Step5SignUp from "../components/Step5SignUp";

function SignUp() {
  document.title = "Sign Up | LinkedIn";
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    countryRegion: "",
    cityDistrict: "",
    JT: "",
  });

  switch (step) {
    case 1:
      return (
        <Step1SignUp
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 2:
      return (
        <Step2SignUp
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 3:
      return (
        <Step3SignUp
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 4:
      return (
        <Step4SignUp
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 5:
      return (
        <Step5SignUp
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      );

    default:
  }
}

export default SignUp;
