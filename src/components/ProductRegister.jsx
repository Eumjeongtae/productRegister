export default function ProductRegister() {
  return (
    <form className="inner">
      <fieldset>
        <h2 className="ProductRegisterTitle">기본정보<span>*필수항목</span></h2>
        <div className="inputContainer">
          <label>상품이미지<span>*</span><span>(0/5)</span></label>
          <p>
            <input type="file" />
            <span>상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로 보여져요.</span>
          </p>
        </div>
        <div className="inputContainer">
          <label htmlFor="productNme">상품명</label>
          <p>
            <input type="text" id="productNme" name="productNme" />
            <span>7/40</span>
          </p>
        </div>


      </fieldset>
    </form>
  );
}