export const birthdateToString = (date: string, fromNow: boolean): string => {
  const birthObj = new Date(date);
  if (fromNow) {
    const current = new Date();
    const diffSec: number = (current.getTime() - birthObj.getTime()) / 1000;
    const diffDays: number = Math.floor(diffSec / (60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    if (years > 0) {
      const remain_days = diffDays - 365 * years;
      const months = Math.floor(remain_days / 30);
      return `태어난지 ${years}년 ${months}개월 `;
    } else {
      const remain_days = diffDays;
      const months = Math.floor(remain_days / 30);
      return `태어난지 ${months}개월 `;
    }
  } else {
    return `${birthObj.getFullYear()}년 ${birthObj.getMonth() +
    1}월 ${birthObj.getDate()}일생 `;
  }
};

export const dateToString = (date: string, flag?: { full?: boolean, month?: boolean, day?: boolean }): string => {
  if (!flag) flag = {}
  const strDate = new Date(date)
  const year = strDate.getFullYear()
  const month = strDate.getMonth() + 1
  const days = strDate.getDate()
  if (flag.day) {
    return `${days}일`
  } else if (flag.month) {
    return `${month}월 ${days}일`
  } else if (flag.full) {
    return `${year}년 ${month}월 ${days}일`
  } else return `${year}년 ${month}월`
}

export const bmiToString = (BMI: number): {value:string,color:string} => {
  if (BMI > 30) return {value:"비만",color:"#ff5421"};
  else if (BMI < 29 && BMI > 26) return {value:"과체중",color:"#ff5421"};
  else if (BMI > 16 && BMI < 25) return {value:"정상체중",color:""};
  else return {value:"마름",color:'black'};
};

export const getCatStatusValue = (
  pregnant: boolean,
  birthStr: string,
  neutering: boolean,
  BMI: number
): number => {
  const YearCheckReg = /년/g;
  const MonthCheckReg = /\d+/g;
  if (YearCheckReg.exec(birthStr)) {
    if (pregnant) return 3.0;
    if (BMI > 30) return 0.8;
    if (BMI >= 26 && BMI <= 29) return 1;
    if (neutering) {
      return 1.2;
    } else return 1.4;
  } else {
    const regArray: any = MonthCheckReg.exec(birthStr);
    const month: number = Number(regArray[0]);
    if (month < 4) return 3.0;
    else if (month >= 4 && month <= 6) return 2.5;
    else if (month >= 7 && month <= 12) return 2.0;
    return 1.2;
  }
};

export const makeDateArrayForSelect = (start:number,len:number)=>{
  return Array.from({length:len},(i,idx)=>({name:String(start+idx),value:String(start+idx)}))
}