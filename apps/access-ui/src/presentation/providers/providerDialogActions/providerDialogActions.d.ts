import { EDialogActionsActionKind } from "./providerDialogActions.constants";

export type TDialogActionsState = {
  editModal: boolean;
  deleteModal: boolean;
};

export type TDialogActionsAction =
  | {
      type: EDialogActionsActionKind.setOpenDeleteModal;
    }
  | {
      type: EDialogActionsActionKind.setOpenEditModal;
    };

export type TDialogActionsDispatch = (action: TDialogActionsAction) => void;
