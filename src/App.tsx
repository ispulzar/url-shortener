import Navbar from "./pages/components/Navbar";
import EditPage from "./pages/EditPage";
import PrincipalPage from "./pages/PrincipalPage";
import MobileNavbar from "./pages/components/MobileNavbar";
import useWindowWidth from "./pages/components/hooks/useWindowWidth";

function App() {
  const [windowWidth] = useWindowWidth();

  return (
    <>
      <PrincipalPage>
        {windowWidth >= 800 ? <Navbar /> : <></>}
          <EditPage />
        {windowWidth < 800 ? <MobileNavbar /> : <></>}
      </PrincipalPage>
    </>
  );
}

export default App;
