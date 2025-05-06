import React from 'react';

function Dashboard() {
    return (
        <div className="d-flex" id="wrapper">
            <div id="page-content-wrapper" className="flex-grow-1">
                <div className="container-fluid mt-4">
                    <h1 className="mt-4">Dashboard</h1>
                    <p>This is your dashboard where you can manage policies, view stats, and more.</p>

                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Policies</h5>
                                    <p className="card-text">View and manage all insurance policies.</p>
                                    <a href="#" className="btn btn-primary">Go</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Users</h5>
                                    <p className="card-text">Manage user accounts and roles.</p>
                                    <a href="#" className="btn btn-primary">Go</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Reports</h5>
                                    <p className="card-text">Generate monthly reports and analytics.</p>
                                    <a href="#" className="btn btn-primary">Go</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
