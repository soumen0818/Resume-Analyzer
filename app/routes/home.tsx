import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Welcome to Resumind!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover bg-center bg-no-repeat">
       <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Application & Resume Ratings</h1>
          <h2>Review your Resume and Check AI-Powered Suggestions</h2>
        </div>
      </section>
    </main>
  );
}

