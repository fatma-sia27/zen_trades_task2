import React, { useState, useEffect, useRef } from "react";

import Hit from "./chooseFile";
import Hit1 from "./specifyFormat";
import Hit2 from "./displayHandling";

export default function Step1(props) {
  return (
    <>
      <h1 className="ml-10 mt-10">Import Products</h1>

      <div className="row">
        <div className="col-6">
          <section className="signin">
            <Hit />
          </section>
        </div>
        <div className="col-5">
          <section className="signin-2">
            <Hit1 />
          </section>
        </div>
      </div>
      <section className="signin-3">
        <Hit2 />
      </section>
      <div className="row">
        <div className="col-1">
          <div className="form-group form-buttom">
          <a className="form-submit-2" href="/table">
                       Next
                      </a>
          </div>
        </div>
        <div className="col-4">
          <div className="form-group form-buttom">
            <button
              className="form-submit-1"
              style={{ width: "90px", marginLeft: "900px" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
