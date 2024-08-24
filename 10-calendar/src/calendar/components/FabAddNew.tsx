import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {
    const { setActiveEvent  } = useCalendarStore();
    const { openDateModal } = useUiStore();
    
    const handleClick = (): void => {
        setActiveEvent({
			title: "",
			notes: "",
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
