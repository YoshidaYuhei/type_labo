'use client'; // Next.js (app router) を使う場合はつける

import { useState } from "react";
// @ts-ignore
import { View, Text, Button } from "react-native-web";
import { styles } from "./styles";

export default function Page() {
  // count という状態を 0 で初期化
  const [count, setCount] = useState(0);
  const textContent = "test text";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>現在のカウント: {count}</Text>
      <Button title="+1" onPress={() => setCount(count + 1)} />
      <Button title="-1" onPress={() => setCount(count - 1)} />
      <Button title="リセット" onPress={() => setCount(0)} />
    </View>
  );
};

// styles are defined in app/styles.ts
