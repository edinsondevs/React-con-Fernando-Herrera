import { Dialog } from "primereact/dialog";
import { CalendarComponent } from "./CalendarComponent";
import { useForm } from "../../hooks/useForm";
import { FormInterface, InputCalendar } from "../../utils/interfaces/calendarInterfaces";
import { differenceInSeconds } from "date-fns";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { useUiStore } from "../../hooks";

export const CalendarModal = () => {
	const { isDateModalOpen, closeDateModal } = useUiStore();
	
	const { formState, onInputChange, onResetForm } = useForm <FormInterface>({
		initialForm: {
			title: "",
			notes: "",
			start: new Date(),
			end: new Date(),
		},
	});
	
	const {
		title = "",
		notes = "",
		start = new Date(),
		end = new Date(),
	} = formState;

	const isDisabledBtn = !title || !notes || !start || !end;

	const ContentFooter = ()=> {
		return (
			<button
				type='submit'
				disabled={isDisabledBtn}
				className='btn btn-outline-primary btn-block'>
				<i className='far fa-save'></i>
				<span> Guardar</span>
			</button>
		)
	};

	const onDateChange = (event: any, type: InputCalendar) => {
		const simulated = {
			target: { name: type, value: event },
		} as React.ChangeEvent<HTMLInputElement>;
		onInputChange(simulated);
	};


		const onSubmit = (e: any) => {
			e.preventDefault();
			
			const difference = differenceInSeconds(formState.end, formState.start);
			
			if(isNaN(difference) || difference <= 0) {
				console.log('Error en fechas');
				Swal.fire('Error en fechas', 'Revisar las fechas', 'error');
				return;
			}
			onResetForm();
			closeDateModal();
			
		}
    return (
		<div className='card flex justify-content-center'>
			<Dialog
				header='Nuevo Evento'
				visible={isDateModalOpen}
				style={{ width: "50vw" }}
				onHide={() => {
					if (!isDateModalOpen) return;
					closeDateModal();
					//setVisible(false);
				}}
				position='center'>
				<form
					className='container'
					onSubmit={onSubmit}>
					<div className='form-group mb-2'>
						<label>Fecha y hora inicio</label>
						<br />
						<CalendarComponent
							onInputChange={(e) => onDateChange(e, "start")}
							showTime
						/>
					</div>

					<div className='form-group mb-2'>
						<label>Fecha y hora fin</label>
						<br />
						<CalendarComponent
							onInputChange={(e) => onDateChange(e, "end")}
							minDate={start}
							showTime
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
							value={title}
							// onChange={onDataChange}
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
							value={notes}
							// onChange={onDataChange}
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
			</Dialog>
		</div>
	);
}
