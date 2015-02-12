var $ = function (s) {
    return document.querySelector(s);
};

exports.init = function () {
    this.textarea = $("#content")
};

exports.updateTextarea = function (ev, data) {
    if (!data.value) { return; }
    this.textarea.value = data.value;
};
