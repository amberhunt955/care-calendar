
function FormPage(props) {
    console.log(props);
    return (
        <div>
            {props.form}
            <a href="/my-contact-list">Back to Contacts</a>
        </div>
    )
}

export default FormPage;