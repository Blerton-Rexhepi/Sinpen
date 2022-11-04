import Head from "next/head";
import Nav from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>SinPen</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>

      {/*Ketu posht kemi ber import iconat */}
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
{/* 
      <Nav/> */}
      <div className="bg-slate-600">
        <img src="/bg.png" className="flex" />
      <a href="/Shop"  className="mt-[-500px]  text-3xl font-bold py-2 px-4 rounded hover:text-gary-100 m-auto flex justify-center items-center h-screen cursor-pointer">Shop now</a>
      </div>
    </div>
  );
}
