function Registration() {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">

      <div className="col-md-6 col-lg-5">

        <div className="card border-0 shadow-lg rounded-4 p-4">

          <h2 className="text-center fw-bold mb-4 text-dark">
            Registration Form
          </h2>

          <form>





            <div className="mb-3">
              <label className="form-label">
                Enter Your Name
              </label>

              <input
                type="text"
                className="form-control rounded-3"
                placeholder="Enter your name"
              />
            </div>





            <div className="mb-3">
              <label className="form-label">
                Enter Your Email
              </label>

              <input
                type="email"
                className="form-control rounded-3"
                placeholder="Enter your email"
              />
            </div>





            <div className="mb-3">
              <label className="form-label ">
                Enter Your Cell Number
              </label>

              <input
                type="text"
                className="form-control rounded-3"
                placeholder="Enter your cell number"
              />
            </div>





            <div className="mb-3">
              <label className="form-label">
                Enter Your Address
              </label>

              <textarea
                className="form-control rounded-3"
                rows="3"
                placeholder="Enter your address"
              ></textarea>
            </div>




            <div className="mb-3">
              <label className="form-label">
                Date of Registration
              </label>

              <input
                type="date"
                className="form-control rounded-3"
              />
            </div>






            <div className="mb-4">
              <label className="form-label d-block">
                Gender
              </label>

              <div className="form-check form-check-inline">

                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                />

                <label className="form-check-label">
                  Male
                </label>

              </div>
              <div className="form-check form-check-inline">

                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                />

                <label className="form-check-label">
                  Female
                </label>





              </div>

            </div>

            <button
              type="button"
              className="btn btn-primary w-100 py-2 rounded-3 fw-semibold"
            >
              Register
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Registration