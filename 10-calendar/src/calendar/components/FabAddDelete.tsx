import { useCalendarStore } from "../../hooks";

export const FabAddDelete = () => {
    const { startDeleteEvent, hasEventSelected } = useCalendarStore();

    const handleClickDelete = (): void => {
        startDeleteEvent()
    }

  return (
		<button
            className="btn btn-danger fab-delete"
            onClick={handleClickDelete}
            style={{ display: hasEventSelected ? '' : 'none' }}
        >
            <i className="fa fa-trash-alt"></i>
        </button>
  );
}
