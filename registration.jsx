function Registration() {
  return (
    <div className="page">
      <div className="form-box">
        <h2>Registration Form</h2>

        <form>
          <label>Enter Your Name</label>
          <input type="text" placeholder="Enter your name" /> <br />

          <label>Enter Your Email</label>
          <input type="email" placeholder="Enter your email" /> <br />

          <label>Enter Your Cell Number</label>
          <input type="text" placeholder="Enter your cell number" /> <br />

          <label>Enter Your Address</label>
          <textarea placeholder="Enter your address"></textarea> <br />

          <label>Date of Registration</label>
          <input type="date" /> <br />  

          <label>Gender</label>
          <div>
            <input type="radio" name="gender" />
            <span> Male</span>

            <input type="radio" name="gender" />
            <span> Female</span>
          </div>

          <button type="button">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Registration