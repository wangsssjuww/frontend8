import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({children}) {
    return ( 
        <>
            <Sidebar>
                <Navbar />
            {children}
            </Sidebar>
        </>
     );
}

export default Layout;