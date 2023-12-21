import React from "react";
import "./product-filter.css";

function ProductFilter() {
  const handleActiveFilterItem = (e) => {
    const productFilterItemEle = e.target.parentElement;
    productFilterItemEle.classList.toggle("active");
  };

  return (
    <div className="product-filter w-100">
      <h6 className="mb-0 text-ss font-cormorant fw-700 text-uppercase">Filter</h6>
      <div className="product-filter__item product-filter__level">
        <p
          className="mb-0 text-dark fw-700 font-cormorant"
          onClick={(e) => handleActiveFilterItem(e)}
        >
          Aroma Level <img src="/assets/icon/chevron-down.svg" alt="" />
        </p>
        <div className="product-filter__item__checkbox-group">
          <label forhtml="level-soft" className="text-dark font-open-sans fw-400">
            <input type="checkbox" id="level-soft" value="soft" name="level" />
            Soft
          </label>
          <label forhtml="level-medium" className="text-dark font-open-sans fw-400">
            <input type="checkbox" id="level-medium" value="medium" name="level" />
            Medium
          </label>
          <label forhtml="level-strong" className="text-dark font-open-sans fw-400">
            <input type="checkbox" id="level-strong" value="strong" name="level" />
            Strong
          </label>
        </div>
      </div>
      <div className="product-filter__item product-filter__type">
        <p
          className="mb-0 text-dark fw-700 font-cormorant"
          onClick={(e) => handleActiveFilterItem(e)}
        >
          Aroma Type <img src="/assets/icon/chevron-down.svg" alt="" />
        </p>
        <div className="product-filter__item__checkbox-group">
          <label forhtml="type-fruits" className="text-dark font-open-sans fw-400">
            <input type="checkbox" id="type-fruits" value="fruits" name="type" />
            Fruits
          </label>
          <label forhtml="type-nature" className="text-dark font-open-sans fw-400">
            <input type="checkbox" id="type-nature" value="nature" name="type" />
            Nature
          </label>
          <label forhtml="type-parfume" className="text-dark font-open-sans fw-400">
            <input type="checkbox" id="type-parfume" value="parfume" name="type" />
            Parfume
          </label>
        </div>
      </div>
      <div className="product-filter__item product-filter__size">
        <p
          className="mb-0 text-dark fw-700 font-cormorant"
          onClick={(e) => handleActiveFilterItem(e)}
        >
          Product Size <img src="/assets/icon/chevron-down.svg" alt="" />
        </p>
        <div className="product-filter__item__checkbox-group">
          <label forhtml="size-small" className="text-dark font-open-sans fw-400">
            <input type="checkbox" id="size-small" value="small" name="size" />
            Small
          </label>
          <label forhtml="size-medium" className="text-dark font-open-sans fw-400">
            <input type="checkbox" id="size-medium" value="medium" name="size" />
            Medium
          </label>
          <label forhtml="size-big" className="text-dark font-open-sans fw-400">
            <input type="checkbox" id="size-big" value="big" name="size" />
            Big
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
