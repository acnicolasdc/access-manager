import { useContext } from "react";
import { DialogActionsStateContext } from "./providerDialogActions.context";

export function useDialogActions() {
  const context = useContext(DialogActionsStateContext);
  if (context === undefined) {
    throw new Error(
      "useDialogActions must be used within a DialogActionsProvider"
    );
  }
  return context;
}
