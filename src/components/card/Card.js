import React from "react";
import "./Card.css";
import clipImage from "../../images/card_clip_img.png";
import accountIcon from "../../images/acct.png";
import accountEmail from "../../images/email.png";
import accountPhone from "../../images/phone.png";
import accountGender from "../../images/gender.png";

const Card = ({ user }) => (
  <div className="cardContainer">
    <div className="gridContainer">
      <div className="uniqueInfo">
        <h2>
          <img src={accountIcon} alt="account owner icon" />
          <span>{user.FirstName}</span>
          <span>{user.LastName}</span>
        </h2>
        <p className="ItemsFlexed">
          <img src={accountEmail} alt="account email icon" />
          <span className="dataHasLabelPrimaryColor">{user.Email}</span>
        </p>
        <p className="ItemsFlexed">
          <img src={accountPhone} alt="account phone icon" />

          <span className="dataHasLabelPrimaryColor">{user.PhoneNumber}</span>
        </p>
        <p className="ItemsFlexed">
          <img src={accountGender} alt="account gender icon" />

          <span className="dataHasLabelPrimaryColor" id="gender">
            {user.Gender}
          </span>
          <span>
            @<span className="dataHasH2Color">{user.UserName}</span>
          </span>
        </p>
      </div>
      <div className="otherInfo">
        <aside>
          <div className="content">
            <label>Payment Method</label>
            <span>{user.PaymentMethod}</span>
          </div>
          <div className="content">
            <label>Credit Card Type</label>
            <span>{user.CreditCardType}</span>
          </div>
          <div className="content">
            <label>Credit Card Number</label>
            <span>{user.CreditCardNumber}</span>
          </div>
        </aside>
        <aside>
          <div className="content">
            <label id="beforeElementHasLowerWidthThanSiblings">U.R.L</label>
            <span id="dataHasLowerFontSize">{user.URL}</span>
          </div>
          <div className="content">
            <label>Domiain Name</label>
            <span>{user.DomainName}</span>
          </div>
          <div className="content">
            <label>Mac Address</label>
            <span>{user.MacAddress}</span>
          </div>
        </aside>
        <aside>
          <div className="content">
            <label>Last Login</label>
            <span>{user.LastLogin}</span>
          </div>
          <div className="content">
            <label>Latitude</label>
            <span>{user.Latitude}</span>
          </div>
          <div className="content">
            <label>Longitude</label>
            <span>{user.Longitude}</span>
          </div>
        </aside>
      </div>
    </div>
    <div className="clipImageContainer imagePositionAbsolute topBottomRight">
      <img src={clipImage} alt="" />
    </div>
  </div>
);

export default Card;
