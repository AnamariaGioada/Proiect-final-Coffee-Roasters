import "./checkout.scss";
import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../commonComponents/PrimaryButton";
import CoffeeBean from "../SVG/coffeeBean.svg";
import calculatePrice from "../../utils/calculatePrice";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  adress: string;
  phone: string;
}
interface Country {
  [key: string]: string[];
}

function renderPrice(price: number, multiplier: number) {
  let displayPrice = [];
  if (multiplier > 1) {
    displayPrice.push(<span>{multiplier} &times; </span>);
  }

  displayPrice.push(<span>${price}</span>);

  return displayPrice;
}

function Checkout() {
  const [countries, setCountries] = useState<Country>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    adress: "",
    phone: "",
  });
  const navigate = useNavigate();
  const [plan, setPlan] = useState({
    preference: "",
    beanType: "",
    grindOption: "",
    quantity: "",
    deliveries: "",
  });
  const [prices, setPrices] = useState({
    total: "",
    preference: 0,
    beanType: 0,
    grindOption: 0,
    quantity: 0,
    frequency: 0,
    multiplier: 0,
  });
  useEffect(() => {
    const planString = localStorage.getItem("plan");
    if (planString == null) {
      navigate("/create-your-plan");
    } else {
      const plan = JSON.parse(planString);
      const prices = calculatePrice({
        preferenceValue: plan.preference,
        beanTypeValue: plan.beanType,
        grindOptionValue: plan.grindOption,
        quantityValue: plan.quantity,
        frequencyValue: plan.deliveries,
      });
      setPrices(prices);
      setPlan(plan);
    }
  }, []);

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(
        "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json"
      );
      const countriesData = await response.json();

      setCountries(countriesData);
    }

    fetchCountries();
  }, []);
  const emailRegex: RegExp =
    /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    adress: "",
    phone: "",
  });

  const validateValues = () => {
    let foundErrors = {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      city: "",
      adress: "",
      phone: "",
    };
    if (formData.firstName.length < 2 || formData.firstName.length > 25) {
      foundErrors.firstName =
        "First Name should be between 2 and 25 characters.";
    }
    if (formData.lastName.length < 2 || formData.lastName.length > 25) {
      foundErrors.lastName = "Last Name should be between 2 and 25 characters.";
    }

    if (!formData.email.match(emailRegex)) {
      foundErrors.email = "Email format is invalid.";
    }
    if (formData.country.length == 0) {
      foundErrors.country = "Please select a country.";
    }
    if (formData.city.length == 0) {
      foundErrors.city = "Please select a city.";
    }

    if (formData.adress.length < 6) {
      foundErrors.adress = "Please add your full adress.";
    }
    if (formData.phone.length == 0) {
      foundErrors.phone = "Please enter a phone number.";
    } else if (!formData.phone.match(/^[0-9]+$/)) {
      foundErrors.phone = "Phone number is invalid";
    }

    setErrors(foundErrors);

    const isValid = (
      Object.keys(foundErrors) as [
        "firstName",
        "lastName",
        "email",
        "country",
        "city",
        "adress",
        "phone"
      ]
    ).every((key) => foundErrors[key].length == 0);

    return isValid;
  };

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateValues();
  };

  return (
    <div id="checkout-container">
      <div className="cart">
        <h3 className="cart-title">Subscription details</h3>
        <div className="icon">
          <CoffeeBean />
        </div>
        <div className="cart-content">
          <div className="preference row">
            <p className="label">Preference: </p>
            <p className="selected-value">{plan.preference}</p>
            <p className="price">
              {renderPrice(prices.preference, prices.multiplier)}
            </p>
          </div>
          <div className="type-of-coffee row">
            <p className="label">Bean Type: </p>
            <p className="selected-value">{plan.beanType}</p>
            <p className="price">
              {renderPrice(prices.beanType, prices.multiplier)}
            </p>
          </div>
          {plan.grindOption ? (
            <div className="grind row">
              <p className="label">Grind Option: </p>
              <p className="selected-value">{plan.grindOption}</p>
              <p className="price">
                {renderPrice(prices.grindOption, prices.multiplier)}
              </p>
            </div>
          ) : null}
          <div className="quantity row">
            <p className="label">Quantity: </p>
            <p className="selected-value">{plan.quantity}</p>
            <p className="price">
              {renderPrice(prices.quantity, prices.multiplier)}
            </p>
          </div>
          <div className="frequency row">
            <p className="label">Frequency: </p>
            <p className="selected-value"> {plan.deliveries}</p>
            <p className="price">
              {renderPrice(prices.frequency, prices.multiplier)}
            </p>
          </div>
          <div className="total row">
            <p className="label">Total: </p>
            <p className="selected-value"></p>
            <p className="price">${prices.total}/mo</p>
          </div>
        </div>
      </div>

      <div id="signup">
        <h3>Delivery details</h3>
        <form id="signupForm" onSubmit={handleSubmit}>
          <div className="signup-field">
            <div>
              <label htmlFor="firstName">First Name</label>
            </div>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={onChange}
              value={formData.firstName}
            />
            {errors.firstName.length !== 0 ? (
              <div className="error">{errors.firstName}</div>
            ) : null}
          </div>

          <div className="signup-field">
            <div>
              <label htmlFor="lastName">Last Name</label>
            </div>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={onChange}
              value={formData.lastName}
            />
            {errors.lastName.length !== 0 ? (
              <div className="error">{errors.lastName}</div>
            ) : null}
          </div>

          <div className="signup-field">
            <label htmlFor="email">Email</label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={onChange}
                value={formData.email}
              />
              {errors.email.length !== 0 ? (
                <div className="error">{errors.email}</div>
              ) : null}
            </div>
          </div>

          <div className="signup-field">
            <div>
              <label htmlFor="country">Country</label>
            </div>
            <select
              value={formData.country}
              onChange={onChange}
              name="country"
              id="country"
            >
              <option value="">Please select a country </option>
              {Object.keys(countries).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country.length !== 0 ? (
              <div className="error">{errors.country}</div>
            ) : null}
          </div>

          {formData.country !== "" && (
            <div className="signup-field">
              <div>
                <label htmlFor="city">City</label>
              </div>
              <select
                name="city"
                id="city"
                onChange={onChange}
                value={formData.country}
              >
                {countries[formData.country]?.map((city, index) => (
                  <option key={city + index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.city.length !== 0 ? (
                <div className="error">{errors.city}</div>
              ) : null}
            </div>
          )}

          <div className="signup-field">
            <div>
              <label htmlFor="adress">Adress</label>
            </div>
            <input
              type="text"
              name="adress"
              id="adress"
              onChange={onChange}
              value={formData.adress}
            />
            {errors.adress.length !== 0 ? (
              <div className="error">{errors.adress}</div>
            ) : null}
          </div>

          <div className="signup-field">
            <div>
              <label htmlFor="phone">Phone number</label>
            </div>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={onChange}
              value={formData.phone}
            />
            {errors.phone.length !== 0 ? (
              <div className="error">{errors.phone}</div>
            ) : null}
          </div>

          <div className="primary-anchor">
            <PrimaryButton
              disabled={
                formData.firstName.length == 0 ||
                formData.lastName.length == 0 ||
                formData.email.length == 0 ||
                formData.country.length == 0 ||
                formData.city.length == 0 ||
                formData.adress.length == 0 ||
                formData.phone.length == 0
              }
            >
              Subscribe
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Checkout;
