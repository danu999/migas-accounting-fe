import Sidebar from "../components/Sidebar";
import { useSidebarContext } from "@/context/SidebarContext";

const Layout = ({ children }) => {
  const { isLoggedIn } = useSidebarContext();

  if (!isLoggedIn) {
    return null; // Render nothing if user is not logged in
  }
  return (
    <div className='layout'>
      <Sidebar />
      <main className='layout__main-content'>{children}</main>
    </div>
  );
};

export default Layout;
