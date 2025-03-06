import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
// import Container from "../ui/Container";

const MainLayout = () => {
  return (
    <>
      {/* <Container> */}
      <Header />
      <Outlet />
      <Footer />
      {/* </Container> */}
    </>
  );
};

export default MainLayout;
