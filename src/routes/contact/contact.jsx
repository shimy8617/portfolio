import React from "react";

import { Container } from "react/boostrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export const Contact = () => {
  return (
    <Container>
      <h1>Contact me</h1>
      <div>
        <a href="http://linkedin.com">
          <FontAwesomeIcon icon={brands("linkedin")} />
        </a>
      </div>
    </Container>
  );
};
