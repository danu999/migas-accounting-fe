import Sidebar from "../components/Sidebar";
import { useSidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const { isLoggedIn } = useSidebarContext();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  if (router.pathname === "/login" || !isLoggedIn) {
    return null; // Render nothing if the current page is /login or user is not logged in
  }

  return (
    <div className='layout'>
      <Sidebar />
      <main className='layout__main-content'>{children}</main>
    </div>
  );
};

export default Layout;
