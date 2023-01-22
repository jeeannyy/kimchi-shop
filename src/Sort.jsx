import { Button } from "react-bootstrap";

function Sort(props) {
  return (
    <Button
      variant="outline-success"
      style={{ margin: "30px 0 30px 15px", fontWeight: "900" }}
      onClick={() => {
        let byTitle = [...props.shoes].slice(0);
        byTitle.sort(function (a, b) {
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        }, props.setShoes(byTitle));
      }}
    >
      A - Z
    </Button>
  );
}

export default Sort;
