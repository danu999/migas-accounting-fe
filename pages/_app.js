import { SidebarProvider, useSidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { isLoggedIn } = useSidebarContext();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     // Redirect to /login page if user is not logged in
  //     router.push("/login");
  //   }
  // }, [isLoggedIn, router]);

  useEffect(() => {
    if (!isLoggedIn && router.pathname !== "/login") {
      // Redirect to /login page if user is not logged in
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
