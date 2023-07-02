export const validations = (formData) => {
  console.log("mail", formData);
  const newErrors = {};
  for (const fieldName in formData) {
    if (!isNotEmpty(formData[fieldName])) {
      if(fieldName === "country"){continue;}
	    newErrors[fieldName] = "This field is required";
    }
  }
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(formData.email).toLowerCase())) {
    newErrors.email = "Please Enter valid mail Address";
  }

  if (formData.age < 18 && formData.age >= 100) {
    newErrors.age = "Your Age doesn't meet requirements";
  }
  if (isNaN(formData.age)) {
    newErrors.age = "Enter valid Age It should not have string";
  }

  const passRe =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (formData.password && !passRe.test(String(formData.password))) {
    newErrors.password =
      "Password didn't meet requirements It should have one small  & capital letter, number, special character with length 8";
  }
  return newErrors;
};

const isNotEmpty = (value) => {
  let val = String(value);
  if (val.trim() !== "") {
    return true;
  }
};
