import { useEffect, useState } from "react";

export default function ProductCategory(props) {


  const [category, setCategory] = useState([[], [], []])
  const [color, setColor] = useState(['', '', '']);


  useEffect(() => {
    fetch(`data/mainCategory.json `)

      .then((res) => res.json())
      .then(data => {
        let copy = [...category]
        copy[0] = data
        setCategory(copy)
        console.log(copy);
      })
      .catch(() => { console.log('error') });


  }, []);


  let onSecondCategory = (e) => {
    fetch(`data/middle/${e.target.value}.json `)
      .then((res) => res.json())
      .then(data => {
        let copy = [...category]
        copy[1] = data
        setCategory(copy)
      })
      .catch(() => { console.log('error') });
  }
  let onLastCategory = (e) => {
    fetch(`data/last/${e.target.value}.json `)
      .then((res) => res.json())
      .then(data => {
        let copy = [...category]
        copy[2] = data
        setCategory(copy)

      })
      .catch(() => { console.log('error') });
  }

  let handleClick = (e, i) => {
    let copy = [...color]
    copy[i] = e.target.value
    setColor(copy)
  }
  return (
    <div className={props.class}>

      <div>
        {category[0].map((v, i) =>
          <button value={v.value} className={color[0] === v.value ? 'on' : ''} type="button" key={i}
            onClick={(e) => {
              handleClick(e, 0)
              onSecondCategory(e)
            }}>{v.main}
          </button>)}
      </div>

      <div>
        {category[1].map((v, i) =>
          <button value={v.middleValue} className={color[1] === v.middleValue ? 'on' : ''} type="button" key={i}
            onClick={(e) => {
              handleClick(e, 1)
              onLastCategory(e)
            }}>{v.middle}
          </button>)}
      </div>

      <div>
        {category[2].map((v, i) =>
          <button value={v.lastValue} className={color[2] === v.lastValue ? 'on' : ''} type="button" key={i}
            onClick={(e) => {
              handleClick(e, 2)
              onLastCategory(e)
            }}>{v.last}
          </button>)}
      </div>

    </div>
  );
}