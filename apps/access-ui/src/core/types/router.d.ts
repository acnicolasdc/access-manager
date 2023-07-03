export interface IRouteBaseType {
  path: string;
  element: () => JSX.Element;
}
export interface IRouteType extends IRouteBaseType {
  title: string;
  routes?: IRouteBaseType[];
}
