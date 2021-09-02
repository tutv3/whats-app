/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 *
 * @format
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<TopTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type TopTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Call: undefined;
};

export type RootTabScreenProps<Screen extends keyof TopTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TopTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
