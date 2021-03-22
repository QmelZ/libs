let interfaces = {
    boolc: (e) => new Boolc(){get: e},
    boolf: (e) => new Boolf(){get: e},
    boolf2: (e) => new Boolf2(){get: e},
    boolp: (e) => new Boolp(){get: e},
    cons: (e) => new Cons(){get: e},
    cons2: (e) => new Cons2(){get: e},
    floatc: (e) => new Floatc(){get: e},
    floatc2: (e) => new Floatc2(){get: e},
    floatc4: (e) => new Floatc4(){get: e},
    floatf: (e) => new Floatf(){get: e},
    floatp: (e) => new Floatp(){get: e},
    func: (e) => new Func(){get: e},
    func2: (e) => new Func2(){get: e},
    func3: (e) => new Func3(){get: e},
    intc: (e) => new Intc(){get: e},
    intc2: (e) => new Intc2(){get: e},
    intc4: (e) => new Intc4(){get: e},
    intf: (e) => new Intf(){get: e},
    intp: (e) => new Intp(){get: e},
    prov: (e) => new Prov(){get: e},
};

module.exports = interfaces;
