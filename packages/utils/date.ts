import callNew from './callNew'
export function pad(n: number) {
    return (n < 10 ? '0' : '') + n
}

export interface IReadonlyDate {
    readonly clone: Date2
    readonly parts: number[]
    readonly timestamp: number
    readonly year: number
    readonly month: number
    readonly day: number
    readonly dayOfWeek: number
    readonly hours: number
    readonly minutes: number
    readonly seconds: number
    readonly ms: number
    toDate: () => Date
    toString: (format: string) => string
    toDateString: () => string
    valueOf: () => number
    toISOString: () => string
    isSameDayAs: (date: Date2 | Date) => boolean
}

class Date2 implements IReadonlyDate {
    private readonly value: Date
    static stringFormat = 'yyyy-MM-dd HH:mm:ss'
    static dateStringFormat = 'yyyy-MM-dd'

    constructor(value?: number | string | Date | Date2)
    constructor(year: number, month: number, day?: number, hours?: number, minutes?: number, seconds?: number, ms?: number)
    constructor(...args: any) {
        if (args.length === 1 && args[0] instanceof Date2) {
            this.value = new Date((args[0] as Date2).timestamp)
        } else if (args.length > 1) {
            this.value = callNew(Date, args.map((n: number, i: number) => i === 1 ? n - 1 : n))
        } else {
            this.value = callNew(Date, args)
        }
    }

    static formString(s: string, format?: string): Date2 {
        return new Date2(s)
    }

    static now(): Date2 {
        return new Date2()
    }

    toString(format: string) {
        return format.replace(/yyyy|MM|M|dd|d|HH|H|mm|m|ss|s/g, (match) => {
            if (match === 'yyyy') {
                return this.year.toString()
            }else if(match === 'MM'){
                return pad(this.month).toString()
            }else if(match === 'dd'){
                return pad(this.day).toString()
            }else if(match === 'HH'){
                return pad(this.hours).toString()
            }else if(match === 'mm'){
                return pad(this.minutes).toString()
            }else if(match === 'ss'){
                return pad(this.seconds).toString()
            }else if(match === 'M'){
                return this.month.toString()
            }else if(match === 'd'){
                return this.day.toString()
            }else if(match === 'H'){
                return this.hours.toString()
            }else if(match === 'm'){
                return this.minutes.toString()
            }else if(match === 's'){
                return this.seconds.toString()
            }else{
                return match
            }
        })
    }

    toDate() {
        return this.value
    }

    toDateString() {
        return this.toString(Date2.dateStringFormat)
    }

    valueOf() {
        return this.timestamp
    }

    toISOString() {
        return this.value.toISOString()
    }

    isSameDayAs(date: Date2 | Date) {
        return this.toDateString() === new Date2(date).toDateString()
    }

    get clone() {
        return new Date2(this.value)
    }

    get parts() {
        return [this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.ms]
    }

    get timestamp() {
        return this.value.getTime()
    }

    get year() {
        return this.value.getFullYear()
    }

    set year(value) {
        this.value.setFullYear(value)
    }

    get month() {
        return this.value.getMonth() + 1
    }

    set month(value) {
        this.value.setMonth(value - 1)
    }

    get day() {
        return this.value.getDate()
    }

    set day(value) {
        this.value.setDate(value)
    }
    setDay(value: number) {
        this.day = value;
        return this
    }
    setMonth(value: number) {
        this.month = value;
        return this
    }
    setYear(value: number) {
        this.year = value;
        return this
    }

    addDay(value: number) {
        this.day += value;
        return this
    }

    addYear(n: number) {
        const day = this.day
        this.day = 1
        this.year += n
        this.day = day;
        return this
    }

    addMonth(n: number) {
        const day = this.day;
        this.day = 1;
        this.month += n;
        this.day = day
        return this
    }

    get dayOfWeek() {
        return this.value.getDay()
    }

    get hours() {
        return this.value.getHours()
    }

    set hours(value: number) {
        this.value.setHours(value)
    }

    get minutes() {
        return this.value.getMinutes()
    }

    set minutes(value: number) {
        this.value.setMinutes(value)
    }

    get seconds() {
        return this.value.getSeconds()
    }

    set seconds(value: number) {
        this.value.setSeconds(value)
    }

    get ms() {
        return this.value.getMilliseconds()
    }

    set ms(value: number) {
        this.value.setMilliseconds(value)
    }
}

export default Date2