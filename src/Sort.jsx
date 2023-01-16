function Sort(props) {
  return (
    <button
      className="sortBtn"
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
    </button>
  );
}

export default Sort;
