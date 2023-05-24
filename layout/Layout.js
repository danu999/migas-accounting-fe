import Sidebar from "../components/Sidebar";
import { useSidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const { isLoggedIn } = useSidebarContext();
  const router = useRouter();

  // if (!isLoggedIn) {
  //   return null;
  // }

  useEffect(() => {
    if (!isLoggedIn && router.pathname !== "/login") {
      // Redirect to /login page if user is not logged in
      router.push("/login");
    }
  }, [isLoggedIn, router]);

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
