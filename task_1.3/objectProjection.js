function projectObject(sourceObj,prototypeObj){
    const projectedObj = {};

    for (let val in prototypeObj) {
        if (sourceObj.hasOwnProperty(val)){
            projectedObj[val] = sourceObj[val];
        }
    }

    return projectedObj;
}

const src = {
    prop11: {
        prop21: 21,
        prop22: {
            prop31: 31,
            prop32: 32
        }
    },
    prop12: 12
};

const proto = {
    prop11: {
        prop22: null
    }
};

console.log(projectObject(src, proto));