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
  options: Array<Option>,
  valueKey: string,
  labelKey: string
|};

type State = {|
  selectValue: mixed
|};

class Select extends React.Component<Props, State> {
  state = {
    selectValue: this.props.initial
  };

  render() {
    return (
      <BaseSelect
        labelKey={this.props.labelKey}
        valueKey={this.props.valueKey}
        className="x-select"
        value={this.state.selectValue}
        options={this.props.options}
        onChange={selectValue => this.setState({ selectValue })}
      />
    );
  }
}

export default Select;
