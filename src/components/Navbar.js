import React from "react";
import "./css/Navbar.css";
import logo from "../images/logo.svg";
import right_arrow from "../images/to_right_arrow.svg";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <NavLink to="" className="navbar-brand" href="#">
          <img className="header-logo" src={logo} alt="deepc-logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </NavLink>
              <ul
                className="dropdown-menu full-width-dropdown"
                aria-labelledby="navbarDropdownMenuLink1"
              >
                <div className="container">
                  <NavLink className="dropdown-item" href="#">
                    <div className="icon">
                      <img src={right_arrow} alt="right-arrow" />
                    </div>
                    <div className="text">
                      <h5 className="">Gate</h5>
                      <p className="description">
                        Securly connect to your healthcare IT Systems And the AI
                        marketplace
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="dropdown-item" href="#">
                    <div className="icon">
                      <img src={right_arrow} alt="right-arrow" />
                    </div>
                    <div className="text">
                      <h5 className="">Cloud-Native Deployment Platform</h5>
                      <p className="description">
                        Access Radiology AI in a cost effective and scalable way
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="dropdown-item" href="#">
                    <div className="icon">
                      <img src={right_arrow} alt="right-arrow" />
                    </div>
                    <div className="text">
                      <h5 className="">Orchestration</h5>
                      <p className="description">
                        Ensure scans are automatically sent to the right AI
                        solution
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="dropdown-item" href="#">
                    <div className="icon">
                      <img src={right_arrow} alt="right-arrow" />
                    </div>
                    <div className="text">
                      <h5 className="">AI Marketplace</h5>
                      <p className="description">
                        Access commercial AI solutions from leading vendors
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="dropdown-item" href="#">
                    <div className="icon">
                      <img src={right_arrow} alt="right-arrow" />
                    </div>
                    <div className="text">
                      <h5 className="">Clinical Integrations</h5>
                      <p className="description">
                        Seamlessly integrate AI results with existing interfaces
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="dropdown-item" href="#">
                    <div className="icon">
                      <img src={right_arrow} alt="right-arrow" />
                    </div>
                    <div className="text">
                      <h5 className="">AI Evaluator</h5>
                      <p className="description">
                        Compare the performance of AI solutions for the same use
                        case
                      </p>
                    </div>
                  </NavLink>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Why deepcOS
              </NavLink>
              <ul
                className="dropdown-menu full-width-dropdown"
                aria-labelledby="navbarDropdownMenuLink2"
              >
                <div className="container divided">
                  <div className="left">
                    <h5>Clinical Inistitution</h5>
                    <div className="content-holder">
                      <NavLink className="dropdown-item" href="#">
                        <div className="icon">
                          <img src={right_arrow} alt="right-arrow" />
                        </div>
                        <div className="text">
                          <h5 className="">Radiologists</h5>
                          <p className="description">
                            Enrich your radiology workflow with AI
                          </p>
                        </div>
                      </NavLink>
                      <NavLink className="dropdown-item" href="#">
                        <div className="icon">
                          <img src={right_arrow} alt="right-arrow" />
                        </div>
                        <div className="text">
                          <h5 className="">Healthcare Management</h5>
                          <p className="description">
                            Generating attractive ROI with simplified AI
                            deployment
                          </p>
                        </div>
                      </NavLink>
                      <NavLink className="dropdown-item" href="#">
                        <div className="icon">
                          <img src={right_arrow} alt="right-arrow" />
                        </div>
                        <div className="text">
                          <h5 className="">Data Protection Officers</h5>
                          <p className="description">
                            Ensure personal health information is secure
                          </p>
                        </div>
                      </NavLink>
                      <NavLink className="dropdown-item" href="#">
                        <div className="icon">
                          <img src={right_arrow} alt="right-arrow" />
                        </div>
                        <div className="text">
                          <h5 className="">Medical Research Groups</h5>
                          <p className="description">
                            Enabling medical imaging and AI research projects
                          </p>
                        </div>
                      </NavLink>
                      <NavLink className="dropdown-item" href="#">
                        <div className="icon">
                          <img src={right_arrow} alt="right-arrow" />
                        </div>
                        <div className="text">
                          <h5 className="">Orchestration</h5>
                          <p className="description">
                            Ensure scans are automatically sent to the right AI
                            solution
                          </p>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div className="right">
                    <h5>PARTNERS</h5>
                    <NavLink className="dropdown-item" href="#">
                      <div className="icon">
                        <img src={right_arrow} alt="right-arrow" />
                      </div>
                      <div className="text">
                        <h5 className="">AI Marketplace</h5>
                        <p className="description">
                          Access commercial AI solutions from leading vendors
                        </p>
                      </div>
                    </NavLink>
                    <NavLink className="dropdown-item" href="#">
                      <div className="icon">
                        <img src={right_arrow} alt="right-arrow" />
                      </div>
                      <div className="text">
                        <h5 className="">Clinical Integrations</h5>
                        <p className="description">
                          Seamlessly integrate AI results with existing
                          interfaces
                        </p>
                      </div>
                    </NavLink>
                    <NavLink className="dropdown-item" href="#">
                      <div className="icon">
                        <img src={right_arrow} alt="right-arrow" />
                      </div>
                      <div className="text">
                        <h5 className="">AI Evaluator</h5>
                        <p className="description">
                          Compare the performance of AI solutions for the same
                          use case
                        </p>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="" className="nav-link" href="#">
                AI Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="" className="nav-link" href="#">
                Events
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink3"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn
              </NavLink>
              <ul
                className="dropdown-menu full-width-dropdown"
                aria-labelledby="navbarDropdownMenuLink3"
              >
                <div className="container">
                  <NavLink className="dropdown-item" href="#">
                    <div className="icon">
                      <img src={right_arrow} alt="right-arrow" />
                    </div>
                    <div className="text">
                      <h5 className="">Gate</h5>
                      <p className="description">
                        Securly connect to your healthcare IT Systems And the AI
                        marketplace
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="dropdown-item" href="#">
                    <div className="icon">
                      <img src={right_arrow} alt="right-arrow" />
                    </div>
                    <div className="text">
                      <h5 className="">Cloud-Native Deployment Platform</h5>
                      <p className="description">
                        Access Radiology AI in a cost effective and scalable way
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="dropdown-item" href="#">
                    <div className="icon">
                      <img src={right_arrow} alt="right-arrow" />
                    </div>
                    <div className="text">
                      <h5 className="">Orchestration</h5>
                      <p className="description">
                        Ensure scans are automatically sent to the right AI
                        solution
                      </p>
                    </div>
                  </NavLink>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink4"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </NavLink>
              <ul
                className="dropdown-menu full-width-dropdown"
                aria-labelledby="navbarDropdownMenuLink4"
              >
                <div className="container">
                  <NavLink className="dropdown-item" href="#">
                    <div className="icon">
                      <img src={right_arrow} alt="right-arrow" />
                    </div>
                    <div className="text">
                      <h5 className="">Gate</h5>
                      <p className="description">
                        Securly connect to your healthcare IT Systems And the AI
                        marketplace
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="dropdown-item" href="#">
                    <div className="icon">
                      <img src={right_arrow} alt="right-arrow" />
                    </div>
                    <div className="text">
                      <h5 className="">Cloud-Native Deployment Platform</h5>
                      <p className="description">
                        Access Radiology AI in a cost effective and scalable way
                      </p>
                    </div>
                  </NavLink>
                </div>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">
              AI Consulation
            </button>
            <button className="btn btn-outline-success" type="submit">
              Try Now
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
