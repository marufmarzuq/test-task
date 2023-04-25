import React from "react";

const Create = ({ values, handleInputchange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="single-input">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              required
              value={values?.name}
              onChange={(e) => handleInputchange("name", e.target.value)}
            />
          </div>
          <div className="single-input">
            <label htmlFor="sectors">Sectors</label>
            <input
              id="sectors"
              type="text"
              required
              value={values?.sectors}
              onChange={(e) => handleInputchange("sectors", e.target.value)}
            />
          </div>
          <div className="single-input terms">
            <input
              type="checkbox"
              id="terms"
              required
              checked={values?.agree_to_terms}
              onChange={(e) =>
                handleInputchange("agree_to_terms", e.target.checked)
              }
            />
            <label htmlFor="terms">Agree to terms</label>
          </div>
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default Create;
