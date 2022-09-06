const { toXML } = require('jstoxml');
const fs = require('fs');

var jscontent = fs.readFileSync('./sample.json', 'utf8');
jscontent = JSON.parse(jscontent);

const content = {
    propOne: 123,
    propTwo: 'someValue',
    objOne: {
        propThree: true,
        arrOne: [
            'someOtherVal',
            'someMoreVals'
        ]
    },
    arrTwo: [
        'someOtherVal',
        'someMoreVals'
    ]
};

// console.log(content);

const config = {
    indent: '    '
};

// console.log(toXML(content, config));
console.log(toXML(jscontent, config));

// fin
