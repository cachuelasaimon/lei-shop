import React from "react";
import styled from "styled-components";
import { Grid, Container } from "@mui/material";

// Custom Components
import { Carousel } from "components";

export default function HomePage() {
  return (
    <StyledContainer>
      <Carousel />
      <StyledGrid container>
        <Grid item></Grid>
      </StyledGrid>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  padding-bottom: 2rem;
  width: 100%;
  overflow-x: hidden;
`;

const StyledGrid = styled(Grid)`
  padding-top: 2rem;
`;
