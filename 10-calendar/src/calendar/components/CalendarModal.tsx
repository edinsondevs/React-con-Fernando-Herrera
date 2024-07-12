import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface CalendarModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}
export const CalendarModal = ({ visible, setVisible }: CalendarModalProps) => {

    const contentFooter = (
        <div>
            <Button label="Salir" icon="pi pi-check" onClick={() => setVisible(false)} />
            
            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>
        </div>
    );

    return (
        <div className="card flex justify-content-center">

            <Dialog
                header="Nuevo Evento"
                visible={visible}
                style={{ width: '50vw' }}
                onHide={() => { if (!visible) return; setVisible(false); }}
                position="center"
                footer={contentFooter}
            >
                <form className="container">

                    <div className="form-group mb-2">
                        <label>Fecha y hora inicio</label>
                        <input className="form-control" placeholder="Fecha inicio" />
                    </div>

                    <div className="form-group mb-2">
                        <label>Fecha y hora fin</label>
                        <input className="form-control" placeholder="Fecha inicio" />
                    </div>

                    <hr />
                    <div className="form-group mb-2">
                        <label>Titulo y notas</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                    </div>

                    <div className="form-group mb-2">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    </div>



                </form>
            </Dialog>
        </div>
    )
}
