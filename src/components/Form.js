import React, { useState } from "react";
import "../styles/Form.css";
import CustomDropdown from "./CustomDropdown";

const Form = () => {
  const [formData, setFormData] = useState({
    existingCustomer: "",
    floossCustomerID: "",
    cprNumber: "",
    monthlySalary: "",
    nationality: "",
    jobTitle: "",
    mobile: "",
    age: "",
    monthlySalaryBracket: "",
    applicationStatus: "",
    creditScore: "",
    reasonForRejection: "",
    loanProductName: "",
    loanAmount: "",
    numberOfMonths: "",
    companyName: "",
    kycStatus: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "reasonForRejection") {
        newErrors[key] = "Required";
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="main">
    <div className="form-container">
      <div className="form-inner-container">
        <h1>Loan apply</h1>
        <form className="loan-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="form-row">
            <CustomDropdown
              name="existingCustomer"
              value={formData.existingCustomer}
              options={["Yes", "No"]}
              placeholder="Are you Existing Customer?"
              onChange={handleChange}
              error={errors.existingCustomer}
            />
            <div className="form-group">
              <input
                type="text"
                name="floossCustomerID"
                placeholder="Floss Customer ID"
                value={formData.floossCustomerID}
                onChange={handleChange}
              />
              {errors.floossCustomerID && (
                <span className="error">{errors.floossCustomerID}</span>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="cprNumber"
                placeholder="CPR Number"
                value={formData.cprNumber}
                onChange={handleChange}
              />
              {errors.cprNumber && (
                <span className="error">{errors.cprNumber}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
              {errors.companyName && (
                <span className="error">{errors.companyName}</span>
              )}
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <CustomDropdown
              name="monthlySalaryBracket"
              value={formData.monthlySalaryBracket}
              options={["Below 500", "500-1000", "Above 1000"]}
              placeholder="Monthly Salary (Bracket)"
              onChange={handleChange}
              error={errors.monthlySalaryBracket}
            />
            <div className="form-group">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
              />
              {errors.jobTitle && (
                <span className="error">{errors.jobTitle}</span>
              )}
            </div>
          </div>

          {/* Row 4 */}
          <div className="form-row">
            <CustomDropdown
              name="nationality"
              value={formData.nationality}
              options={["Yes", "No"]}
              placeholder="Nationalities"
              onChange={handleChange}
              error={errors.nationality}
            />
            <div className="form-group">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>
          </div>

          {/* Row 5 */}
          <div className="form-row">
            <div className="form-group">
              <input
                type="number"
                name="loanAmount"
                placeholder="Loan Amount (BHD) requested"
                value={formData.loanAmount}
                onChange={handleChange}
              />
              {errors.loanAmount && (
                <span className="error">{errors.loanAmount}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
              />
              {errors.age && <span className="error">{errors.age}</span>}
            </div>
          </div>

          {/* Row 6 */}
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="monthlySalary"
                placeholder="Monthly Salary"
                value={formData.monthlySalary}
                onChange={handleChange}
              />
              {errors.monthlySalary && (
                <span className="error">{errors.monthlySalary}</span>
              )}
            </div>
            <CustomDropdown
              name="kycStatus"
              value={formData.kycStatus}
              options={["Yes", "No"]}
              placeholder="KYC Status"
              onChange={handleChange}
              error={errors.kycStatus}
            />
          </div>

          {/* Row 7 */}
          <div className="form-row">
            <CustomDropdown
              name="applicationStatus"
              value={formData.applicationStatus}
              options={["Approved", "Pending", "Rejected"]}
              placeholder="Application Status"
              onChange={handleChange}
              error={errors.applicationStatus}
            />
            <CustomDropdown
              name="numberOfMonths"
              value={formData.numberOfMonths}
              options={Array.from({ length: 12 }, (_, i) => `${i + 1}`)}
              placeholder="Number of Months"
              onChange={handleChange}
              error={errors.numberOfMonths}
            />
          </div>

          {/* Row 8 */}
          <div className="form-row">
            <CustomDropdown
              name="reasonForRejection"
              value={formData.reasonForRejection}
              options={["Insufficient Credit", "Other"]}
              placeholder="Reason - Rejection"
              onChange={handleChange}
            />
            <div className="form-group">
              <input
                type="text"
                name="creditScore"
                placeholder="Credit Score"
                value={formData.creditScore}
                onChange={handleChange}
              />
              {errors.creditScore && (
                <span className="error">{errors.creditScore}</span>
              )}
            </div>
          </div>
          {/* Row 9 */}
          <div className="form-row">
            <CustomDropdown
              name="loanProductName"
              value={formData.loanProductName}
              options={["Personal Loan", "Home Loan"]}
              placeholder="Loan Product Name"
              onChange={handleChange}
              error={errors.loanProductName}
            />
          </div>

          <button type="submit" className="submit-btn">
            Loan Apply
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Form;
