import type {
  TDialogActionsState,
  TDialogActionsAction,
} from "./providerDialogActions";
import { EDialogActionsActionKind } from "./providerDialogActions.constants";

export const dialogActionsReducer = (
  state: TDialogActionsState,
  action: TDialogActionsAction
) => {
  switch (action.type) {
    case EDialogActionsActionKind.setOpenDeleteModal: {
      return { ...state, deleteModal: !state.deleteModal };
    }
    case EDialogActionsActionKind.setOpenEditModal: {
      return {
        ...state,
        editModal: !state.editModal,
      };
    }
  }
};
