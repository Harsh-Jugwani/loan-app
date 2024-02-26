export const checkValidDataForm = (firstname,lastname,email,amount_req,duration) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    const isFirstnameValid = /^[a-z ,.'-]+$/.test(firstname);
    const isLastnameValid = /^[a-z ,.'-]+$/.test(lastname);
   
  
    if (!isEmailValid) return "Email ID is not valid";
    if (!isFirstnameValid) return "First Name is not valid";
    if (!isLastnameValid) return "Last Name is not valid";

    return null;
  };