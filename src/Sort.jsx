import data from './data.js';

function Sort(props){
    return(
        <button onClick = {() => {
            let byTitle = [...data].slice(0);

            byTitle.sort(function(a,b) {
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
            },
            props.setShoes(byTitle));
        }}>Sort</button>
    )   
}

export default Sort;