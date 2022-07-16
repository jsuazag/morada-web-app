import { useParams } from "react-router-dom";
import { Page } from "../../components/Page";

export const Property = () => {

    const {idProperty} = useParams()

    return (
        <Page>
            <h1>Detalle de Propiedad {idProperty}</h1>
            <p>contenido....</p>
        </Page>
    )
}