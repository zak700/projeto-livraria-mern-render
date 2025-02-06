

function Profile() {
  return (

    <div className="p-2">
      <nav aria-label="breadcrumb" className='m-2'>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">profile</li>
        </ol>
      </nav>
      {/* <div className="bg-white rounded shadow-sm p-4"> */}
      <div className="card rounded shadow-sm">
        <div className="card-header bg-secondary text-white">
          Profile
        </div>
        <div className="card-body">

          <div className="mb-3 row">
            <label  className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text"  className="form-control-plaintext" id="staticEmail" value="Cleyton Parente" />
            </div>
          </div>
          <div className="mb-3 row">
            <label  className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text"  className="form-control-plaintext" id="staticEmail" value="email@example.com" />
            </div>
          </div>
          <div className="mb-3 row">
            <label  className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" />
            </div>
          </div>

        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Profile
