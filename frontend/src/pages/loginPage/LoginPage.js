import Input from "../components/input/Input.js"
import "./LoginPage.scss"

export default function LoginPage() {
    return (
        <div className="login-page-view">
            <div className="box">
                <div className="message">
                    <p>Dołącz do Tinder dla zbiórek i pomagaj oddając rzeczy potrzebującym!</p>
                </div>
                <div className="form">
                    <div className="input">
                        <Input placeholder="login" />
                    </div>
                    <div className="input">
                        <Input placeholder="password" />
                    </div>
                </div>
            </div>
        </div>
    );
}