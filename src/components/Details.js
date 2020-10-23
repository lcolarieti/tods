import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectFetchedProduct} from '../slices/product';
import parse from 'html-react-parser';
import Dropdown from './Dropdown';
import Quantity from './Quantity';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {addToCart} from '../slices/cart';


const Details = () => {
  const {data} = useSelector(selectFetchedProduct);
  const {price, stock, categories, summary, description, colorSizeOptions, variantOptions} = data;
  const dispatch = useDispatch();

  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [addToCartPressed, setAddToCartPressed] = useState(false);

  const stock_status = {
    'OUTOFSTOCK': 'Out of stock',
    'INSTOCK': 'In stock',
    'LASTINSTOCK': 'Last in stock',
    'LOWSTOCK': 'Low stock',
  }

  useEffect(() => {
    addToCartPressed && setAddToCartPressed(false);

    // eslint-disable-next-line
  }, [color, size, quantity]);

  return (
    <div
      className="details"
    >
      <h2 title={data.name}>
        {data.name}
      </h2>
      <p
        className="price"
        title={price.formattedValue}
      >
        {price.formattedValue}
      </p>

      <p title="Availability">
        <strong>Availability : </strong>
        <span>{stock_status.hasOwnProperty(stock['stockLevelStatus']) ? stock_status[stock['stockLevelStatus']] : '-'}
        </span>
      </p>
      <p title="Product code">
        <strong>Product Code : </strong>
        <span>{data.code}</span>
      </p>
      <p title="Tags">
        <strong>Categories : </strong>
        <span>
          {
            categories.map((category, i) => (
              <>
                <a
                  key={category.name}
                  href={category.url}
                  title={category.code}
                >
                  {category.code}
                </a>
                {i < categories.length - 1 && ', '}
              </>
            ))
          }
        </span>
      </p>


      <p
        title={summary}
        className="summary"
      >
        {summary}
      </p>

      <div className="description-container">
        {description.indexOf('<') === 0 ? parse(description) : <p className="description">description</p>}
      </div>

      <div className="product-options flex">

        <Dropdown
          items={colorSizeOptions}
          itemKey="color"
          placeholder="Select Color"
          title="Color"
          id="skuOrigin"
          selected={color}
          onChange={(value) => setColor(value)}
          error={addToCartPressed && color === null}
        />

        <Dropdown
          items={variantOptions}
          itemKey="size"
          placeholder="Select Size"
          title="Size"
          selected={size}
          onChange={(value) => setSize(value)}
          error={addToCartPressed && size === null}
        />

        <Quantity
          max={stock['stockLevelAvailable']}
          onChange={(value) => setQuantity(value)}
          selected={quantity <= stock['stockLevelAvailable'] ? quantity : setQuantity(0)}
          title="Qty"
          error={addToCartPressed && quantity === 0}
        />

      </div>

      <div className="button-container flex">
        <Button
          label="Add to cart"
          onClickFn={() => {
            setAddToCartPressed(true);
            (color && quantity > 0 && size) && dispatch(addToCart({
              code: color['skuOrigin'],
              color: color['color'],
              quantity: quantity
            }));
          }}
        />

        <Button
          label="Add to wishlist"
          theme="light"
          icon={<FontAwesomeIcon icon={faHeart} />}
          onClickFn={() => alert(`${data.name} added to whishlist!`)}
        />
      </div>
    </div>
  );
}

export default Details;