import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Sidebar />
      <main className='layout__main-content'>{children}</main>
    </div>
  );
};

export default Layout;
