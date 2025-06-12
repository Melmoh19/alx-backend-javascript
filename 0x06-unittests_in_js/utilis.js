const Utils = {
  calculateNumber: (type, a, b) {
    const valA = Math.round(a);
    const valB = Math.round(b);
    if (type === 'SUM') {
      return valA + valB;
    }
    else if (type === 'SUBTRACT') {
      return valA - valB;
    }
    else if (type === 'DIVIDE') {
      if (valB === 0) {
        return "Error";
      }
      else {
        return valA / valB;
      }
    }
  }
}

module.exports = Utils;
