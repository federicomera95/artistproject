const email = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);
const password = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d.@$!%*?&]{8,20}$/
);
const phone = new RegExp(/^[0-9]{8,10}$/);

export { email, password, phone };
