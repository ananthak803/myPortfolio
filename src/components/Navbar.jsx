import { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Menu open={menuOpen} setOpen={setMenuOpen}/>
      <Outlet context={{ menuOpen }} />
    </>
  );
}


