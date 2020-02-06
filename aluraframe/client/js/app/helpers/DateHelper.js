class DateHelper {

    constructor() {
        throw new Error("DateHelper uses static methods, can't be instanciated");
    }

    static textToDate(text) {

        /**In order to create a Date instance, we will need to prepare the string text for 
         * the Date constructor. Date can be instanciated as: 
         * new Date(2006,7,30) but this way the month starts at 0
         * new Date('2006-7-30')
         * new Date('2006,7,30')
         * new Date(['2016-7-30'])
         * new Date(['2016-7-30'])
         * new Date(['2016','7','30']) 
         *  */
        if(!/^\d{4}-\d{2}-\d{2}$/.test(text)) {
            throw new Error(`${text} on Date format yyyy-mm-dd incorrect`);
        }
        return new Date ( ... /* spread operator, each individual element inside the array is placed into each of functions parameters */
            text.split('-')
                .map( (item,index) => index == 1 ? item - 1 : item )
        );
    }

    static dateToText(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}