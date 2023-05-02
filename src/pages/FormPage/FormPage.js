import NewContactForm from "../../components/NewContactForm/NewContactForm";
import NewEventForm from "../../components/NewEventForm/NewEventForm";
import EditContactForm from "../../components/EditContactForm/EditContactForm";

function FormPage() {
    return (
        <div>
            <h1>Form Page</h1>
            Add a New Contact
            <NewContactForm />
            Edit Existing Contact
            <EditContactForm />
            Add a New Event
            <NewEventForm />
        </div>
    )
}

export default FormPage;