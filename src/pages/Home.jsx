import MainLayout from "../layouts/MainLayout";
import NavLayout from "../layouts/NavLayout";
import Footeryout from "../layouts/Footeryout"


export default function Home() {
  return (
    <div>
      <NavLayout />
      <MainLayout />
      <Footeryout />
    </div>
  )
}
