import { useState } from "react";
import '../css/Register.css';
import ProductCategory from './ProductCategory';

export default function ProductRegister() {

  let [form, setForm] = useState({ 'productName': '' })
  let [textNum, setTextNum] = useState(0);
  let [show, setShow] = useState(false);
  const [active, setActive] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  let textNumCheck = (e) => {
    let txtNum = e.target.value.length;
    setTextNum(txtNum);
    if (txtNum === 1) {
      setShow(true)
      e.target.classList.add('on')
    } else {
      setShow(false)
      e.target.classList.remove('on')
    }
  }

  let catagoryClick = (v)=>{
    setActive(v)
  }

  return (
    <form className="inner">
      <fieldset>
        <h2 className="ProductRegisterTitle">기본정보<span>*필수항목</span></h2>
        <div className="inputContainer">
          <label>상품이미지<span className="red">*</span><small>(0/5)</small></label>
          <p>
            <span id="imageInput">
              <input type="file" accept="image/jpg, image/jpeg, image/png" multiple />
              <i className="xi-camera"><span>이미지 등록</span></i>
            </span>
            <span className="imgExplain">상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로 보여져요.</span>
          </p>
        </div>
        <div className="inputContainer">
          <label htmlFor="productName">상품명</label>
          <p className="nameInput">
            <input type="text" id="productName" name="productName" value={form.productName} onChange={(e) => {
              textNumCheck(e);
              handleChange(e);
            }} maxlength='40' placeholder="상품명을 입력해 주세요." />
            <span>{textNum}/40</span>
            <span className="notice">
              {show && <><i className="xi-ban"></i>상품명을 입력해 주세요.</>}
            </span>
          </p>
        </div>
        <div className="inputContainer">
          <label htmlFor="productName">카테고리</label>
          <p className="productCategory">
            <ProductCategory class='register'  onClick = {catagoryClick} />
            { active && <p className="categoryNotice"><i className="xi-close-circle-o"></i>상세 카테고리를 선택해주세요.</p>}
          </p>
        </div>



      </fieldset>
    </form>
  );
}