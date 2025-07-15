import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">StudentPortal</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link class="nav-link" to="/a">Add Student</Link>
                            <Link class="nav-link" to="/s">Search Student</Link>
                            <Link class="nav-link" to="/d"> Delete Student</Link>
                            <Link class="nav-link" to="/v">View Students</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav