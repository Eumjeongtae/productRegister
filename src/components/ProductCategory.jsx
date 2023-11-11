import { useEffect, useState } from "react";

export default function ProductCategory(props) {


  const [firstCategory, setFirstCategory] = useState([])
  const [secondCategory, setSecondCategory] = useState([])
  const [lastCategory, setLastCategory] = useState([])
  const [color, setColor] = useState(['', '', '']);
  const [active, setActive] = useState('');

  useEffect(() => {
    fetch(`data/mainCategory.json `)
      .then((res) => res.json())
      .then(data => setFirstCategory(data))
      .catch(() => { console.log('error') });
  }, []);


  let onSecondCategory = (e) => {
    setLastCategory([])
    setActive('active')
    props.onClick(true,'first',e.target.value);

    fetch(`data/middle/${e.target.value}.json `)
      .then((res) => res.json())
      .then(data => {
        setSecondCategory(data)
      })
      .catch(() => { console.log('error') });
  }

  let onLastCategory = (e) => {
    fetch(`data/last/${e.target.value}.json `)
      .then((res) => res.json())
      .then(data => {
        setLastCategory(data)
        if (data.length == 0) {
          setActive('')
          props.onClick(false,'second',e.target.value);
        } else {
          setActive('active')
          props.onClick(true,'second',e.target.value);

        }

      })
      .catch(() => { console.log('error') });
  }

  let handleClick = (e, i) => {
    let copy = [...color]
    copy[i] = e.target.value
    setColor(copy)
  }

  return (
    <div className={`${props.class} ${active}`}>

      <div>
        {firstCategory.map((v, i) =>
          <button value={v.value} className={color[0] === v.value ? 'on' : ''} type="button" key={i}
            onClick={(e) => {
              handleClick(e, 0)
              onSecondCategory(e)
            }}>{v.main}
          </button>)}
      </div>

      <div>
        {secondCategory.length === 0 ? <p className="categoryNon">중분류 선택</p> :
          secondCategory.map((v, i) =>
            <button value={v.middleValue} className={color[1] === v.middleValue ? 'on' : ''} type="button" key={i}
              onClick={(e) => {
                handleClick(e, 1)
                onLastCategory(e)
              }}>{v.middle}
            </button>)}
      </div>

      <div>
        {lastCategory.length === 0 ? <p className="categoryNon">소분류 선택</p> :
          lastCategory.map((v, i) =>
            <button value={v.lastValue} className={color[2] === v.lastValue ? 'on' : ''} type="button" key={i}
              onClick={(e) => {
                handleClick(e, 2)
                setActive('')
                props.onClick(false,'last',e.target.value);
              }}>{v.last}
            </button>)}
      </div>

    </div>
  );
}