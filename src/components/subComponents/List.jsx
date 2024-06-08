import { Button, Card } from "react-bootstrap";


export const NewsCard = (props) => {
    return (
        <div className="col-md-4 mb-3 ">
          <Card style={{ width: "18rem" }} className="card-wrap">
            <Card.Img className="news-img"
              variant="top"
              src={props.productInfo.image}
            />
            <Card.Body style={{ color: "black" }}>
              <Card.Text>
              {props.productInfo.name}
              </Card.Text>
              <Button
                className="btns"
                buttonStyle="btn-black-box"
                buttonSize="btn-m"
              >
                Read More 
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
};