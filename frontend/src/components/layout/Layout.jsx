import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto px-0">
                    <div className="sidebar p-3 max-dash" >
                        <div className="d-flex align-items-center mb-4">
                            <div className="logo-grid">
                                <div className="logo-square"></div>
                                <div className="logo-square"></div>
                                <div className="logo-square"></div>
                                <div className="logo-square"></div>
                            </div>
                            <span className="fs-4 ms-2">Dashboard</span>
                        </div>

                        <ul className="nav flex-column mb-5">
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center" href="/">
                                    <i className="fas fa-home me-3"></i>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center" href="/profile">
                                    <i className="fas fa-user me-3"></i>
                                    Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center" href="/books">
                                    <i className="fas fa-comment me-3"></i>
                                    Books
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center" href="#">
                                    <i className="fas fa-clock me-3"></i>
                                    History
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center" href="#">
                                    <i className="fas fa-tasks me-3"></i>
                                    Tasks
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center" href="#">
                                    <i className="fas fa-users me-3"></i>
                                    Communities
                                </a>
                            </li>
                        </ul>

                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center" href="#">
                                    <i className="fas fa-cog me-3"></i>
                                    Settings
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center" href="#">
                                    <i className="fas fa-question-circle me-3"></i>
                                    Support
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center" href="#">
                                    <i className="fas fa-shield-alt me-3"></i>
                                    Privacy
                                </a>
                            </li>
                        </ul>



                    </div>

                </div>

                <div className="col ps-0">
                    <nav className="navbar-light shadow">
                        <div className="nav-top">
                            <div className="search-container flex-grow-1 mx-4">
                                <input
                                    type="text"
                                    className="form-control bg-light rounded-5"
                                    placeholder="Search..."
                                />
                                <i className="fas fa-search"></i>
                            </div>
                            <div className="user-section">
                                <div className="user-info">
                                    <a className=" position-relative" href="#">
                                        <i className="fas fa-bell me-4"></i>
                                    </a>
                                    <div className="profile-circle me-2">M</div>
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="fw-medium">Cleyton Parente</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                            <li><a className="dropdown-item" href="#">Logout</a></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-primary rounded-5">New</button>
                                    <button className="btn btn-primary rounded-5">Upload</button>
                                    <button className="btn btn-primary rounded-5">Share</button>
                                </div>
                            </div>
                        </div>

                        {/* <div className="welcome-row">
                            <div className="profile-circle profile-circle-large me-3">M</div>
                            <div>
                                <div className="text-secondary small">Hi there,</div>
                                <div className="fs-5 fw-bold mb-0">Cleyton Parente (@coparente)</div>
                            </div>
                        </div> */}

                    </nav>

                    <main>
                        <Outlet />
                    </main>

                </div>

            </div>
        </div>
    )
}

export default Layout
