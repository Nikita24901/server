import ru_global from './ru_global';

var exports = {};

exports.lang = "ru";

exports.localizations = {};

exports.addLocalization = (lang, array) =>
{
    var newarray = {...exports.localizations[lang], ...array};
    exports.localizations[lang] = newarray;
}

exports.getLabelText = (dictionary, labelname) =>
{
    return exports.tryReturnText(exports.localizations[exports.lang][dictionary][labelname], labelname);
}

exports.tryReturnText = (array, labelname) =>
{
    if(array == undefined) return `Error label '${labelname}'`;
    else return array;
}

exports.addLocalization("ru", ru_global);

export default exports;  