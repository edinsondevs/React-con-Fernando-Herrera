// import { Dialog } from "primereact/dialog";
import { CalendarComponent } from "./CalendarComponent";
import Modal from "react-modal";

// import { useForm } from "../../hooks/useForm";
import { InputCalendar } from "../../utils/interfaces/calendarInterfaces";
import { addHours, differenceInSeconds } from "date-fns";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useCalendarStore, useUiStore } from "../../hooks";
import { ChangeEvent, useEffect, useState } from "react";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};
Modal.setAppElement("#root");

interface initialFormValuesInterface {
	title: string;
	notes: string;
	start: Date;
	end: Date;
}

const initialFormValues: initialFormValuesInterface = {
	title: "",
	notes: "",
	start: new Date(),
	end: addHours(new Date(), 2),
};

export const CalendarModal = () => {
	const { isDateModalOpen, closeDateModal } = useUiStore();
	const { activeEvent, startSaveEvent } = useCalendarStore();


	const [formValues, setFormValues] = useState(initialFormValues);


	const ContentFooter = () => {
		return (
			<button
				type='submit'
				className='btn btn-outline-primary btn-block'>
				<i className='far fa-save'></i>
				<span> Guardar</span>
			</button>
		);
	};

	//******************************************************************* */
	//*  FUNCION PARA CAMBIAR LOS VALORES DE LAS FECHAS
	const onDateChange = (event: any, changing: InputCalendar) => {
		setFormValues({
			...formValues,
			[changing]: event,
		});
	};

	useEffect(() => {
		if (activeEvent !== null) {
			setFormValues({...activeEvent});
		}
	}, [activeEvent]);

	//******************************************************************* */
	//*  FUNCION PARA CAMBIAR LOS VALORES DEL TITULO Y NOTAS
	const onInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	//******************************************************************* */
	//*  FUNCION PARA ENVIAR EL FORMULARIO
	const onSubmit = async (e: any) => {
		e.preventDefault();
		const difference = differenceInSeconds(
			formValues.end,
			formValues.start
		);

		if (isNaN(difference) || difference <= 0) {
			Swal.fire("Error en fechas", "Revisar las fechas", "error");
			return;
		}
		console.log(formValues);
		await startSaveEvent(formValues);

		closeDateModal();
	};

	//******************************************************************* */
	//*  FUNCION PARA CERRAR EL MODAL
	const onCloseModal = () => {
		if (!isDateModalOpen) return;
		closeDateModal();
	};

	return (
		<Modal
			isOpen={isDateModalOpen}
			onRequestClose={onCloseModal}
			style={customStyles}
			className='modal'
			overlayClassName='modal-fondo'
			closeTimeoutMS={200}>
			<h1>Nuevo Evento</h1>
			<hr />
			<form
				className='container'
				onSubmit={onSubmit}>
				<div className='form-group mb-2'>
					<label>Fecha y hora inicio</label>
					<br />
					<CalendarComponent
						initialDate={formValues.start}
						onChange={(event) => onDateChange(event, "start")}
						showTime={true}
						hourFormat='24'
					/>
				</div>
				<div className='form-group mb-2'>
					<label>Fecha y hora fin</label>
					<br />
					<CalendarComponent
						initialDate={formValues.end}
						onChange={(event) => onDateChange(event, "end")}
						minDate={formValues.start}
						showTime={true}
						hourFormat='24'
					/>
				</div>
				<hr />
				<div className='form-group mb-2'>
					<label>Titulo y notas</label>
					<input
						type='text'
						className='form-control'
						placeholder='Título del evento'
						name='title'
						autoComplete='off'
						value={formValues.title}
						onChange={onInputChange}
					/>
					<small
						id='emailHelp'
						className='form-text text-white'>
						Una descripción corta
					</small>
				</div>
				<div className='form-group mb-2'>
					<textarea
						className='form-control'
						placeholder='Notas'
						rows={5}
						value={formValues.notes}
						onChange={onInputChange}
						name='notes'></textarea>
					<small
						id='emailHelp'
						className='form-text text-white'>
						Información adicional
					</small>
				</div>
				<ContentFooter />
			</form>
		</Modal>
	);
};
