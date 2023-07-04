import React, { createContext, useReducer } from "react";
import type {
  TDialogActionsDispatch,
  TDialogActionsState,
} from "./providerDialogActions";
import { dialogActionsReducer } from "./providerDialogActions.features";
import { INIT_DIALOG_ACTIONS_STATE } from "./providerDialogActions.constants";

export const DialogActionsStateContext = createContext<
  | {
      state: TDialogActionsState;
      dispatch: TDialogActionsDispatch;
    }
  | undefined
>(undefined);

export function DialogActionsProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(
    dialogActionsReducer,
    INIT_DIALOG_ACTIONS_STATE
  );
  const value = {
    state,
    dispatch,
  };

  return (
    <DialogActionsStateContext.Provider value={value}>
      {children}
    </DialogActionsStateContext.Provider>
  );
}
