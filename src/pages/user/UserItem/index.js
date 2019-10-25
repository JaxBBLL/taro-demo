import Taro, { Component } from "@tarojs/taro";
import { AtListItem } from "taro-ui";
import { getLabel } from "@utils/index.js";

export default class Index extends Component {
  static defaultProps = {
    name: "",
    gender: "",
    onClickHandle: () => {}
  };
  componentWillMount() {}

  handleClick = name => {
    this.props.onClickHandle(name);
  };
  render() {
    return (
      <AtListItem
        title={this.props.name}
        extraText={getLabel(this.props.gender, "gender")}
        onClick={() => this.handleClick(this.props.name)} 
      />
    );
  }
}
