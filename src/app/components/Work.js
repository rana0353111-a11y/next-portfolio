"use client";
import React from "react";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  { img: "/assets/Admin.jpg", link: "https://shop-admin-dashboard-iota.vercel.app", title: "Shop Admin Dashboard" },
  { img: "/assets/trustpilot.png", link: "https://trustpilot-gray.vercel.app", title: "Trustpilot Clone" },
  { img: "/assets/nextjs-ui.png", link: "https://nextjs-ui-eta.vercel.app", title: "Next.js UI" },
  { img: "/assets/grocer.png", link: "https://grocer-app-ten.vercel.app", title: "Grocer App" },
  { img: "/assets/school.png", link: "https://school-management-demo.vercel.app", title: "School Management" },
];

export default function Work() {
  return (
    <>
      <style>{`.project-card:hover .overlay { opacity: 1 !important; }`}</style>
      <div style={{ textAlign: "center", marginTop: "40px", padding: "0 10%" }}>
        <h4 style={{ marginBottom: "8px", fontSize: "1.25rem", fontFamily: "Ovo" }}>My Portfolio</h4>
        <h2 style={{ marginBottom: "16px", fontSize: "1.5rem", fontFamily: "Ovo" }}>My Latest Work</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 30px", lineHeight: "1.7", color: "#333" }}>
          Welcome to my web development portfolio. Explore a collection of projects showcasing my experience in web development.
        </p>
        <div id="work" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ position: "relative", width: "220px", height: "160px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", cursor: "pointer" }}>
              <Image src={project.img} alt={project.title} fill style={{ objectFit: "cover" }} />
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", opacity: 0, transition: "0.3s ease", textDecoration: "none" }}>
                <FaArrowUpRightFromSquare style={{ color: "#fff", fontSize: "26px" }} />
                <span style={{ color: "#fff", fontSize: "13px", fontWeight: "500" }}>{project.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
