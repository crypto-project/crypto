// @flow

import React from "react";
import BaseSelect from "react-select";
import "./styles.css";

type Option = {|
  value: mixed,
  label: string
|};

type Props = {|
  initial: mixed,
  options: Array<Option>
|};

type State = {|
  selectValue: string
|};

class Select extends React.Component<Props, State> {
  state = {
    selectValue: this.props.initial
  };

  render() {
    return (
      <BaseSelect
        className="x-select"
        value={this.state.selectValue}
        options={this.props.options}
        onChange={selectValue => this.setState({ selectValue })}
      />
    );
  }
}

export default Select;
