import { SidebarProvider, useSidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { isLoggedIn } = useSidebarContext();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
