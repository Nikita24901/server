import React, { Component } from 'react';
import { connect } from 'react-redux';

// Work element
import Work from './works_item.jsx.js';

// Works images
import preview_lawnmower from '../../../assets/img/help/job_lawnmower.png';
import preview_electrican from '../../../assets/img/help/job_electrican.png';
import preview_postmen from '../../../assets/img/help/job_postmen.png';
import preview_taxi from '../../../assets/img/help/job_taxi.png';
import preview_bus from '../../../assets/img/help/job_bus.png';
import preview_mechanic from '../../../assets/img/help/job_mechanic.png';
import preview_trucker from '../../../assets/img/help/job_trucker.png';
import preview_coater from '../../../assets/img/help/job_coater.png';

class Works extends Component {

    state = {
        work_list: ["LAWNMOWER", "ELECTRICIAN", "POSTMEN", "TAXI", "BUS", "MECHANIC", "TRUCKER", "COATER"],
        work: 0
    }

    onNext = () =>
    {
        this.setState({work: this.state.work + 1});
        if(this.state.work >= this.state.work_list.length - 1)
        {
            this.setState({work: 0});
        }
    }

    onPrevious = () =>
    {
        this.setState({work: this.state.work - 1});
        if(this.state.work <= 0)
        {
            this.setState({work: this.state.work_list.length - 1});
        }
    }

    render() {

        let work = false;
        if(this.state.work != -1)
        {
            switch(this.state.work_list[this.state.work])
            {
                case "LAWNMOWER":
                    work = <Work
                        title="Газонокосильщик" 
                        description="Отличная возможность для хоть какого-то первоначального заработка будучи приезжим, работа не из грязных, да и к тому же не требует лицензий или опыта, главное уметь нажать на газ и вовремя повернуть руль, косите траву сидя на месте, отдыхайте и зарабатывайте."
                        payment="2$ за контрольную точку."
                        preview={preview_lawnmower}
                        level="0"
                        next={this.onNext}
                        previous={this.onPrevious}
                    /> 
                    break;
                case "ELECTRICIAN":
                    work = <Work
                        title="Электрик" 
                        description="Сложная, но хорошо оплачиваемая работа, если вы крепки духом и здоровьем, подтянуты в физическом плане и не боитесь до ужаса изнуряющих часовых пробежек от электрощита к щиту, для исправления вновь и вновь появляющихся неисправностей, эта работа создана для вас!"
                        payment="7$ за контрольную точку."
                        preview={preview_electrican}
                        level="0"
                        next={this.onNext}
                        previous={this.onPrevious}
                    />
                    break;
                case "POSTMEN":
                    work = <Work
                        title="Почтальон" 
                        description="Одна из профессий прародителей всех последующих профессий связанных с вождением либо перевозками. Требует примерное знание местности, и наличие водительских прав категории В (легковое авто), в связи с тем что передвижение происходит по дорогам общего пользования, а это требует знаний правил дорожного движения."
                        payment="в районе 1.700$ за час работы."
                        preview={preview_postmen}
                        level="1"
                        next={this.onNext}
                        previous={this.onPrevious}
                    />
                    break;
                case "TAXI":
                    work = <Work
                        title="Таксист" 
                        description="Работа мечты для тех - кто любит ездить на машине, и болтать с разными людьми. Требует примерное знание местности, наличие водительских прав категории B (легковые авто), в связи с тем что передвижение происходит по дорогам общего пользования, а это требует знаний правил дорожного движения."
                        payment="цена одного заказа от 20$ до 200$."
                        preview={preview_taxi}
                        level="2"
                        commands='
                            <div><span>/tprice [ID] [Цена]</span> - выписать пассажиру чек за проезд в такси.</div>
                            <div><span>/accept [ID]</span> - принять вызов такси.</div>
                        '
                        next={this.onNext}
                        previous={this.onPrevious}
                    />
                    break;
                case "BUS":
                    work = <Work
                        title="Водитель автобуса" 
                        description="Это профессия, которая требует максимальной концентрации и хороших навыков вождения. Для работы вам необходимо права категории «С». Развозите людей по определенному маршруту - от остановки до остановки."
                        payment="в районе 2.000$ за час работы"
                        preview={preview_bus}
                        level="2"
                        next={this.onNext}
                        previous={this.onPrevious}
                    />
                    break;
                case "MECHANIC":
                    work = <Work
                        title="Автомеханик" 
                        description="Если вы любите копаться в двигателях машин, разбираетесь в этом и делаете это быстро - то это работа определенно для вас. Чините и заправляйте машины, зарабатывая на этом!"
                        payment="цена одного заказа от 50$ до 300$."
                        preview={preview_mechanic}
                        level="4"
                        commands='
                            <p><span>/repair [ID] [Цена]</span> - выписать чек за починку авто.</p>
                            <p><span>/sellfuel [ID] [Литры] [Цена/Литр]</span> - выписать чек за заправку авто.</p>
                            <p><span>/buyfuel [ID] [Литры]</span> - приобрести топливо для дальнейшей заправки им.</p>
                        '
                        next={this.onNext}
                        previous={this.onPrevious}
                    />
                    break;
                case "TRUCKER":
                    work = <Work
                        title="Дальнобойщик" 
                        description="Если ваш организм привык к долгому отсутствию сна и вы также можете сохранять концентрацию и следить за дорогой, то вам определенно подойдет эта работа. Вам необходимо иметь права категории «С». Развозите товары по заказам и зарабатывайте!"
                        payment="цена одного заказа от 500$ до 2000$."
                        preview={preview_trucker}
                        level="5"
                        commands='
                            <p><span>/orders</span> - открыть меню заказов.</p>
                            <p><span>/t [Сообщение]</span> - рация дальнобойщиков.</p>
                        '
                        next={this.onNext}
                        previous={this.onPrevious}
                    />
                    break;
                case "COATER":
                    work =  <Work
                        title="Инкассатор" 
                        description="Если вы настоящий мужчина и не боитесь везти огромную кучу денег в машине, то работа определенно для вас. По пути вас могут попытаться ограбить бандиты, если их оказалось больше, то лучше не рисковать и отдать им что они требуют. Для данной работы вам необходимо иметь права категории «С». Развозите мешки с деньгами по банкоматам и зарабатывайте!"
                        payment="в районе 2.500$ за час работы."
                        preview={preview_coater}
                        level="8"
                        next={this.onNext}
                        previous={this.onPrevious}
                    />
                    break;
                default:
                    work = false;
                    break;
            }
        }
        
        return (
            <React.Fragment>
                <div className="content">
                    {work}
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
};

export default connect(mapStateToProps)(Works);