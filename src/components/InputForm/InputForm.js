import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./InputForm.module.css";

class InputForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          onChange={this.handleChange}
          className={s.input}
          name="name"
          value={name}
          placeholder="Name"
          autoComplete="off"
        />

        <label className={s.label} htmlFor="number">
          Number
        </label>
        <input
          id="number"
          type="text"
          onChange={this.handleChange}
          className={s.input}
          name="number"
          value={number}
          placeholder="Phone number"
          autoComplete="off"
        />
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default InputForm;
