import "./Footer.css";

function Footer(props) {
    let { textFooter } = props;
    return (
        <div className="footer">
            <h4>&copy; {textFooter}</h4>
        </div>
    )
}

export default Footer;