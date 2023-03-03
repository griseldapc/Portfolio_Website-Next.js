import React from "react";
import classes from "../../styles/product-item.module.css"
import Image from "next/image";
import Link from "next/link";

const ProductItem = (props) => {
  const { id,title, img, liveUrl, keyword } = props.item;
  return (
    <Link href={`/${id}`} key={id}>
      <div className={`${classes.product__item}`}>
        <div className="bg-transparent">
          <h6 className="">{title}</h6>
          {keyword.map((item, index) => (

            <span className={`${classes.product__keyword}`} key={index}>
              {item}
            </span>

          ))}
        </div>
        <div className={`${classes.product__img}`}>
          <Image alt="product-img" src={img} width="380" height="250" />
        </div>
      </div>
    </Link >
  );
};

export default ProductItem;
