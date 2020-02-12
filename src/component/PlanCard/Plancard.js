import React from "react";

// components
import Button from "../../willDepercate/Button/Button";

// styles
import Styles from "./PlanCard.css";

const PlanCard = ({ name, inclusiveOf, price }) => {
  return (
    <div className={`${Styles.plancard} card `}>
      <div className={`${Styles.cardname} text-center`}>{name}</div>
      <p className={`${Styles.p} Small-Body-CopySmall-body-Primary p-2 `}>
        All-in-One Single sign up
      </p>
      <div className="flex flex-column Small-Body-CopySmall-body-Primary p-3 justify-item-center">
        {inclusiveOf.map((item, index) => {
          return (
            <div key={index}>
              <span className={`${Styles.icon} mr-4`}>&#x2611;</span>
              {item}
            </div>
          );
        })}
      </div>
      <div className={`${Styles.pricetag} text-center`}>{`${price}.00*`}</div>
      <div className={`${Styles.p} ${Styles.annually}`}>Annually</div>
      <div className="center mt-5 mb-1">
        <Button color="primary" size="sm">
          Add to cart
        </Button>
      </div>
      <p className="Small-Body-Copy-RegularSmall-body-copy-Regular-Disabled text-center p-2">
        * GST applicable
      </p>
    </div>
  );
};

PlanCard.defaultProps = {
  name: "Saral",
  inclusiveOf: ["GST", "TDS", "Income Tax"],
  price: "11,000"
};

export default PlanCard;
