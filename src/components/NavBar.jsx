import { useRef } from "react";
import { data } from "../data";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

export default function NavBar({ setSnacks }) {
  const searchRef = useRef();
  // TODO Search filteration

  function doSearch() {
    let targetSnack = data.filter((snack) => {
      if (snack.title.includes(searchRef.current.value)) return snack;
    });

    setSnacks(targetSnack);
  }

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="py-2"
      style={{ backgroundColor: "#e8e8e8" }}
    >
      <Container>
        <Navbar.Brand className="text-primary fw-bold fs-4">
          مطعم جديد
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto py-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="text"
              placeholder="ابحث ..."
              ref={searchRef}
              className="ms-2"
            />
            <Button variant="primary" onClick={doSearch}>
              ابحث
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
