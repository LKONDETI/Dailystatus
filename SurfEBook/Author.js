import { Card } from "reactstrap";
import CardBody from "reactstrap";
import CardHeader from "reactstrap";
import CardSubtitle from "reactstrap";
import CardText from "reactstrap";
import CardLink from "reactstrap";

function Author() {
  return (
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardHeader>Card Title</CardHeader>
        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Another Link</CardLink>
      </CardBody>
    </Card>
  );
}

export default Author;