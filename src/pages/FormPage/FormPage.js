import NewContactForm from "../../components/NewContactForm/NewContactForm";
import NewEventForm from "../../components/NewEventForm/NewEventForm";

function FormPage() {
    return (
        <div>
            <h1>Form Page</h1>
            <NewContactForm />
            <NewEventForm />
        </div>
    )
}

export default FormPage;