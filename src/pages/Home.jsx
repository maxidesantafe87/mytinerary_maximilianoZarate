import MainLayout from "../layouts/MainLayout";
import NavLayout from "../layouts/NavLayout";
import Footeryout from "../layouts/Footeryout";


export default function Home() {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw]">
      <NavLayout />
      <MainLayout />
      <Footeryout />
    </div>
  )
}
