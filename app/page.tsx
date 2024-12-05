import Image from "next/image";
import Link from "next/link";
import Navbar from "@/component/Navbar";



export default function Home() {
  return (

  <div>
    <Navbar/>
    
    <h1 className=" font-bold">Find Tutor</h1>
    <Link href={"/register"}>Register pag</Link>
   
  </div>
  );
}
