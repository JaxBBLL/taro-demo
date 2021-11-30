import React, { useEffect, useState } from "react";
import { View, Text, Button } from "@tarojs/components";
import { useConnect } from "@/store/index";

const Page = props => {
  console.log(props);
  const [count, setCount] = useState(0);
  const { state, dispatch } = useConnect();

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  return (
    <>
      <Text>{count}</Text>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        count
      </Button>
      <View>
        <Text>
          {state.age}/{state.user}
        </Text>
      </View>
      <Button type="primary" onClick={() => dispatch({ type: "CHANGENAME" })}>
        CHANGENAME
      </Button>
    </>
  );
};

export default Page;
