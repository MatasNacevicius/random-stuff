import React from "react";
import { useContext } from "react";
import { SenelioKalba } from "../contexts/SenelisSako";
import { SenelisAtimaSkaicius } from "../contexts/SenelisAtimaSkaicius";

const Vaikas = () => {
  const senelioKalbos = useContext(SenelioKalba);
  const senelisAtimaSkaiciu = useContext(SenelisAtimaSkaicius);

  return (
    <div className="vaikas">
      Vaikas sako: {senelioKalbos.text} {senelioKalbos.senelisSkaiciuoja}
      {" / "}
      {senelisAtimaSkaiciu}
    </div>
  );
};

export default Vaikas;
