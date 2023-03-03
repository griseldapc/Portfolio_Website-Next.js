import Image from "next/image";
import { useRouter } from "next/router";
import React, {useEffect, useState, useRef} from "react";
import product from "../Product/product";
import Plus  from "../../pages/Product/Plus";
import  Minus  from "../../pages/Product/Minus";
import styles from "../../styles/detail.module.css";

function getItems(id) {
  const item = product.find((e) => e.id === Number(id));
  if (typeof item === "object") {
    return item;
  }
  return {};
}

function Detail() {
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);
  const router = useRouter();
  const { slug } = router.query;
  const barang = getItems(slug);
  console.log(product);
  if (Object.keys(barang).length === 1) {
    return <div>Item not found</div>;
  }

  // const { cartCount, addItem } = useShoppingCart();

  // const toastId = useRef();
  // const firstRun = useRef(true);

  const handleOnAddToCart = () => {
    setAdding(true);
    toastId.current = toast.loading(
      `Adding ${qty} item${qty > 1 ? 's' : ''}...`
    );
    addItem(props, qty);
  };

  return (
    <main className={styles.satu}>
      <div className={styles.dua}>
        <div className={styles.tiga}>
          {/* TODO: Use Next Image to make images optimize in <picture></picture> HTML element */}
          <div>
            <picture>
              <source
                className=""
                srcSet="/gelas 1.jpg"
                media="(max-width: 639px)"
                type="image/png"
              />
              <Image
                className={styles.empat}
                src={barang.img}
                alt={barang.title}
                width={400}
                height={300}
              />
            </picture>
          </div>

          <div className={styles.lima}>
            <span className={styles.enam}>
              {barang.category}
            </span>
            <h1 className={styles.tujuh}>
              {barang.name}
            </h1>
            <p className={styles.delapan}>
              {barang.description}
            </p>
            <div className={styles.sembilan}>
              <p className={styles.sepuluh}>
                Rp. {barang.price}
              </p>
            </div>

            <div className={styles.sebelas}>
              <p className={styles.duabelas}>Quantity:</p>
              <div className={styles.tigabelas}>
                <button
                  onClick={() => setQty(prev => prev - 1)}
                  disabled={qty <= 1}
                  className={styles.empatbelas}
                >
                  <Minus />
                </button>
                <p className={styles.limabelas}>{qty}</p>
                <button
                  onClick={() => setQty(prev => prev + 1)}
                  className={styles.enambelas}
                >
                  <Plus />
                </button>
              </div>
            </div>

            <button type="button"
                onClick={handleOnAddToCart}
                disabled={adding} className={styles.tujuhbelas}>
              
              <span className={styles.spancart}>Add to Cart ({qty})</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detail;