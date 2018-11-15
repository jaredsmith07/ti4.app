// Global Functions
// ================================================================================
const log = content => { console.log(content) }

const createId = () => {
    return Math.random().toString(16).slice(-6); // for random id, aplha-numeric
};