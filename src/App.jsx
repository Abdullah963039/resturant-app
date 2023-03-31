import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container, Stack } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SnackCategories from "./components/SnackCategories";
import SnackCard from "./components/SnackCard";
import { data } from "./data";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";

function App() {
  const [snacks, setSnacks] = useState(data);

  return (
    <div>
      <NavBar snacks={snacks} setSnacks={setSnacks} />
      <Container>
        <Header />
        <Tada>
          <SnackCategories setSnacks={setSnacks} />
        </Tada>
        <Stack gap={4}>
          <Fade right>
            {snacks.length > 0 ? (
              snacks.map((snack) => <SnackCard snack={snack} key={snack.id} />)
            ) : (
              <p className="text-center py-5 fs-2">لا يوجد أصناف</p>
            )}
          </Fade>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
