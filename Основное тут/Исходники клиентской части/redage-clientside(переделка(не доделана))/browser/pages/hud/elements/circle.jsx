import React, { Component } from 'react';
import { connect } from 'react-redux';
import rage from '../../../helpers/ragemp'

class Circle extends Component {

    state = {
        width: 80,
        height: 80,
        name: "",
        drawname: "",
        icons: [],
        circleData: {
            "Игрок":
            [
                ["givemoney", "offer", "fraction", "passport", "licenses", "heal", "house", "handshake"],
            ],
            "Машина":
            [
                ["hood", "trunk", "doors", "carinv"],
            ],
            "Дом":
            [
                ["sellcar", "sellhouse", "roommate", "invitehouse"],
            ],
            "Фракция":
            [
                [],
                ["rob", "robguns", "pocket"],
                ["rob", "robguns", "pocket"],
                ["rob", "robguns", "pocket"],
                ["rob", "robguns", "pocket"],
                ["rob", "robguns", "pocket"],
                ["leadaway"],
                ["leadaway", "search", "takegun", "takeillegal", "takemask", "ticket"],
                ["sellkit", "offerheal"],
                ["leadaway", "search", "takegun", "takeillegal", "takemask"],
                ["leadaway", "pocket", "rob", "robguns"],
                ["leadaway", "pocket", "rob", "robguns"],
                ["leadaway", "pocket", "rob", "robguns"],
                ["leadaway", "pocket", "rob", "robguns"],
                ["leadaway"],
            ],
            "Категории":
            [
                ["acat1", "acat2", "acat3", "acat4", "acat5", "acat6", "acat7", "acancel"],
            ],
            "Анимации":
            [
                ["seat1", "seat2", "seat3", "seat4", "seat5", "seat6", "seat7", "seat8"],
                ["social1", "social2", "social3", "social4", "social5", "social6", "social7", "socialnext1"],
                ["phis1", "phis2", "phis3", "phis4", "phis5"],
                ["indecent1", "indecent2", "indecent3", "indecent4", "indecent5"],
                ["stay1", "stay2", "stay3", "stay4", "stay5", "stay6", "stay7", "staynext1"],
                ["dance1", "dance2", "dance3", "dance4", "dance5", "dance6", "dance7", "dancenext1"],
                ["mood0", "mood1", "mood2", "mood3", "mood4", "mood5", "mood6", "moodnext1"],
                ["dance8", "dance9", "dance10", "dance11", "dance12", "dance13", "dance14", "dancenext2"],
                ["dance15", "dance16", "dance17", "dance18", "dance19", "dance20", "dance21", "dancenext3"],
                ["dance22", "dance23"],
                ["social8", "social9", "social10", "social11", "social12", "social13", "social14", "socialnext2"],
                ["social15", "social16", "social17", "social18", "social19", "social20", "social21"],
                ["ws0", "ws1", "ws2", "ws3", "ws4", "ws5", "ws6", "ws7"],
                ["stay8", "stay9", "stay10", "stay11"],
            ],
        },
        circleDesc: {
            "handshake": "Пожать руку",
            "licenses": "Показать лицензии",
            "carinv":"Инвентарь",
            "doors":"Открыть/Закрыть двери",
            "fraction":"Фракция",
            "offer":"Предложить обмен",
            "givemoney":"Передать деньги",
            "heal":"Вылечить",
            "hood":"Открыть/Закрыть капот",
            "leadaway":"Вести за собой",
            "offerheal":"Предложить лечение",
            "passport":"Показать паспорт",
            "search":"Обыскать",
            "sellkit":"Продать аптечку",
            "takegun":"Изъять оружие",
            "takeillegal":"Изъять нелегал",
            "trunk":"Открыть/Закрыть багажник",
            "pocket": "Надеть/снять мешок",
            "takemask": "Сорвать маску",
            "rob": "Ограбить",
            "robguns": "Украсть оружие",
            "house": "Дом",
            "ticket": "Выписать штраф",
        
            "sellcar": "Продать машину",
            "sellhouse": "Продать дом",
            "roommate": "Заселить в дом",
            "invitehouse": "Пригласить в дом",
        
            "acancel": "Остановить анимацию",
        
            "acat1": "Сесть/Лечь",
            "acat2": "Социальные",
            "acat3": "Физ. упражнения",
            "acat4": "Неприличное",
            "acat5": "Стойка",
            "acat6": "Танцы",
            "acat7": "Эмоции лица и стили походки",
        
            "seat1": "Сидеть полулёжа",
            "seat2": "Сесть на корточки",
            "seat3": "Сидеть на земле",
            "seat4": "Лечь на землю",
            "seat5": "Валяться на земле",
            "seat6": "Встать на колено",
            "seat7": "Сидеть расслабленно",
            "seat8": "Сесть на лестницу",
        
            "social1": "Поднять руки",
            "social2": "Осмотреть и записать",
            "social3": "Лайк",
            "social4": "Воинское приветствие",
            "social5": "Крутить у виска двумя руками",
            "social6": "Королевское приветствие",
            "social7": "Понтоваться",
            "socialnext1": "Следующая страница",
            
            "social8": "Двойной лайк",
            "social9": "Испугать",
            "social10": "Сдаться",
            "social11": "Медленно хлопать",
            "social12": "Мир",
            "social13": "Отказ",
            "social14": "Радость",
            "socialnext2": "Следующая страница",
            
            "social15": "Показать рыбку",
            "social16": "Фэйспалм",
            "social17": "Показать курочку",
            "social18": "ОК",
            "social19": "Позвать за собой",
            "social20": "РОК",
            "social21": "Мир всем",
        
            "phis1": "Зарядка 1",
            "phis2": "Зарядка 2",
            "phis3": "Качать пресс",
            "phis4": "Отжиматься",
            "phis5": "Медитировать",
        
            "indecent1": "Показать средний палец",
            "indecent2": "Показать что-то ещё",
            "indecent3": "Ковыряться в носу",
            "indecent4": "Показать средний палец всем",
            "indecent5": "Показать средний палец яростно",
        
            "stay1": "Стоять, руки на поясе",
            "stay2": "Размять руки",
            "stay3": "Скрестить руки на груди",
            "stay4": "Стоять, прогнать человека",
            "stay5": "Стоять, отказать в проходе",
            "stay6": "Показать бицепс 1",
            "stay7": "Показать бицепс 2",
            "staynext1": "Следующая страница",
            
            "stay8": "Показать бицепс 3",
            "stay9": "Показать бицепс 4",
            "stay10": "Показать бицепс 5",
            "stay11": "Показать бицепс 6",
        
            "dance1": "Танец 1",
            "dance2": "Танец 2",
            "dance3": "Танец 3",
            "dance4": "Танец 4",
            "dance5": "Танец 5",
            "dance6": "Танец 6",
            "dance7": "Танец 7",
            "dancenext1": "Следующая страница",
            
            "dance8": "Танец 8",
            "dance9": "Танец 9",
            "dance10": "Танец 10",
            "dance11": "Танец 11",
            "dance12": "Танец 12",
            "dance13": "Танец 13",
            "dance14": "Танец 14",
            "dancenext2": "Следующая страница",
            
            "dance15": "Танец 15",
            "dance16": "Танец 16",
            "dance17": "Танец 17",
            "dance18": "Танец 18",
            "dance19": "Танец 19",
            "dance20": "Танец 20",
            "dance21": "Танец 21",
            "dancenext3": "Следующая страница",
            
            "dance22": "Танец 22",
            "dance23": "Танец 23",
            
            "mood0": "Очистить лицевую эмоцию",
            "mood1": "Лицевая эмоция: Презрение",
            "mood2": "Лицевая эмоция: Хмурость",
            "mood3": "Лицевая эмоция: Подшофе",
            "mood4": "Лицевая эмоция: Веселье",
            "mood5": "Лицевая эмоция: Удивление",
            "mood6": "Лицевая эмоция: Злость",
            "moodnext1": "Следующая страница",
            
            "ws0": "Очистить стиль походки",
            "ws1": "Стиль походки: Стремительный",
            "ws2": "Стиль походки: Уверенный",
            "ws3": "Стиль походки: Подшофе",
            "ws4": "Стиль походки: Вразвалку",
            "ws5": "Стиль походки: Грустный",
            "ws6": "Стиль походки: Женственный",
            "ws7": "Стиль походки: Испуганный",
        }
    }

    componentDidMount = () => {
        window.circle = {
            show: (name, id) => {
                window.hud.updateComponent("circle", true);
                this.setState({
                    icons: this.state.circleData[name][id],
                    name: name,
                    drawname: name,
                    width: 480,
                    height: 480
                });
            },
            hide: () => {
                window.hud.updateComponent("circle", false);
                this.setState({width: 80, height: 80});
            },
            setCircle: (name, id) => {
                this.setState({
                    icons: this.state.circleData[name][id],
                    name: name,
                    drawname: name
                });
            }
        }
    }

    onMouseOut = (e) => {
        this.setState({drawname: this.state.name});
    }

    onMouseOver = (e) => {
        let id = e.target.id
        if(id == 8) this.setState({drawname: "Закрыть"});

        else
        {
            let iname = this.state.icons[id]
            if(iname == null) this.setState({drawname: this.state.name});
            else this.setState({drawname: this.state.circleDesc[iname]});
        }
    }

    onCircleClick = (e) => {
        let id = e.target.id
        console.log(id)
        if(id == 8){
            rage.CallClient("client:OnCircleCallback", -1);
            window.circle.hide();
            return;
        }
        rage.CallClient("client:OnCircleCallback", Number(e.target.id));
        window.circle.hide();
    }

    getRenderList = () => {
        var rows = [];
        for (var i = 0; i < 8; i++) {
            if(this.state.icons[i] == undefined)
            {
                rows.push(<li key={i} id={i} style={{pointerEvents: "none"}}></li>);
            }
            else
            {
                rows.push(<li key={i} id={i}>
                    <div id={i} className={"contents " + this.state.icons[i]} onPointerOut={this.onMouseOut} onClick={this.onCircleClick}></div>
                </li>);
            }
        }
        return <ul>{rows}</ul>;
    }

    render() {
        if(this.props.settings.circle)
        {
            return (
                <React.Fragment>
                    <div className="circle" onPointerOut={this.onMouseOut} onPointerOver={this.onMouseOver} style={{width: this.state.width, height: this.state.height}}>
                        <div className="bg"></div>
                        <div id={8} className="center" onClick={this.onCircleClick}>
                            <div id={8} className="text">{this.state.drawname}</div>
                        </div>
                        {this.getRenderList()}
                    </div>
                </React.Fragment>
            );
        }
        else return (<React.Fragment/>);
    }
}

function mapStateToProps(state) {
    return {
        settings: state.hud
    };
};

export default connect(mapStateToProps)(Circle);