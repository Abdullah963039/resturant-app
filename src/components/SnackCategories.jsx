import { Stack, Button } from "react-bootstrap";
import { data } from "../data";

export default function SnackCategories({ setSnacks }) {
  const categories = ["الكل", ...new Set(data.map((snack) => snack.category))];

  function getSnacksByCategory(category) {
    if (category !== "الكل") {
      setSnacks([...data.filter((snack) => snack.category === category)]);
    } else {
      setSnacks(data);
    }
  }
  return (
    <nav className="mb-5">
      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-center flex-wrap"
      >
        {categories.map((category, index) => (
          <Button
            variant="outline-primary"
            key={index}
            onClick={() => getSnacksByCategory(category)}
          >
            {category}
          </Button>
        ))}
      </Stack>
    </nav>
  );
}
