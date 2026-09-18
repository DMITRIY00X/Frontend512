import React from "react";
import "./Range.css";
class Range extends React.Component {

    state = {
        val: "120",
        width: "",
        height: "",
        marginTop: "10px"
    }

    range = (event) => {
        this.setState({ val: event.target.value, width: [event.target.value], height: [event.target.value] })
    }

    render() {
        const { width, height } = this.state;
        const style = {
            width:`${width}px`,
            height: `${height}px`,
            background: 'blue',
            marginTop: '10px'
        }
        return (
            <div className="range">
                <p>Выберите размер квадрата:</p>
                <input type="range" onChange={this.range} min="10" max="240" step="10"/>
                <p>{this.state.val}</p>

                <div className="cube">
                    <input value={width} placeholder="240" name="width" onChange={this.range} />px
                    *
                    <input value={height} placeholder="240" name="height" onChange={this.range} />px
                    <div style={style} className="figure">

                    </div>
                </div>

            </div>
        )
    }
}

export default Range;