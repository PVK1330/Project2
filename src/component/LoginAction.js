import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const LoginAction = () => {
    const style = {
        display: "flex",
        justifyContent: "space-between"
    }

    return (
        <div style={style}>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Link to="../forgot-password" relative="path">Forgot Password</Link>
        </div>
    )
}

export default LoginAction;