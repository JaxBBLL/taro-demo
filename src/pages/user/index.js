import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import "./index.scss";

import UserItem from "./UserItem";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "用户列表"
  };

  state = {
    userList: [
      {
        name: "Perter",
        age: 18,
        gender: 1
      },
      {
        name: "Lucy",
        age: 20,
        gender: 0
      },
      {
        name: "Obama",
        age: 20,
        gender: 1
      }
    ]
  };

  handleClick = (name) => {
    console.log(name)
  }

  render() {
    const { userList } = this.state;
    return (
      <View className="user-page">
        <AtList>
          {
            userList.map((item, index) => {
              return <UserItem name={item.name} gender={item.gender} onClickHandle={this.handleClick} key={index} />;
            })
          }
        </AtList>
      </View>
    );
  }
}
