import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal, UiState } from "../store";

export const useUiStore = () => {
    const dispatch = useDispatch();

    const { isDateModalOpen } = useSelector((state: { ui: UiState }) => state.ui);

    const openDateModal = () => {
		dispatch(onOpenDateModal());
	};
    
    const closeDateModal = () => {
		dispatch(onCloseDateModal());
	};



    return {
		// Propiedades
		isDateModalOpen,

		// Metodos
		closeDateModal,
		openDateModal,
	};
}