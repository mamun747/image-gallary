import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Navbar from "@/components/nav";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-sky-200">
      <div className="w-full max-w-screen-2xl mx-auto p-20 bg-slate-100 rounded-2xl shadow-lg">
        <Navbar/>
        <Header/>
        <Gallery/>
      </div>
    </main>
  );
}