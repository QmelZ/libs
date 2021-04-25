// untested, might not work
importPackage(Packages.arc.util.serialization);

function getModVersion(branch){
    let repo = mod.meta.repo;
    if(!repo) throw new Error("the mod doesn't have a repository");
    
    const jsonlink = "https://raw.githubusercontent.com/" + repo + "/" + branch + "mod.json";
    const hjsonlink = "https://raw.githubusercontent.com/" + repo + "/" + branch + "mod.hjson"
    Core.net.httpGet(jsonlink, e => {
        return parseJval(e.getResultAsString());
    }, () => {
        Core.net.httpGet(hjsonlink, e => {
            return parseJval(e.getResultAsString());
        }, () => {
            throw new Error("this mod doesnt have a mod.(h)json file");
        });
    });
    throw new Error("unknown error"); // if you somehow end up here
}

function parseJval(text){
    try{
        return Jval.read(text).get("version").asString();
    }catch(c){
        throw new Error("error parsing (h)json");
    }
}

function parseModVersion(versionString){
    let arr = versionString.split(".");
    arr.forEach(e => {
        if(parseInt(e) === NaN){
            throw new Error("this mod's version string is not in the format of n.n.n");
            return [];
        }
    });
    return arr;
}

function pressUpdateButton(){
    let modmeta = Vars.mods.locateMod(modName).meta
    let displayName;
    if(!modmeta.displayname){
        displayName = Strings.stripColors(modmeta.name);
    }else{
        displayName = Strings.stripColors(modmeta.displayName);
    }
    Vars.ui.mods.show();
    Vars.ui.mods.cont.children.get(3).children.get(0).children.each(e => {
        if(e.toString().includes("Label: [accent]" + displayName)){
            e.fireClick();
        }
    });
    let buttons = Core.scene.dialog.buttons.children;
    if(buttons.size < 4){
        throw new Error("can't update this mod");
        return;
    }
    let updatebutton = buttons.get(3);
    try{
        updatebutton.fireClick();
        if(Core.scene.dialog.toString().includes("$mod.jarwarn")){
            // also doesnt support java mods yet
        }
        Vars.ui.loadfrag.hide();
    }catch(c){
        throw new Error("unknown error");
    }
}

function compareVersions(v1, v2){
    let arr = [];
    v1.forEach((item1, index) => {
        let item2 = v2[index];
        if(item2 > item1){
            arr.push(true);
        }else{
            arr.push(false);
        }
    });
    if(arr.includes(true)) return true;
    return false;
}

function update(branch){
    try{
        let mod = Vars.mods.locateMod(modName);
        if(!mod) throw new Error("this mod doesn't exist");
        
        let localversion = parseModVersion(mod.meta.version);
        let onlineversion = parseModVersion(getModVersion(branch));
        
        if(compareVersions(localversion, onlineversion)){
            pressUpdateButton();
        }
    }catch(c){
        Vars.ui.showError(c);
    }
}
