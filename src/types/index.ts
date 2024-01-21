import { ComponentType, ReactElement } from "react"

export type TUserRoutePath = {
  path?: string,
  title: string,
  icon?: ComponentType,
  element?: ReactElement,
  child?: TUserRoutePath[]
}