import React from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const imagePath = (src: string) => `${basePath}${src}`;

const developers = [
  {
    name: "Amin Rahman",
    role: "Frontend Engineer",
    bio: "Building delightful user interfaces and components.",
  },
  {
    name: "Sara Khan",
    role: "Backend Engineer",
    bio: "APIs, databases and scalable server-side systems.",
  },
  {
    name: "Rafiq Ahmed",
    role: "Full-Stack Engineer",
    bio: "Bridges frontend and backend to deliver end-to-end features.",
  },
];

export default function DevelopersPage() {
  return (
    <main className="section developers" id="developers">
      <div className="heading">
        <label>OUR TEAM</label>
        <h2>Developers</h2>
        <p>Meet the people building BugLeaf Software.</p>
      </div>

      <div className="dev-grid">
        {developers.map((d) => (
          <article className="dev-card" key={d.name}>
            <div className="avatar" aria-hidden>
              {d.name
                .split(" ")
                .map((p) => p[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div className="dev-info">
              <h3>{d.name}</h3>
              <small className="muted">{d.role}</small>
              <p>{d.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
