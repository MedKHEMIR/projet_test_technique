'use strict'

function getdetailsbyname() { }

getdetailsbyname.getdatabybame = (argsList, argName) => {
    let argvDetail = {
        found: false,
        value: null
    };

    let index = 0;
    const regex = new RegExp(`^--${argName}`, 'g');
    const regex_withEqual = new RegExp(`^--${argName}=`, 'g');

    while (!argvDetail.found && index < argsList.length) {

        let argumentItem_str = argsList[index];
        let foundIndex = argumentItem_str.search(regex);

        if (foundIndex !== -1) {
            argvDetail.found = true;
            let foundIndex_ = argumentItem_str.search(regex_withEqual);
            if (foundIndex_ !== -1) {
                argvDetail.value = argumentItem_str.replace(regex_withEqual, "");
            }
        }

        index++;
    }


    return (argvDetail);
}

module.exports = getdetailsbyname;