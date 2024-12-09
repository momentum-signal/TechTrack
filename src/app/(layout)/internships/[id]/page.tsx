"use client";

import { useParams } from "next/navigation";
import React from "react";

const Internship = () => {
  const params = useParams<{ id: string }>();
  return (
    <div>
      <h1>Internships {params.id}</h1>
    </div>
  );
};

export default Internship;
