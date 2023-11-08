import { useEffect, useState } from "react";

export default function ProductCategory(props) {

  const [mainCategory, setMainCategory] = useState([]);
  const [middleCategory, setMiddleCategory] = useState([]);
  const [color, setColor] = useState('');

  useEffect(() => {
    fetch(`data/mainCategory.json `)

      .then((res) => res.json())
      .then(data => {
        setMainCategory(data)
      })
      .catch(() => { console.log('error') });


  }, []);

  let handleClick = (e) => {
    setColor(e.target.value)
  }
  let onSecondCategory = (e) => {
    fetch(`data/middle/${e.target.value}.json `)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMiddleCategory(data)
      })
      .catch(() => { console.log('error') });
  }
  return (
    <div className={props.class}>
      <div>
        {mainCategory.map((v, i) =>
          <button value={v.value} className={color === v.value ? 'on' : ''} type="button"
            onClick={(e) => {
              handleClick(e)
              onSecondCategory(e)
            }}>{v.main}
          </button>)}
      </div>
    </div>
  );
}