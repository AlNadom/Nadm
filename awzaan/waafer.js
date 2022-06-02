/***********************************/
// الوافر
/***********************************/
var waafer =
    bp +
    'من البحور ذات التفعيلة المتكررة ستًّا: (البحر الوافر)، وهو من أشهر بحور الشعر العربي، ومِن أكثرها رَواجًا، وذلك لعذوبة وزنه، وسهولة نظمه، وقد سُمِّيَ بالوافر لوفرة حركاته التي يمكن أن تصل إلى 28 حركة في البيت الواحد.' +
    '<br />◆ أصل بنائه : مُفاعَلَتُنْ مُفاعَلَتُنْ مُفاعَلَتُنْ * مُفاعَلَتُنْ مُفاعَلَتُنْ مُفاعَلَتُنْ' +
    '<br />◆ صوره المروية عن العرب :' +
    '<br />1️⃣ تامٌّ ذو عَروضٍ وضربٍ مَقْطُوفَيْنِ.' +
    '<br />2️⃣ مَجْزُوءٌ ذُو عَروضٍ صحيحة، وضربٍ صحيح.' +
    '<br />3️⃣ مَجْزُوءٌ ذُو عَروضٍ صحيحة، وضربٍ مَعْصُوب.' +
    '<br />4️⃣ مَجْزُوءٌ عَروضٍ وضربٍ مَقْطُوفَيْنِ.' +
    '<br /><a target="_blank" href="https://abuqudamah.com/talkheesat_shafeyah_10">للاستزادة</a>' +
    cp;

// تام
awzaan['waafer1'] = {
    'name': 'بحر الوافر',
    'type': 'تام',
    'desc': '[العروض: مقطوف] - [الضرب: مقطوف]',
    'orig': 'مُفاعَلتُنْ مُفاعَلتُنْ مُفَاعَلْ (فَعُولُنْ) * مُفاعَلتُنْ مُفاعَلتُنْ مُفَاعَلْ (فَعُولُنْ)',
    'taf3eelah': [{
            Key: 'x',
            Value: [
                { K: '1101010', V: 'مُفاعَلْتُنْ' },
                { K: '1101110', V: 'مُفاعَلَتُنْ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '1101010', V: 'مُفاعَلْتُنْ' },
                { K: '1101110', V: 'مُفاعَلَتُنْ' }
            ]
        },
        { Key: '11010', Value: 'فَعُولُنْ' },
        {
            Key: 'x',
            Value: [
                { K: '1101010', V: 'مُفاعَلْتُنْ' },
                { K: '1101110', V: 'مُفاعَلَتُنْ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '1101010', V: 'مُفاعَلْتُنْ' },
                { K: '1101110', V: 'مُفاعَلَتُنْ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '11010', V: 'فَعُولُنْ' },
                { K: '1100', V: 'فَعُولْ' }
            ]
        },
    ],
    'nobdhah': waafer +
        tp +
        '{ORIG}' +
        '<br />● مثال :' +
        '<br />تَذَكَّرْ يَا أَخَا الإِسْلامِ أَنِّي * أخٌ فِي الدِّينِ مِنْكَ وَأَنْتَ مِنِّي' +
        '<br />● الكتابة العَرُوضِيّة:' +
        '<br />تَذَكْكَرْ يَا أَخَ لْإِسْلامِ أنْنِي * أخُنْ فِدْدِينِ مِنْكَ وَأَنْتَ مِنْنِي' +
        '<br />● ترميز البيت:' +
        '<br />(//ه/ه/ه) (//ه/ه/ه) (//ه/ه) * (//ه/ه/ه) (//ه///ه) (//ه/ه)' +
        cp
};

// 1 مجزوء
awzaan['waafer2'] = {
    'name': 'بحر الوافر',
    'type': 'مجزوء',
    'desc': '[العروض: صحيحة] - [الضرب: صحيح]',
    'orig': 'مُفاعَلتُنْ مُفاعَلَتُنْ * مُفاعَلتُنْ مُفاعَلَتُنْ',
    'taf3eelah': [{
            Key: 'x',
            Value: [
                { K: '1101010', V: 'مُفاعَلْتُنْ' },
                { K: '1101110', V: 'مُفاعَلَتُنْ' }
            ]
        },
        { Key: '1101110', Value: 'مُفاعَلَتُنْ' },
        {
            Key: 'x',
            Value: [
                { K: '1101010', V: 'مُفاعَلْتُنْ' },
                { K: '1101110', V: 'مُفاعَلَتُنْ' }
            ]
        },
        { Key: '1101110', Value: 'مُفاعَلَتُنْ' },
    ],
    'nobdhah': waafer +
        tp +
        '{ORIG}' +
        '<br />● مثال :' +
        '<br />لِيَكْفِكَ حَاسِدًا حَسَدُهْ * وَمَا تَصْلَى بِهِ كَبِدُهْ' +
        '<br />● الكتابة العَرُوضِيّة:' +
        '<br />لِيَكْفِكَ حَاسِدَنْ حَسَدُهْ * وَمَا تَصْلَى بِهِي كَبِدُهْ' +
        '<br />● ترميز البيت:' +
        '<br />(//ه///ه) (//ه///ه) *  (//ه/ه/ه) (//ه///ه)' +
        cp
};

// مجزوء 2
awzaan['waafer3'] = {
    'name': 'بحر الوافر',
    'type': 'مجزوء',
    'desc': '[العروض: صحيحة] - [الضرب: معصوب]',
    'orig': 'مُفاعَلتُنْ مُفاعَلتُنْ * مُفاعَلتُنْ مُفاعَلْتُنْ',
    'taf3eelah': [{
            Key: 'x',
            Value: [
                { K: '1101010', V: 'مُفاعَلْتُنْ' },
                { K: '1101110', V: 'مُفاعَلَتُنْ' },
                { K: '110101', V: 'مُفاعَلْتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '1101110', V: 'مُفاعَلَتُنْ' },
                { K: '1101010', V: 'مُفاعَلْتُنْ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '1101010', V: 'مُفاعَلْتُنْ' },
                { K: '1101110', V: 'مُفاعَلَتُنْ' },
                { K: '110101', V: 'مُفاعَلْتُ' }
            ]
        },
        { Key: '1101010', Value: 'مُفاعَلْتُنْ' },
    ],
    'nobdhah': waafer +
        tp +
        '{ORIG}' +
        '<br />● مثال :' +
        '<br />شَكَوْتُ وَلَسْتُ مَعْصُومًا * وَقَدْ أُثْقِلْتُ بِالذَّنْبِ' +
        '<br />● الكتابة العَرُوضِيّة:' +
        '<br />شَكَوْتُ وَلَسْتُ مَعْصُومَنْ * وَقَدْ أُثْقِلْتُ بِذْذَنْبي' +
        '<br />● ترميز البيت:' +
        '<br />(//ه///ه) (//ه/ه/ه) * (//ه/ه/ه) (//ه/ه/ه)' +
        cp
};

// مجزوء 3
awzaan['waafer4'] = {
    'name': 'بحر الوافر',
    'type': 'مجزوء',
    'desc': '[العروض: مقطوف] - [الضرب: مقطوف]',
    'orig': 'مُفاعَلتُنْ فَعُولُنْ * مُفاعَلتُنْ فَعُولُنْ',
    'taf3eelah': [{
            Key: 'x',
            Value: [
                { K: '1101010', V: 'مُفاعَلْتُنْ' },
                { K: '1101110', V: 'مُفاعَلَتُنْ' },
            ]
        },
        { Key: '11010', Value: 'فَعُولُنْ' },
        {
            Key: 'x',
            Value: [
                { K: '1101010', V: 'مُفاعَلْتُنْ' },
                { K: '1101110', V: 'مُفاعَلَتُنْ' },
            ]
        },
        { Key: '11010', Value: 'فَعُولُنْ' },
    ],
    'nobdhah': waafer +
        tp +
        '{ORIG}' +
        '<br />● مثال :' +
        '<br />أَشَاقَكَ طَيفُ مَامَه * بِمَكْةَ أَمْ حَمَامَهْ' +
        '<br />● الكتابة العَرُوضِيّة:' +
        '<br />أَشَاقَكَ طَيفُ مَامَه * بِمَكْكَةَ أَمْ حَمَامَهْ' +
        '<br />● ترميز البيت:' +
        '<br />(//ه///ه) (//ه/ه) * (//ه/ه/ه) (//ه/ه)' +
        cp
};