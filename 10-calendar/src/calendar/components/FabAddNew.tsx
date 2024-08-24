import { useDispatch } from "react-redux";
import { useCalendarStore, useUiStore } from "../../hooks";
import { addHours } from "date-fns";

export const FabAddNew = () => {
    const dispatch = useDispatch();
    const { setActiveEvent  } = useCalendarStore();
    const { openDateModal } = useUiStore();
    
    const handleClick = (): void => {
        setActiveEvent({
			title: "Hola mundo",
			notes: "nota nueva de prueba",
			start: new Date(),
			end: "",
			user: {
				id: 1,
				name: "",
			},
		});
        openDateModal();
    }

  return (
		<button
            className="btn btn-primary fab"
            onClick={handleClick}
        >
            <i className="fa fa-plus"></i>
        </button>
  );
}
