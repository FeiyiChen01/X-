import React from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AirplaneEnginesFill, ArchiveFill, PlusCircleFill, ThreeDots } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <Image fluid rounded mx="auto" d="block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rUFSU7jA2arNvpY9QuUXZJQ4E9e8QdcXxw&usqp=CAU" alt="Island Snow Hawaii Logo" width={200} />
      </Nav>
      <Nav className="justify-content-end">
        <Button variant="light"><AirplaneEnginesFill />Dashboard</Button>
        <Button variant="light"><PlusCircleFill />Create new...</Button>
        <Button variant="light"><ArchiveFill />Archive</Button>
        <NavDropdown title={<ThreeDots />}>
          <NavDropdown.Item>Setting</NavDropdown.Item>
          <NavDropdown.Item>My teams</NavDropdown.Item>
          <NavDropdown.Item>River</NavDropdown.Item>
          <NavDropdown.Item>Language</NavDropdown.Item>
          <hr />
          <NavDropdown.ItemText>Select active team</NavDropdown.ItemText>
          <NavDropdown.Item>Create a Team</NavDropdown.Item>
          <hr />
          <NavDropdown.Item>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);
export default TopMenu;
