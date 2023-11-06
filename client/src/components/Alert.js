import { Alert, AlertTitle, Dialog } from '@mui/material';

export const SuccessAlert = ({ open, title, content}) => {
    return (
        <Dialog open={open}>
            <Alert severity="success">
                <AlertTitle>{title}</AlertTitle>
                { content}
            </Alert>
        </Dialog>
    )
}

export const ErrorAlert = () => {
    return (
        <Dialog open={true}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
            </Alert>
        </Dialog>
    )
}

{/* <Dialog open={isDialogOpen} onClose={closeDialog}>
<Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    This is an error alert — <strong>check it out!</strong>
</Alert>
</Dialog> */}