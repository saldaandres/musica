import './Formulario.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

export function Formulario() {
    return (
        <section className={"row bg-dark"}>
            <form className={"col-10 col-sm-6 col-lg-3 m-auto mb-5 border border-danger rounded p-5"}>
                <h3 className={"text-danger text-center mb-4"}>Registrate</h3>
                <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label text-danger bi bi-person fs-4"></label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control border-danger" id="inputName" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label text-danger bi bi-at fs-4"></label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control border-danger" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputDate" className="col-sm-2 col-form-label text-danger bi bi-calendar-date fs-4"></label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control border-danger text-danger" id="inputDate" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-danger bi bi-key-fill fs-4"></label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control border-danger" id="inputPassword3" />
                    </div>
                </div>
                <fieldset className="row mb-3 offset-2">
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                   value="option1" checked />
                                <label className="form-check-label text-danger" htmlFor="gridRadios1">
                                    Deseo recibir notificaciones
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                   value="option2" />
                                <label className="form-check-label text-danger" htmlFor="gridRadios2">
                                    No, mejor no
                                </label>
                        </div>
                    </div>
                </fieldset>
                <button type="button" className="btn btn-outline-danger align-self-center">Sign in</button>
            </form>
        </section>
    )
}