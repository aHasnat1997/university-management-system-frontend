import { ReactNode, ComponentType, ReactElement } from "react";

export type TRoute = {
  path: string,
  element: ReactNode
};

export type TUserRoutePath = {
  path?: string,
  title: string,
  icon?: ComponentType,
  element?: ReactElement,
  children?: TUserRoutePath[]
}