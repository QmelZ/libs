importPackage(java.lang);

let java = {
    int: (i) => Integer.valueOf(i),
    float: (f) => Float.valueOf(f),
    array: (a) => Seq.with(a).toArray()
};

module.exports = java;
