import React from "react";
import "./css/Main.css";
function Main() {
  return (
    <div className="Main container">
      <div className="main-section-heading">
        <input type="text" placeholder="Search" />
        <div className="filter-results">
          Showing <span>67</span> results of 67
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort By
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Name (A/Z)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Name (Z/A)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Oldest
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Newest
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="filters">
          <div className="filter-block">
            <h6 className="filter-title">Regulatory</h6>
            <div className="filter-options">
              <a className="option">FDA</a>
              <a className="option">CE</a>
            </div>
          </div>
          <div className="filter-block">
            <h6 className="filter-title">Modality</h6>
            <div className="filter-options">
              <a className="option">US</a>
              <a className="option">MMG</a>
              <a className="option">SPECT</a>
              <a className="option">PET</a>
              <a className="option">MRI</a>
              <a className="option">CT</a>
              <a className="option">XR</a>
            </div>
          </div>
          <div className="filter-block">
            <h6 className="filter-title">Body Part</h6>
            <div className="filter-options">
              <a className="option">KNEE</a>
              <a className="option">LUNGS</a>
              <a className="option">Whole Body</a>
              <a className="option">heart</a>
              <a className="option">Bones</a>
              <a className="option">LEG</a>
              <a className="option">Spine</a>
              <a className="option">Prostate</a>
              <a className="option">Hip</a>
              <a className="option">Breast</a>
              <a className="option">Chest</a>
              <a className="option">Brain</a>
            </div>
          </div>
          <div className="filter-block">
            <h6 className="filter-title">Clinical Applications</h6>
            <div className="filter-options">
              <a className="option">MSK</a>
              <a className="option">Neurology</a>
              <a className="option">Oncology</a>
              <a className="option">Cardiopulmonary</a>
              <a className="option">Acquisition</a>
            </div>
          </div>
        </div>
        <div className="results">
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/656604762b0671febc729a3d_Avicenna%20PE.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/65a511409edc1544bd48b284_coreline%20LCS%20compressed%20copy.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/65a51c739bb007910e2eeaff_IBL%20Squirrel%20compressed.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/65ba2671327dfec11ecbad99_infervision%20DR%20Chest.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/656604762b0671febc729a3d_Avicenna%20PE.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/640f278088b85e456440202c_gleamer%20v3.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/64108a21ccaabf7d8a0a29aa_lunit%20cxr%20Large.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/657c0e1fa4b691f8dabd6490_mediaire%20prostate%20main.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/62ebc082cb265c9a4e579e52_CoLumbo%201.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/62ebc12391d6ba3510395cf4_Lunit%20Insight%20MMG%201.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/64a85515d7a8ec4959a0c667_Gleamer%20Boneview%20Measurements.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/656604762b0671febc729a3d_Avicenna%20PE.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/656604762b0671febc729a3d_Avicenna%20PE.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/656604762b0671febc729a3d_Avicenna%20PE.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/656604762b0671febc729a3d_Avicenna%20PE.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/656604762b0671febc729a3d_Avicenna%20PE.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/656604762b0671febc729a3d_Avicenna%20PE.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets-global.website-files.com/602d060c40c9343c9f8bcc7a/656604762b0671febc729a3d_Avicenna%20PE.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">CINA Chest</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
