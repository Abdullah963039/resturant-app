import { Card, Row, Col, Stack } from "react-bootstrap";

const formatter = new Intl.NumberFormat("ar-SY", {
  maximumFractionDigits: 0,
});

export default function SnackCard({ snack }) {
  const { title, description, snackImage, price } = snack;

  return (
    <Card>
      <Row className="g-3">
        <Col sm={3}>
          <Card.Img alt="Snack Image" src={snackImage} />
        </Col>
        <Col sm={9}>
          <Card.Header className="bg-white pe-0 pb-2">
            <Stack direction="horizontal" className="justify-content-between">
              <Card.Title>{title}</Card.Title>
              <Card.Text className="text-primary fs-6 fw-bold">
                {formatter.format(price) + " "}ل.س
              </Card.Text>
            </Stack>
          </Card.Header>
          <Card.Text className="text-muted fs-5 p-2">{description}</Card.Text>
        </Col>
      </Row>
    </Card>
  );
}
