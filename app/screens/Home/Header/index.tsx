import React from "react";
import {
  StyleSheet,
  View,
  StatusBar as StatusBarTop,
  TouchableOpacity,
} from "react-native";
import { getTheme } from "../../../modules/theme";
import Menu from "../../../modules/svg/Menu";
import SquareProps from "../../../modules/svg/Square";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Button from "../../../components/Button/button";

export default function Header() {
  return (
    <View style={styles.header}>
      <StatusBar style="auto" backgroundColor={theme.backgroundColorPrimary} />
      <Button
        text="Add nova tarefa"
        Icon={<SquareProps />}
        style={{ flexDirection: "row", gap: 5, width: 175 }}
        onPress={() => {
          router.push("modal");
        }}
      />
      <TouchableOpacity>
        <Menu />
      </TouchableOpacity>
    </View>
  );
}

const theme = getTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColorPrimary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBarTop.currentHeight ?? 0,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.backgroundColorSecondary,
    borderColor: theme.border,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: StatusBarTop.currentHeight ?? 0,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
