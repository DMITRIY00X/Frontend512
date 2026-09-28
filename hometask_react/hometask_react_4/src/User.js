import React from "react";
import "./User.css";
class User extends React.Component {



    render() {
        return (
            <div>
                <ul>
                    <li className="hello">Задание выполнено! Текст "hello" исчезает через 5 секунд</li>
                </ul>
            </div>
        )
    }
}

export default User;