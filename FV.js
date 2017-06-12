function FV(formId) {
    var form = document.getElementById(formId);
    form.onsubmit = function() {
        var valid = false;
        var totalValid = 0;

        for (i = 0; i < FV.inputs.length; i++) {
            var input = document.getElementById(FV.inputs[i].id);
            var errMsgId = 'fv_err_msg_' + FV.inputs[i].id;
            var errMsg = document.getElementById(errMsgId);

            if (input.value.trim() == '') {
                if (!errMsg) {
                    var errMessageEl = document.createElement('span');
                    var errMessage = document.createTextNode(FV.inputs[i].msgRequired);
                    errMessageEl.setAttribute('id', errMsgId);
                    errMessageEl.setAttribute('style', 'color:red');
                    errMessageEl.appendChild(errMessage);

                    input.outerHTML += errMessageEl.outerHTML;
                }
            } else {
                if (errMsg) {
                    errMsg.remove();
                }
                totalValid++;
            }
        }

        if (totalValid < FV.totalInput) {
            return false;
        }

        return true;
    }

    var FV = {
        inputs: [],
        totalInput: 0,
        set: function(inputId, msgRequired) {
            var msgRequired = msgRequired || 'Required!';

            this.inputs[this.totalInput] = {
                id: inputId,
                msgRequired: msgRequired
            };

            this.totalInput++;
        }
    };

    return FV;
}
