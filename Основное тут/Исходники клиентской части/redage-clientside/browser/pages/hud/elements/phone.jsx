import React, { Component } from 'react';
import { connect } from 'react-redux';
import rage from '../../../helpers/ragemp';
import move from '../../../helpers/move';
import $ from '../../../helpers/jquery-3.2.1.js';

class Phone extends Component {

    componentDidMount() {
        window.phone = {
            App: null,
            Home: null,
            Back: null,
            Items: {},
            Lists: [],
            IND: 0,


            open(id, canhome, canback, data) {
                window.phone.reset();
                window.phone.App = id;
                window.phone.Home = canhome;
                window.phone.Back = canback;
                if (window.phone.Back == false) $('.back').addClass('disabled');
                if (window.phone.Home == false) $('.home').addClass('disabled');
                $('.debug').append(id);
                var json = JSON.parse(data);
                json.forEach(function (item, i, arr) {
                    switch (item[2]) {
                        case 0:
                            break;
                        case 1:
                            window.phone.addHeader(item[0], i, item[1], item[4], item[3]);
                            break;
                        case 2:
                            window.phone.addCard(item[0], i, item[1], item[4], item[3]);
                            break;
                        case 3:
                            window.phone.addBtn(item[0], i, item[1], item[4], item[5]);
                            break;
                        case 4:
                            window.phone.addCheck(item[0], i, item[4], item[6]);
                            break;
                        case 5:
                            window.phone.addInput(item[0], i, item[1]);
                            break;
                        case 6:
                            window.phone.addList(item[0], i, JSON.stringify(item[7]));
                            break;
                    }
                    window.phone.IND++;
                });
            },

            show() {
                move('.phone')
                    .duration(0)
                    .y(100)
                    .end(function () {
                        move('.phone')
                            .y(0)
                            .set('opacity', 1)
                            .end();
                    });
            },

            hide() {
                move('.phone')
                    .y(100)
                    .set('opacity', 0)
                    .end();
            },

            addHeader(id, index, text, col, color) {
                var pure = "pure-u-";
                var style = "";
                if (col === 1) pure = pure + col;
                else pure = pure + '1-2';
                style = window.phone.getColor(color);

                var card = '<div id="' + index + '" data-id="' + id + '" class="' + pure + '">\
                <h1 class="'+ style + '">' + text + '</h1></div>';
                $('.main').append(card);
            },

            addBtn(id, index, title, col, big) {
                var callback = "window.phone.call('" + id + "','button');";
                var pure = "pure-u-";
                var style = "button";
                if (col === 1) pure = pure + col;
                else pure = pure + '1-2';
                if (big == true) style = style + " big";

                var btn = '<div id="' + index + '" data-id="' + id + '" class="' + pure + '">\
                <div onClick="'+ callback + '" class="' + style + '">' + title + '</div></div>';
                $('.main').append(btn);
            },

            addCard(id, index, text, col, color) {
                var pure = "pure-u-";
                var style = "";
                if (col === 1) pure = pure + col;
                else pure = pure + '1-2';
                style = window.phone.getColor(color);

                var card = '<div id="' + index + '" data-id="' + id + '" class="' + pure + '">\
                <p class="'+ style + '">' + text + '</p></div>';
                $('.main').append(card);
            },

            addInput(id, index, title) {
                var inp = '<div id="' + index + '" data-id="' + id + '" class="pure-u-1">\
                <input type="text" placeholder="'+ title + '"></div>';
                $('.main').append(inp);
            },

            addList(id, index, elements) {
                var data = JSON.parse(elements);
                var callback = "window.phone.call('" + id + "','listSelect');";
                var callLeft = "listChange('" + index + "','left');";
                var callRight = "listChange('" + index + "','right');";
                window.phone.Lists[index] = data;

                var list = '<div id="' + index + '" data-id="' + id + '" class="pure-u-1"><div class="list">\
                <i class="left flaticon-left-arrow" onClick="'+ callLeft + '"></i>\
                <input id="l0" type="text" value="'+ data[0] + '" onClick="' + callback + '" readOnly>\
                <i class="right flaticon-arrowhead-pointing-to-the-right" onClick="'+ callRight + '"></i>\
                </div></div>';
                $('.main').append(list);
            },
            
            addCheck(id, index, col, checked) {
                var pure = "pure-u-";
                var chk = "";
                if (checked) chk = " checked";
                if (col === 1) pure = pure + col;
                else pure = pure + '1-2';
                var callback = "window.phone.call('" + id + "','checkbox');";

                var box = '<div id="' + index + '" data-id="' + id + '" class="' + pure + '">\
                <input type="checkbox"'+ chk + ' onClick="' + callback + '"></div>';
                $('.main').append(box);
            },
            // ELEMENTS //
            // SPECIAL //
            change(ind, data) {
                var pure = "pure-u-";
                var json = JSON.parse(data);
                if (json[4] === 1) pure = pure + json[4];
                else pure = pure + '1-2';
                var e = $('#' + ind); //main element
                var c = e.children(); //children element
                var style = "";
                if (json[5] == true) style = " big";
                var chk = "";
                if (json[6]) chk = " checked";
                switch (json[2]) {
                    case 0:
                        break;
                    case 1:
                        c.removeClass(); c.addClass(window.phone.getColor(json[3])); c.html(json[1]);
                        break;
                    case 2:
                        e.removeClass(); e.addClass(pure); c.removeClass(); c.addClass(window.phone.getColor(json[3])); c.html(json[1]);
                        break;
                    case 3:
                        e.removeClass(); e.addClass(pure); c.removeClass(); c.addClass("button" + style); c.html(json[1]);
                        break;
                    case 4:
                        e.removeClass(); e.addClass(pure);
                        break;
                    case 5:
                        c.html(json[1]);
                        break;
                    case 6:
                        break;
                }
            },

            listChange(id, btn) {
                var e = $('#' + id);
                //console.log(e);
                var ind = Number(e.children().children()[1].id.substr(1));
                var items = window.phone.Lists[id];
                //console.log(ind);
                //console.log(items);
                if (btn == 'right') {
                    if (ind + 1 < items.length) ind++;
                } else {
                    if (ind - 1 >= 0) ind--;
                }
                e.children().children()[1].value = items[ind];
                e.children().children()[1].id = "l" + ind;
                window.phone.call(e[0].dataset.id, 'listChange' + btn);
            },

            getColor(id) {
                var Color = "";
                switch (id) {
                    case 0: break;
                    case 1: Color = " red"; break;
                    case 2: Color = " green"; break;
                    case 3: Color = " blue"; break;
                    case 4: Color = " yellow"; break;
                    case 5: Color = " orange"; break;
                    case 6: Color = " teal"; break;
                    case 7: Color = " cyan"; break;
                    case 8: Color = " lime"; break;
                }
                return Color;
            },

            getData() {
                var data = {};
                for (var i = 0; i <= window.phone.IND - 1; i++) {
                    var element = $('#' + i);//getting by index
                    var id = element.get(0).id;//element id
                    //console.log(element);
                    var child = element.children();//child with data
                    if (child.get(0).tagName === "INPUT") {
                        if (child.attr("type") === "checkbox") {
                            data[id] = child.prop("checked"); //checkbox state
                        } else {
                            data[id] = child.val();//textarea value
                        }
                    }
                    else if (child.get(0).tagName === "DIV") {
                        if (child[0].className !== "list") continue;
                        var lst = {};//list data arr
                        lst["Index"] = Number(child.children().get(1).id.substr(1));//index of selected item
                        lst["Value"] = child.children().get(1).value;//list value
                        data[id] = lst;
                    }
                }
                return JSON.stringify(data);
            },

            reset() {
                $('.debug').html("AppID: ");
                window.phone.App = null;
                window.phone.Close = null;
                window.phone.Items = {};
                window.phone.Lists = [];
                window.phone.IND = 0;
                $('.main').empty();
            },

            call(id, event) {
                rage.CallClient('client:OnPhoneCallback', id, event, window.phone.getData());
            },

            home() {
                if (!window.phone.Home) return;
                rage.CallClient('client:OnPhoneNavigation', 'home');
            },
            
            back() {
                if (!window.phone.Back) return;
                rage.CallClient('client:OnPhoneNavigation', 'back');
            }
            // SPECIAL //
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="phoneBox">
                    <div className="phone" style={{opacity: 0}}>
                        <div className="phone-speaker"></div>
                        <div className="phone-camera"></div>
                        <div className="phone-screen">
                            <div className="bar">
                                <div className="icon-connect-good carrier"><span>RedSpace</span></div>
                                <div className="icon-power-full battery"></div>
                            </div>
                            <div className="pure-g main"></div>
                            <div className="navigation">
                                <div className="back icon-twoarrow"></div>
                                <div className="home icon-phone-home"></div>
                            </div>
                            <div className="debug">Application: </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        settings: state.hud
    };
};

export default connect(mapStateToProps)(Phone);