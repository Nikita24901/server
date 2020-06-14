import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../helpers/store';
import rage from '../../../helpers/ragemp';

import backgroundShadow from '../../../assets/img/hud/chat/shadow.png';

class Chat extends Component {
    state = {
        timestamp: false,

        input: false,
        inputValue: "",
        
        buffer: [],
        bufferstate: -1,
        buffercurrent: "",

        fadetimer: null,
        transparentchat: 1.0,
        fadetimechatout: 50,
    };

    forceMakeChatTransparent = () => {
        const t = this;
        var timerId = setInterval(function() {
            if(t.state.transparentchat <= 1.0) {
                t.setState({ transparentchat: t.state.transparentchat + 0.1 });
            } else {
                clearInterval(timerId);
            }
        }, this.state.fadetimechatout);
    }

    setChatTransparent = (state) => {

        if(this.fadetimer) clearTimeout(this.fadetimer);
        if(!state) {
            const t = this;
            var timerId = setInterval(function() {
                if(t.state.transparentchat > 4.0) {
                    t.setState({ transparentchat: t.state.transparentchat - 0.1 });
                } else {
                    clearInterval(timerId);
                }
            }, this.state.fadetimechatout);
        } else {
            this.fadetimer = setTimeout(this.forceMakeChatTransparent, this.state.fadetimeout);
        }
    }

    setInputFocused = () => {
        var input = document.getElementById("textInput");
        input.focus();
        input.selectionStart = this.state.inputValue.length;
    }

    componentWillMount = () => {

        // Chat API
        window.chat = {
            updateConfig: (config, value) => 
            {
                if(config == 0) // Timestamp
                {
                    this.setState({timestamp: timestamp == 0 ? false : true});

                    if(value == 0) window.chat.addMessage("Отображение времени в сообщениях выключено.");
		            else window.chat.addMessage("Отображение времени в сообщениях включено.");
                }
                /*else if(a == 1) {
                    if(b == 3) b = 0;
                    chat.chatsize = b;
                    if(b == 0) chatmsgs.style.height = '160px';
                    else if(b == 1) chatmsgs.style.height = '280px';
                    else chatmsgs.style.height = '400px';
                }
                else if(a == 2) {
                    if(b == 3) b = 0;
                    chat.fontstep = b;
                    if(b == 0) chatmsgs.style.fontSize = '1.4vh';
                    else if(b == 1) chatmsgs.style.fontSize = '1.65vh';
                    else chatmsgs.style.fontSize = '1.8vh';
                }
                else {
                    chat.alpha = b;
                    if(b == 0) {
                        show();
                        chatAPI.push("Таймаут прозрачности чата отключен.");
                    } else chatAPI.push("Таймаут прозрачности чата включен.");
                }*/
            },
            toggleInput: (toggled, clearchat = false, event = false) => {

                if(toggled && !this.state.input)
                {
                    // Включаем отображение поля для ввода
                    this.setState({ input: true });
                    var textInputEl = document.getElementById("textInput");
                    if(textInputEl) {
                        
                        textInputEl.focus();
                        this.setChatTransparent(false);
                        this.setState({bufferstate: -1, inputValue: this.state.buffercurrent});
                        this.setInputFocused();

                        if(event) rage.CallClient("client:OnChatInputChanged", true);
                    }
                }
                else
                {
                    // Выключаем отображение поля для ввода
                    this.setChatTransparent(true);
                    this.setState({
                        buffercurrent: clearchat ? "" : this.state.inputValue,
                        bufferstate: -1,
                        inputValue: "",
                        input: false
                    });

                    if(event) rage.CallClient("client:OnChatInputChanged", false);
                }
            },
            toggleTimestamp: (toggle) => {
                store.dispatch({type: 'CHAT_SETTINGS', payload: {name: "timestamp", value: toggle}});
            },
            addMessage: (message, clearhtml = true) => {
                if(clearhtml) message = message.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
                if(message.length)
                {
                    store.dispatch({type: 'MESSAGE_ADD', payload: {text: message}});
                    this.setChatTransparent(false);
                    this.setChatTransparent(true);
                }
            }
        }

        // RAGE Multiplayer chat api
        window.chatAPI = {
            push: (message) => {
                window.chat.addMessage(message, false)
            }
        }
    }

    handleKeyUp = (event) => {

        if(this.state.input)
        {
            switch(event.which) {
                case 13: // Отправляем сообщение
                    this.onSubmit();
                    break;
                default:
                    break;
            }
        }
    }

    handleKeyDown = (event) => {

        if(this.state.input)
        {
            switch(event.which) {
                case 38: // Поднимаем буфер вверх
                {
                    event.preventDefault();
                    if(this.state.bufferstate === -1) {
                        this.setState({
                            bufferstate: this.state.buffer.length - 1,
                            buffercurrent: this.state.inputValue
                        });
                    }
                    else if(this.state.bufferstate > 0) this.setState({bufferstate: this.state.bufferstate - 1});
                    else 
                    {
                        return false;
                    };
                    
                    if(this.state.buffer[this.state.bufferstate])
                    {
                        this.setState({inputValue: this.state.buffer[this.state.bufferstate]});
                    }

                    this.setInputFocused();
                    return false;
                }
                case 40: // Опускаем буфер вниз
                {
                    event.preventDefault();
                    if(this.state.bufferstate === -1) break;
                    if(this.state.bufferstate < this.state.buffer.length - 1) this.setState({bufferstate: this.state.bufferstate + 1})
                    else {
                        this.setState({
                            inputValue: this.state.buffercurrent,
                            bufferstate: -1,
                            buffercurrent: ""
                        });
                        break;
                    }

                    if(this.state.buffer[this.state.bufferstate])
                    {
                        this.setState({inputValue: this.state.buffer[this.state.bufferstate]});
                    }

                    this.setInputFocused();
                    break;
                }
                default:
                    break;
            }
        }
    }

    onSubmit = () => {
        
        this.setState({ 
            bufferstate: -1,
            buffercurrent: ""
        });

        if(this.state.inputValue)
        {
            if(this.state.buffer.length > 50) this.state.buffer.shift();

            // Не сохраняем одинаковые друг за другом идучие сообщения
            if(this.state.buffer[this.state.buffer.length - 1] !== this.state.inputValue) this.state.buffer.push(this.state.inputValue);
            if(this.state.inputValue[0] === '/')
            {
                var command = this.state.inputValue;
                command = command.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
                command = command.substr(1);
                if (command.length > 0)
                {
                    mp.invoke("command", command);
                }

            } else {
                var message = this.state.inputValue;
                message = message.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
                if(message.length > 0 && message !== null && message.match(/^ *$/) === null)
                {
                    window.mp.invoke("chatMessage", message);
                }
            }
        }
        window.chat.toggleInput(false, true, true);
    }

    handleChange = (event) => {
		const target = event.target;
        const value = target.value;
		this.setState({inputValue: value});
    }

    componentDidMount() {
        document.addEventListener("keyup", this.handleKeyUp);
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.handleKeyUp);
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    formatMessage(text) {
        
        let matches = [], m = null, curPos = 0;
        do {
            m = /\{#[A-Fa-f0-9]{3,6}\}|\{[A-Fa-f0-9]{3,6}\}/g.exec(text.substr(curPos));
            if(!m) break;
            matches.push({found: m[0],index: m['index'] + curPos});
            curPos = curPos + m['index'] + m[0].length;
        } while(m !== null);

        if(matches.length > 0) {
            text += '</font>';
            for(let i = matches.length - 1; i >= 0; --i) {
                let color = matches[i].found.substring(1, matches[i].found.length - 1);
                let insertHtml = (i !== 0 ? '</font>' : '') + '<font color="' + color + '">';
                text = text.slice(0, matches[i].index) + insertHtml + text.slice(matches[i].index + matches[i].found.length, text.length);
            }
        }
        return text;
    }

    getTimestamp(time) {
        // return formatIntZero
        return `[${('0' + time.getHours()).slice(-2)}:${('0' + time.getMinutes()).slice(-2)}:${('0' + time.getSeconds()).slice(-2)}]`;
    }

    render() {
        return (
            <React.Fragment>
                <div className="chat" style={{opacity: this.state.transparentchat}}>
                    <div className="chatBackgroundShadow">
                        <img src={backgroundShadow} alt="backgroundShadow"/>
                    </div>
                    <div className="messagesList" style={{
                        marginLeft: (this.props.messages.length < 10 || !this.state.input) ? "2px" : "0",
                        overflow: (this.state.input == true) ? "auto" : "hidden"
                        }}>
                        {this.props.messages.map((value) =>
                            <p key={value.id} className={value.tag} dangerouslySetInnerHTML={{ __html: this.formatMessage((this.state.timestamp ? `{#cccccc}${this.getTimestamp(value.time)} {#ffffff}` : '') + value.text) }}/>
                        )}
                    </div>
                    {this.state.input && <div id="input" className="input">
                        <input id="textInput" spellCheck="false" autoComplete="off" maxLength="144" placeholder="Введите сообщение" value={this.state.inputValue} onChange={this.handleChange} /> 
                        <span className="icon-send chatSend" onClick={() => this.onSubmit()}></span>
                    </div>}
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps)(Chat);