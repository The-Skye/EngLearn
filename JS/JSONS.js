// import ex from '../Libs/words.json'
// console.log(typeof(ex));

// export const response = await fetch('../Libs/words.json');
// export const data = await response.json();
// export const response1 = await fetch('../Libs/tobe.json');
// export const data1 = await response1.json();
export const res0 = await fetch('../Libs/allWords.json');
export const allWords = await res0.json();
export const res = await fetch('../Libs/randLib.json');
export const randLib = await res.json();
export const res1 = await fetch('../Libs/tobe.json');
export const tobe = await res1.json();
export const res2 = await fetch('../Libs/pronouns.json');
export const pronouns = await res2.json();
export const res3 = await fetch('../Libs/nationality.json');
export const nationality = await res3.json();
export const res4 = await fetch('../Libs/professions.json');
export const professions = await res4.json();
export const res5 = await fetch('../Libs/numbers.json');
export const numbers = await res5.json();
export const res6 = await fetch('../Libs/possessive-pronouns.json');
export const possessivePronouns = await res6.json();
export const res7 = await fetch('../Libs/family.json');
export const family = await res7.json();


// console.log(data);

// export function test(a) {
//     if (data['name'] == a) {
//         console.log(1243);
//     }
// }