"use client"; // This marks the component as a Client Component

import React from "react";
import { useSearchParams } from "next/navigation"; // Updated import
import "@/styles/App.css"; // Ensure this imports your CSS
import Link from "next/link";

const SemesterPage: React.FC = () => {
  const searchParams = useSearchParams();
  const branch = searchParams.get("branch"); // Use the extracted branch parameter

  return (
    <div className="container">
      {Array.from({ length: 8 }).map((_, index) => (
        <Link
          key={index}
          href={`/branch/semester/subject?semester=${index + 1
            }&branch=${branch}`}
          passHref
        >
          <div className="element" style={{ backgroundColor: "#8934eb" }}>
            <span
              style={{
                color: "white",
                fontSize: "224px",
                textAlign: "center",
                display: "block",
              }}
            >
              {index + 1}
            </span>
            <span
              style={{
                color: "white",
                fontSize: "54px",
                textAlign: "center",
                display: "block",
              }}
            >
              {"Semester"}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SemesterPage;
