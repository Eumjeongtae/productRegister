import { useEffect, useState } from "react";

export default function ProductCategory(props) {

  const [mainCategory, setMainCategory] = useState([]);
  const [middleCategory, setMiddleCategory] = useState([]);
  const [color, setColor] = useState(['','','']);

  useEffect(() => {
    fetch(`data/mainCategory.json `)

      .then((res) => res.json())
      .then(data => {
        setMainCategory(data)
      })
      .catch(() => { console.log('error') });


  }, []);

  let handleClick = (e,i) => {
    let copy = [...color]
    copy[i] = e.target.value
    setColor(copy)
  }
  let onSecondCategory = (e) => {
    fetch(`data/middle/${e.target.value}.json `)
      .then((res) => res.json())
      .then(data => {
        setMiddleCategory(data)
      })
      .catch(() => { console.log('error') });
  }
  return (
    <div className={props.class}>
      <div>
        {mainCategory.map((v, i) =>
          <button value={v.value} className={color[0] === v.value ? 'on' : ''} type="button"  key = {i}
            onClick={(e) => {
              handleClick(e,0)
              onSecondCategory(e)
            }}>{v.main}
          </button>)}
      </div>
      <div>
        {middleCategory.map((v, i) =>
          <button value={v.middleValue} className={color[1] === v.middleValue ? 'on' : ''} type="button" key = {i}
            onClick={(e) => {
              handleClick(e,1)
              // onSecondCategory(e)
            }}>{v.middle}
          </button>)}
      </div>
    </div>
  );
}