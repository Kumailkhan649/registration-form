import { useState } from "react"

function Registration() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cell, setCell] = useState("")
  const [address, setAddress] = useState("")
  const [date, setDate] = useState("")
  const [gender, setGender] = useState("")

  return (
    <div className="page">

      <div className="form-box">

        <h2>Registration Form</h2>
        <form>


          <label>Enter Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />                                                        <br />


          <label>Enter Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />                                                        <br />



          <label>Enter Your Cell Number</label>
          <input
            type="text"
            placeholder="Enter your cell number"
            value={cell}
            onChange={(event) => setCell(event.target.value)}
          />                                                        <br />



          <label>Enter Your Address</label>
          <textarea
            placeholder="Enter your address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          ></textarea>                                               <br />



          <label>Date of Registration</label>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />                                                        <br />



          <label>Gender</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(event) => setGender(event.target.value)}
            />
            <span> Male </span>


            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(event) => setGender(event.target.value)}
            />
            <span> Female </span>
            <p>{gender}</p>


          </div>
          <br />

          <button type="button">
            Register
          </button>





        </form>
      </div>

    </div>
  )
}

export default Registration