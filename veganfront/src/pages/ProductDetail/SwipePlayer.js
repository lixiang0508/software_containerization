import React from 'react';
import './demo.css'
class SwipePlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0 // 当前轮播第几个图片
        }

    }

    // 点击播放下一张
    _nextImg () {
        var { index } = this.state;
        if (index === this.props.images.length - 1) {
            index = 0;
        } else {
            index++
        }
        this.setState({
            index: index
        })
    }

    // 点击播放上一张
    _prevImg () {
        var { index } = this.state;
        if (index === 0) {
            index = this.props.images.length - 1
        } else {
            index--
        }
        this.setState({
            index: index
        })
    }

    // 当鼠标停留在图片上时
    mouseHoverImg () {
        clearInterval(this.timerId)
    }
    mouseLeaveImg () {
        this.play()
    }

    play () {
        this.timerId = setInterval(() => {
            this._nextImg()
        }, 3000)
    }

    componentDidMount () {
        this.play()
    }
    componentWillUnmount () {
        clearInterval(this.timerId)
    }

    render () {
        var { index } = this.state;
        return (
            <div className="wrap">
                <ul className="list">
                    {
                        this.props.images.map((item, i) => (
                            <li className={`item ${i === index ? 'active' : ''}`} key={i}
                                onMouseOver={() => this.mouseHoverImg()}
                                onMouseLeave={() => this.mouseLeaveImg()}>
                                <img src={item} alt="" />
                            </li>
                        ))
                    }
                </ul>
                <button className="btn left" onClick={() => this._prevImg()} onMouseOver={() => this.mouseHoverImg()}
                        onMouseLeave={() => this.mouseLeaveImg()}>&lt;</button>
                <button className="btn right" onClick={() => this._nextImg()} onMouseOver={() => this.mouseHoverImg()}
                        onMouseLeave={() => this.mouseLeaveImg()}>&gt;</button>
            </div>
        )
    }
}

export default SwipePlayer;