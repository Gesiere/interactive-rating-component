import { useState } from 'react'
import checkIcon from '../assets/images/icon-check.svg'

const Card = () => {
  const [pageviews, setPageviews] = useState([
    '10K',
    '50K',
    '100K',
    '500k',
    '1M',
  ])
  const [prices, setPrices] = useState([8.0, 12.0, 16.0, 24.0, 36.0])
  const [rangeValue, setRangeValue] = useState(3)
  const [isDiscount, setIsDiscount] = useState(false)
  const color1 = 'hsl(174, 77%, 80%)'
  const color2 = 'hsl(224, 65%, 95%)'
  return (
    <>
      <div className="card-top">
        <p>{pageviews[rangeValue - 1]} pageviews</p>
        <input
          className="slider"
          min={1}
          max={5}
          defaultValue={rangeValue}
          type="range"
          step="1"
          onInput={(e) => setRangeValue(Number(e.target.value))}
          style={{backgroundImage: `linear-gradient(to right, ${color1} ${(rangeValue - 1) / (5 - 1) * 100}%, ${color2} 0%)`}}
        />
        <h2>
          {isDiscount
            ? `${prices[rangeValue - 1] - prices[rangeValue - 1] * 0.25}.00`
            : `${prices[rangeValue - 1]}.00`}{' '}
          <span>/ month</span>
        </h2>
      </div>
      <div className="card-midsection">
        <small>Monthly Billing</small>
        <input
          type="checkbox"
          className="checkbox"
          checked={isDiscount}
          name="discount"
          id="discount"
          onClick={(e) => setIsDiscount(!isDiscount)}
        />
        <small>Yearly Billing</small>
        <span className="discount">
          <span className="discount-small">-25%</span>
          <span className="discount-big"> discount</span>
        </span>
      </div>

      <div className="horizontal"></div>

      <div className="card-bottom">
        <ul>
          <li>
            {' '}
            <img src={checkIcon} alt="list" /> <span>Unlimited Websites</span>{' '}
          </li>
          <li>
            {' '}
            <img src={checkIcon} alt="list" /> <span>100% data ownership</span>{' '}
          </li>
          <li>
            {' '}
            <img src={checkIcon} alt="list" /> <span>Email reports</span>{' '}
          </li>
        </ul>

        <button>Start my trial</button>
      </div>
    </>
  )
}

export default Card
