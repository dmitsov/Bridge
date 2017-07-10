Bridge.merge(new System.Globalization.CultureInfo("de-AT", true), {
    englishName: "German (Austria)",
    nativeName: "Deutsch (Österreich)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "€",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 9,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],
        abbreviatedMonthGenitiveNames: ["Jän.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez.",""],
        abbreviatedMonthNames: ["Jän","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""],
        amDesignator: "vorm.",
        dateSeparator: ".",
        dayNames: ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, d. MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd, d. MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d. MMMM",
        monthGenitiveNames: ["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",""],
        monthNames: ["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",""],
        pmDesignator: "nachm.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd.MM.yyyy",
        shortestDayNames: ["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
