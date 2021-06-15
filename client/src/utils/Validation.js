export const ValidateFname = (fname)=>{
  return fname.length > 0
}

export const ValidateLname = (lname) => {
  return lname.length > 0
}


export const ValidateEmail = (email) => {
  const re = /\S+@\S+\.\S+/i;
  return re.test(email);
}


export const ValidatePassword = (password) => {
  return password.length>8
}
