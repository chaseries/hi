
const lookupTrans = (ts, from, to) => {
  const exactMatches = ts.filter((t) => { 
    return (t.from === from) && (t.to === to); 
  });

  if (exactMatches.length > 0) { return exactMatches[0].trans; }

  const partialMatches = ts.filter((t) => {
    const helper = (v1, v2) => {
      return (v1 === v2) || (v1 === "*");
    };
    return helper(t.from, from) && helper(t.to, to);
  });

  if (partialMatches.length > 0) { return partialMatches[0].trans; }

  return null;
};

export const getCurrentTrans = (state, from, to) => {
  if (state.override !== null) { return state.override; }
  const fallback = lookupTrans(state.defaults, from, to);
  if (fallback !== null) { return fallback; }
  return null;
};
