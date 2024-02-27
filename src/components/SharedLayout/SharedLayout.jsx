import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components"

const StyledLink = styled(NavLink)`
color: black;
text-decoration: none;
font-size: 24px;
margin-left: 15px;

&.active{
  color: red;
}
`

export default function SharedLayout() {
  return (
    <>
      <header>
        <nav>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/movies'>Movies</StyledLink>
        </nav>
        <hr></hr>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}